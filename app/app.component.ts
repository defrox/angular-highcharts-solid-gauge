import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  gauge: Chart;

  ngOnInit() {
    this.gauge = new Chart({
        chart: {
            type: 'solidgauge',
            height: '100%',
            width: 350,
            backgroundColor: 'transparent'
        },
        credits: {enabled: false},
        title: {
            text: 'Title',
            y: 250,
            style: {'font-family': 'Muli, Helvetica Neue, Arial, sans-serif', 'font-size': '36px'}
        },
        pane: {
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: 'white',
                innerRadius: '60%',
                outerRadius: '90%',
                shape: 'arc',
                borderWidth: 0,
            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            stops: [
                [0.5, 'red'],
                [1, 'green']
            ],
            length: 5,
            lineWidth: 0,
            minorTicks: false,
            tickAmount: 0,
            tickColor: 'transparent',
            labels: {
                enabled: false,
            },
            min: 0,
            max: 100,
            plotBands: [
                { from: 0, to: 50, color: 'red', outerRadius: '132'},
                { from: 50, to: 100, color: 'green', outerRadius: '132'},
            ]
        },
        plotOptions: {
            solidgauge: {
                threshold: 50,
                dataLabels: {
                    style: {'fontSize': '36px', 'font-family': 'Muli, Helvetica Neue, Arial, sans-serif', 'fontWeight': 'light'},
                    y: -50,
                    borderWidth: 0
                }
            }
        },
        series: [
            {
                data: [100]
            }
        ]
    });
  }
}
