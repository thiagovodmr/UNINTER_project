import { SessionService } from './../../../../services/session.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items : any = []

  constructor(
    private service : ListService,
    private sessionService : SessionService,
    private route : Router
  ) { }

  ngOnInit(): void {
   this.getList()
  }

  getList(){
    this.service.listAll().subscribe(
      (res) => {
        this.items = res
      },
      (error) => console.error(error)
    )
  }

  getListByCategory(id : number){
    this.service.listByCategory(id).subscribe(
      (res) => {
        this.items = res
      },
      (error) => console.error(error)
    )
  }

  addInCar(itemId : number){
    const user = this.sessionService.getUserLogged();
    if(user.id){
      this.service.PostAddCar(itemId, user.id).subscribe(
        (res) => {
          alert("item adicionado ao carrinho")
           console.log(res)
        },
        (error) => console.error(error)
      )
    }else{
      this.route.navigate(["/login"])
    }

  }
}


