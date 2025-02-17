import { Component } from '@angular/core';
import { debounceTime, Subscription } from 'rxjs';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-validation-stream-widget',
  template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">Grade Validation </div>
        <p-chart type="bar" [data]="chartData" [options]="chartOptions" class="h-80" />
    </div>`
})
export class ValidationStreamWidget {
  chartData: any;

  chartOptions: any;

  subscription!: Subscription;

  constructor(public layoutService: LayoutService) {
    this.subscription = this.layoutService.configUpdate$.pipe(debounceTime(25)).subscribe(() => {
      this.initChart();
    });
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    this.chartData = {
      labels: ['Computer science', 'Mecatronics', 'Infotronics', 'Gsil'],
      datasets: [
        {
          type: 'bar',
          label: '1st',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
          data: [20, 45, 55, 76],
          barThickness: 32
        },
        {
          type: 'bar',
          label: '2nd',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
          data: [35, 56, 67, 87],
          barThickness: 32
        },
        {
          type: 'bar',
          label: '3rd',
          backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
          data: [55, 65, 34, 87],
          borderRadius: {
            topLeft: 8,
            topRight: 8,
            bottomLeft: 0,
            bottomRight: 0
          },
          borderSkipped: false,
          barThickness: 32
        }
      ]
    };

    this.chartOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: 'transparent',
            borderColor: 'transparent'
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textMutedColor
          },
          grid: {
            color: borderColor,
            borderColor: 'transparent',
            drawTicks: false
          }
        }
      }
    };
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
