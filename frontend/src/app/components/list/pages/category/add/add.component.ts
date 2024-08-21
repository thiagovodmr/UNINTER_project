import { CategoryService } from './../../../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  categoriaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CategoryService
  ) {
    this.categoriaForm = this.fb.group({
      description: ['', Validators.required],
    });
   }

  ngOnInit(): void {}

  createCategory() {
    if (this.categoriaForm.invalid) {
      alert("formulário inválido");
      return;
    }

    const values = this.categoriaForm.value;

    this.service.create(values.description).subscribe(
      (response) => {
        alert("categoria criada com sucesso")
        this.router.navigate(['/list/add'])
        this.categoriaForm.reset();
      },
      (error) => {
        alert("Não foi possível cadastrar categoria")
        console.error('Erro ao criar pedido:', error);
      }
    );
  }

}
