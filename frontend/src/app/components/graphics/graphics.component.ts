import { GraphicService } from './../../services/graphic.service';
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

  constructor(private service: GraphicService) {
  }

  ngOnInit(): void {
    this.service.getSalesCurrentMonth().subscribe(
      (data: any[]) => {
        const daysArray = Array.from({ length: 31 }, (_, index) => `Dia ${index + 1}`);
        const salesDataArray = new Array(31).fill(0);

        data.forEach(item => {
          if (item.day >= 1 && item.day <= 31) {
            salesDataArray[item.day - 1] = item.totalQtd;
          }
        });

        this.lineChartLabels = daysArray;
        this.lineChartData = [
          {
            label: 'Entregas no Mês Atual',
            data: salesDataArray,
          },
        ];
      },
      error => {
        console.error('Erro ao carregar dados de vendas:', error);
      }
    );
  }



}
