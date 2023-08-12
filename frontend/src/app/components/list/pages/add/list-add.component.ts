import { ListService } from './../../../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.scss']
})
export class ListAddComponent implements OnInit {

  pedidoForm: FormGroup;
  apiUrl : String = environment.API_URL;

  constructor(
    private fb: FormBuilder,
    private service: ListService,
    private router: Router
  ) {
    this.pedidoForm = this.fb.group({
      image: [null, Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.pedidoForm.patchValue({ image: file });
  }

  criarPedido() {
    if (this.pedidoForm.invalid) {
      return;
    }

    const values = this.pedidoForm.value;
    const formData = new FormData();
    formData.append('image', values.image); // Adicione a imagem diretamente ao FormData
    formData.append('description', values.description);
    formData.append('price', values.price.toString());

  this.service.create(formData).subscribe(
      (response) => {
        this.router.navigate(['/list'])
        this.pedidoForm.reset();
      },
      (error) => {
        alert("Não foi possível cadastrar produtos")
        console.error('Erro ao criar pedido:', error);
      }
    );
  }

}
