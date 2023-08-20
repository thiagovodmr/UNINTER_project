import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {
  lineChartData : any = []
  lineChartOptions : any = {
    responsive: true
  };
  lineChartLabels :any = [];

  lineChartLegend = true;




  constructor() {

    this.lineChartData = [
      {
        label: 'Entregas no Mês Atual',
        data: [50, 42, 40, 51, 36, 45, 40],
      },
    ];

    const numberOfDaysInMonth = 31;
    const daysArray = Array.from({ length: numberOfDaysInMonth }, (_, index) => `dia ${index + 1}`);
    this.lineChartLabels = daysArray
  }

  ngOnInit(): void {
  }



}
