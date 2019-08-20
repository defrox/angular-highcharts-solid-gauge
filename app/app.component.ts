import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  gauge: Chart;
  gaugeNoFormat: Chart;
  gaugeInline: Chart;

  ngOnInit() {
        this.gaugeNoFormat = new Chart({
        chart: {
            type: 'solidgauge',
            height: '100%',
            width: 350,
            backgroundColor: 'transparent'
        },
        credits: {enabled: false},
        title: {
            text: 'No format',
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
                borderColor: 'transparent',
            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            stops: [
                [0, '#b0bec5'],
                [0.5, '#b0bec5'],
                [0.5, '#546e7a'],
                [1, '#546e7a'],
            ],
            length: 5,
            lineWidth: 0,
            minorTicks: false,
            tickAmount: 0,
            tickColor: 'transparent',
            labels: {
                enabled: false,
            },
            min: -100,
            max: 100,
            plotBands: [
                { from: -100, to: 0, color: '#b0bec5', outerRadius: '132'},
                { from: 0, to: 100, color: '#546e7a', outerRadius: '132'},
            ]
        },
        plotOptions: {
            solidgauge: {
                threshold: 0,
                dataLabels: {
                    style: {'fontSize': '36px', 'font-family': 'Muli, Helvetica Neue, Arial, sans-serif', 'fontWeight': 'light'},
                    y: -50,
                    borderWidth: 0,
                }
            }
        },
        series: [
            {
                data: [-100]
            }
        ]
    });

    this.gauge = new Chart({
        chart: {
            type: 'solidgauge',
            height: '100%',
            width: 350,
            backgroundColor: 'transparent'
        },
        credits: {enabled: false},
        title: {
            text: 'With format',
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
                borderColor: 'transparent',
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
                    borderWidth: 0,
                    formatter: centeredGaugeFormatter,
                }
            }
        },
        series: [
            {
                data: [10]
            }
        ]
    });

    this.gaugeInline = new Chart({
        chart: {
            type: 'solidgauge',
            height: '100%',
            width: 350,
            backgroundColor: 'transparent'
        },
        credits: {enabled: false},
        title: {
            text: 'Inline',
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
                borderColor: 'transparent',
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
                    borderWidth: 0,
                    formatter: function () { return Math.abs(this.y - 50) * 2 },
                }
            }
        },
        series: [
            {
                data: [10]
            }
        ]
    });
  }
}

export function centeredGaugeFormatter(): number | string {
    return Math.abs((this.y - 50) * 2);
}

export function centeredGaugeNoFormatter(): number | string {
    return Math.abs(this.y);
}