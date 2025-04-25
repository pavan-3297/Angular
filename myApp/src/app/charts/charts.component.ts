import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-charts',
  template: `
    <div>
      <h2>Charts</h2>
      <!-- Bar Chart Example -->
      <div style="display: block;">
        <canvas baseChart
                [data]="barChartData"
                [options]="barChartOptions"
                [plugins]="barChartPlugins"
                [legend]="barChartLegend"
                [chartType]="barChartType">
        </canvas>
      </div>
    </div>
  `,
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {
  // Bar Chart Data and Options
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartType: ChartConfiguration['type'] = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Sales Data',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        borderWidth: 1
      }
    ]
  };
}
