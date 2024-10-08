import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarEmitterService } from 'src/app/emitter/car-emitter.service';
import { CarService } from 'src/app/services/car.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  items : any = [];
  totalPrice : number = 0;

  constructor(
    private carService : CarService,
    private sessionService : SessionService,
    private route: Router,
    private emitter: CarEmitterService
  ) { }

  ngOnInit(): void {
    this.loadItems()
  }

  changeCont(index: number, event: any){
    const value = parseFloat(event.target.value);
    const row = this.items[index]

    row.qtd = value
    row.price = parseFloat(row.qtd) * (row.item.price)

    this.updateTotalPrice()
  }

  loadItems(){
    const user = this.sessionService.getUserLogged()
    if(user){
      this.carService.listAll(user.id).subscribe(
        (res) => {
          this.items = res
          this.updateTotalPrice()
        },
        (error) => {console.log(error)}
      )
    }else{
      this.route.navigate(["/login"])
    }
  }

  updateTotalPrice(){
    this.totalPrice = 0;
    this.items.forEach((item : any) => {
      this.totalPrice += item.price
    });
  }

  deleteDemand(carId: string){
      this.carService.deleteDemand(carId).subscribe(
        (res) => {
          if(res == true){
            alert("pedido deletado com sucesso!!")
            this.loadItems()
          }else{
            console.log(res)
          }
        },
        (error) => {console.log(error)}
      )
  }


  confirmDemand(){
    const data = {
      clientId : this.sessionService.getUserLogged().id,
      items: this.items
    }
    this.carService.confirmDemand(data).subscribe(
      (res) => {
        if(res == true){
          alert("pedido realizado com sucesso!!")
          this.loadItems();
          this.emitter.sendEvend(true)
        }else{
          console.log(res)
        }
      },
      (error) => {console.log(error)}
    )
  }

}
