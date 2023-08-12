import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { environment } from 'src/environments/environment';

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
    this.service.listAll().subscribe(
      (res) => {
        console.log(res)
        this.items = res
      },
      (error) => console.error(error)
    )
  }

}
