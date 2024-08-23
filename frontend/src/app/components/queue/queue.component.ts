import { StatusService } from './../../services/status.service';
import { SessionService } from 'src/app/services/session.service';
import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/services/queue.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  queue : any = [];
  availableStatuses: any = [];
  isModalOpen = false;
  selectedOrder: any;

  constructor(
    private service: QueueService,
    private session: SessionService,
    public loginService : LoginService,
    public statusService: StatusService
  ) { }

  ngOnInit(): void {
    const id = this.session.getUserLogged().id
    this.getAll(id);

    this.statusService.getAll().subscribe(
      (res) => {
        this.availableStatuses = res.map(
          (status: any) => {return status.description}
        )
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getAll(idClient: number){
    this.service.listAll(idClient).subscribe(
      (res) => {
        this.queue = res
      },
      (err) => console.log(err)
    )
  }

  openModal(order: any) {
    this.selectedOrder = { ...order };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedOrder = null;
  }

  confirmStatusChange() {
    const id = this.session.getUserLogged().id
    this.service.updateStatus(this.selectedOrder).subscribe(
      (res)=> {
        if(res){
          alert("status alterado com sucesso")
          this.closeModal()
          this.getAll(id)
        }
      },
      (error)=>{
        console.log(error)
      });
  }

}
