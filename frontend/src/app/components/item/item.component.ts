import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  pedidoForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
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
    console.log(formData)
    // const headers = new HttpHeaders({
    //   'enctype': 'multipart/form-data' // Defina o cabeçalho 'enctype' como 'multipart/form-data'
    // });

    // this.http.post('http://localhost:8080/api/item', formData, { headers }).subscribe(
    //   (response) => {
    //     console.log('Pedido criado:', response);
    //     this.pedidoForm.reset();
    //   },
    //   (error) => {
    //     console.error('Erro ao criar pedido:', error);
    //   }
    // );
  }
}
