import { SessionService } from 'src/app/services/session.service';
import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  queue : any = []

  constructor(
    private service: QueueService,
    private session: SessionService
  ) { }

  ngOnInit(): void {
    const id = this.session.getUserLogged().id
    this.service.listAll(id).subscribe(
      (res) => {
        this.queue = res
      },
      (err) => console.log(err)
    )
  }

}
