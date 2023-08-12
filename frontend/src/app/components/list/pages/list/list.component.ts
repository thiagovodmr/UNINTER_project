import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items : any = []

  constructor(
    private service : ListService
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
}


