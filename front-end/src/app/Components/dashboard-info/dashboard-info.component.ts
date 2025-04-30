import { AfterViewInit, Component, ElementRef, NgIterable, OnInit, QueryList, ViewChildren } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Chart, ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { DashboardService } from '../../Services/dashboard.service';

interface ExamLevel {
  group: string;
  returnedPercentage: number;
  verifiedPercentage: number;
}

@Component({
  selector: 'app-dashboard-info',
  standalone: false,
  templateUrl: './dashboard-info.component.html',
  styleUrl: './dashboard-info.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class DashboardInfoComponent implements OnInit, AfterViewInit {
  @ViewChildren('chartCanvas') chartCanvases!: QueryList<ElementRef<HTMLCanvasElement>>;

  levelsData: ExamLevel[] = [];
  pendingProfessors = 0;
  private chartInstances: Chart[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getPendingProfessors()
      .subscribe(count => this.pendingProfessors = count);

    this.dashboardService.getExamData()
      .subscribe((data: any[]) => {
        // Transform your raw data into ExamLevel[]
        this.levelsData = data.map(item => ({
          group: item.group,
          returnedPercentage: item.returnedPercentage,
          verifiedPercentage: item.verifiedPercentage
        }));
        // Wait for the view to render all canvases, then draw charts
        // Using setTimeout 0ms is a simple hack to run after ngAfterViewInit
        setTimeout(() => this.renderCharts(), 0);
      });
  }

  ngAfterViewInit(): void {
    // If levelsData arrives after view init, charts will be rendered via renderCharts()
  }

  private renderCharts(): void {
    // Clean up old charts if any
    this.chartInstances.forEach(c => c.destroy());
    this.chartInstances = [];

    this.chartCanvases.forEach((canvasRef, idx) => {
      const ctx = canvasRef.nativeElement.getContext('2d')!;
      const lvl = this.levelsData[idx];

      const config: ChartConfiguration<'pie'> = {
        type: 'pie',
        data: {
          labels: ['Retourné', 'Vérifié'],
          datasets: [{
            data: [lvl.returnedPercentage, lvl.verifiedPercentage],
            backgroundColor: [
              'rgba(75, 192, 192, 0.7)',
              'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            tooltip: {
              callbacks: {
                label: ctx => `${ctx.label}: ${ctx.raw}%`
              }
            }
          }
        }
      };

      this.chartInstances.push(new Chart(ctx, config));
    });
  }
}
