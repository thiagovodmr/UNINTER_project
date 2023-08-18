import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private route: Router
  ) { }

  ngOnInit(): void {
    this.loadItems()
  }

  changeCont(index: number, event: any){
    const value = parseFloat(event.target.value);
    const row = this.items[index]

    row.cont = value
    row.price = parseFloat(row.cont) * (row.item.price)

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
        }else{
          console.log(res)
        }
      },
      (error) => {console.log(error)}
    )
  }

}
