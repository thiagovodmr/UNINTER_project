import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = [
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de queijo",
      price: 10,
    },
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de frango",
      price: 10,
    },
     {
      img: "assets/pastel-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/coxinha-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/coxinha-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de queijo",
      price: 10,
    },
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de frango",
      price: 10,
    },
     {
      img: "assets/pastel-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/pastel-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/coxinha-example.jpg",
      description: "pastel de carne",
      price: 10,
    },
    {
      img: "assets/coxinha-example.jpg",
      description: "pastel de carne",
      price: 10,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
