import { CategoryService } from './../../../../services/category.service';
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

  categories: any =  []
  pedidoForm: FormGroup;
  apiUrl : String = environment.API_URL;

  constructor(
    private fb: FormBuilder,
    private service: ListService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.pedidoForm = this.fb.group({
      image: [null, Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      status_id: [1, Validators.required]
    });
  }

  ngOnInit(): void {
    this.getCategorys()
  }

  registerCategory(){
    this.router.navigate(['/category/add'])
  }

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
    formData.append("category_id", values.status_id)

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

  getCategorys(){
    this.categoryService.listAll().subscribe(
      (response) => {
        this.categories = response
      },
      (error) => {
        console.error('Erro ao listar categorias:', error);
      }
    );
  }

}
