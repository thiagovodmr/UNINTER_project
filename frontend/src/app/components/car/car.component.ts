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
  items : any = []

  constructor(
    private carService : CarService,
    private sessionService : SessionService,
    private route: Router
  ) { }

  ngOnInit(): void {
    const user = this.sessionService.getUserLogged()
    if(user){
      this.carService.listAll(user.id).subscribe(
        (res) => {
          this.items = res.map((row : any) => {
              return {...row, cont: 1, price: row.item.price}
          })
        },
        (error) => {console.log(error)}
      )
    }else{
      this.route.navigate(["/login"])
    }
  }

  changeCont(index: number, event: any){
    const value = parseFloat(event.target.value);
    const row = this.items[index]

    row.cont = value
    row.price = parseFloat(row.cont) * (row.item.price)
  }

}
