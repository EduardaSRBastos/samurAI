import { Component, AfterViewInit, ElementRef, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Chart, ChartData, ChartOptions, TooltipItem } from 'chart.js';
import 'chartjs-plugin-datalabels';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-accuracy',
  templateUrl: './accuracy.component.html',
  styleUrls: ['./accuracy.component.css']
})
export class AccuracyComponent implements AfterViewInit {
  @Input() text: string | null = null;
  @Input() resultLabel: string | null = null;
  @Input() activeTab: string = '';
  @Output() close = new EventEmitter<void>();
  
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  isLoading: boolean = false;

  chartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#00D32A', '#CED400', '#D06700', '#CF0000', '#D100CB', '#5700D3'],
        hoverBackgroundColor: ['#1AF049', '#ECF01A', '#F0811A', '#F01A1A', '#F01AE8', '#781AF0']
      }
    ]
  };

  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    layout: {
      padding: 110
    },
    plugins: {
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 16,
          },
          generateLabels: (chart: any) => {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              const dataset = data.datasets[0];
              const labels = data.labels;
              const total = dataset.data.reduce((sum: number, value: number) => sum + value, 0);
          
              const legendItems = labels.map((label: string, index: number) => {
                const value = dataset.data[index];
                const percentage = ((value / total) * 100).toFixed(2) + '%';
                return {
                  text: `${label} - ${percentage}`,
                  fillStyle: dataset.backgroundColor[index],
                  hidden: false,
                  index: index,
                  datasetIndex: 0
                };
              });
          
              return legendItems;
            }
          
            return [];
          },
          usePointStyle: true,
        },
          title: {
            display: true,
            text: 'Click to remove/add',
            color: 'black',
            font: {
              size: 16,
              weight: 'bold'
            },
            padding: 10,
          }
        },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'doughnut'>) => {
            const value: any = context.raw || 0;
            const total = (context.chart?.data?.datasets?.[0].data as number[]).reduce((a, b) => a + b, 0);
            const percentage = total ? ((value / total) * 100).toFixed(2) + '%' : '';
            return percentage;
          }
        }
      },
      datalabels: {
        anchor: 'end',
        align: 'start',
        offset: -40,
        color: 'black',
        borderWidth: 2,
        borderRadius: 4,
        borderColor: 'black',
        backgroundColor: 'white',
        font: {
          size: 16,
          weight: 'bold'
        },
        formatter: (value: any, context: any) => {
          const total = (context.chart?.data?.datasets?.[0].data as number[]).reduce((a, b) => a + b, 0);
          const percentage = total ? ((value / total) * 100).toFixed(2) + '%' : '';
          const label = context.chart?.data?.labels[context.dataIndex];
          return `${label} - ${percentage}`;
        },
        labels: {
          title: {
            font: {
              weight: 'bold'
            }
          },
        },
        display: 'auto'
      }
    }
  };

  constructor(private apiService: ApiService) {}

  private updateChartData(data: any) {
    var labelsCyberbullying: any = [];
    var labelsReviews: any = [];
    var percentagesCyberbullying: any = [];
    var percentagesReviews: any = [];

    for (var i = 0; i < data.labels.length; i++) {
      if (!isNaN(parseFloat(data.labels[i].label))) {
        labelsReviews.push(data.labels[i].label);
        percentagesReviews.push(data.labels[i].percentage);
      } else {
        labelsCyberbullying.push(data.labels[i].label);
        percentagesCyberbullying.push(data.labels[i].percentage);
      }
    }

    if (this.activeTab === 'cyberbullying') {
      this.chartData.labels = labelsCyberbullying;
      this.chartData.datasets[0].data = percentagesCyberbullying;
    } else if (this.activeTab === 'restaurant-reviews') {
      this.chartData.labels = labelsReviews;
      this.chartData.datasets[0].data = percentagesReviews;
    }
  }

  private createChart() {

    const chartCanvas = this.chartCanvas.nativeElement as HTMLCanvasElement;
    const ctx = chartCanvas.getContext('2d') as CanvasRenderingContext2D;
    var modelName = "Random\nForest".replace(/ /g, '\n');

    this.apiService.getModelResultById(1).subscribe((data) => {
        modelName = data.modelName.replace(/ /g, '\n');
    });
  
    Chart.register({
      id: 'datalabels',
      beforeDraw: (chart: any) => {
        const chartArea = chart.chartArea;
        const centerX = (chartArea.left + chartArea.right) / 2;
        const centerY = (chartArea.top + chartArea.bottom) / 2;
        const radius = Math.min((chartArea.right - chartArea.left) / 2, (chartArea.bottom - chartArea.top) / 2);
      
        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.restore();
        
        const text = modelName;
        const lines = text.split('\n');
        const fontSize = 32;
        const lineHeight = 30;
  
        ctx.save();
        ctx.font = `bold ${fontSize}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#099517';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 4;
        
        if(lines.length > 1) {
          for (var i = 0; i<lines.length; i++) {
            ctx.fillText(lines[i], centerX, centerY + (i*lineHeight) - 15);
          }
        } else {
          ctx.fillText(lines[0], centerX, centerY);
        }
       
        ctx.restore();
      },
      afterDraw: ChartDataLabels.afterDraw,
      beforeDatasetsDraw: ChartDataLabels.beforeDatasetsDraw,
      afterDatasetsDraw: ChartDataLabels.afterDatasetsDraw,
      beforeDatasetDraw: ChartDataLabels.beforeDatasetDraw,
      afterDatasetDraw: ChartDataLabels.afterDatasetDraw,
    });

    const customTitlePlugin = {
      id: 'customTitle',
      beforeDraw: (chart: any) => {
        const ctx = chart.ctx;
        const legend = chart.legend;
    
        if (!legend) return;
    
        const title = 'Click to\nremove/add';
        const lines = title.split('\n');
        const fontSize = 16;
        const lineHeight = 20;
        const padding = 70;
    
        const startX = legend.left + (legend.width - 60);
        const startY = legend.top + padding - lines.length * lineHeight;
    
        ctx.save();
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.font = `bold ${fontSize}px Arial`;
    
        for (let i = 0; i < lines.length; i++) {
          const text = lines[i];
          const x = startX;
          const y = startY + i * lineHeight;
    
          ctx.fillText(text, x, y);
        }
    
        ctx.restore();
      }
    };
    
    if (this.activeTab === 'restaurant-reviews') {
      Chart.register(customTitlePlugin);
    }

    const chart = new Chart<'doughnut', number[], unknown>(ctx, {
      type: 'doughnut',
      data: this.chartData,
      options: this.chartOptions,
      plugins: [ChartDataLabels as any],
    });

    if (this.activeTab === 'restaurant-reviews') {
      chart.options.plugins!.legend!.title!.display = false;
    } else if (this.activeTab === 'cyberbullying') {
      chart.options.plugins!.legend!.title!.display = true;
      chart.options.plugins!.legend!.title!.text = 'Click to remove/add';
    }

    chart.update();
  }
  
  private loadDefaultData() {
    // Sample default data
    if (this.activeTab === 'restaurant-reviews') {
      this.chartData.labels = ['3', '4', '2', '5', '1'];
      this.chartData.datasets[0].data = [60.00, 30.00, 5.00, 3.00, 2.00];
    } else if (this.activeTab === 'cyberbullying') {
      this.chartData.labels = ['Ethnicity', 'Other Cyberbullying', 'Not Cyberbullying', 'Gender', 'Age', 'Religion'];
      this.chartData.datasets[0].data = [96.74, 1.90, 1.22, 0.09, 0.04, 0.01];
    }
  }

  loadDataFromApi(): void {
    this.isLoading = true;
    this.apiService.getModelResultById(1).subscribe(
      (data) => {
        this.updateChartData(data);
        this.createChart();
        this.isLoading = false; 
      },
      (error) => {
        console.error("API call failed, loading default data...");
        this.loadDefaultData();
        this.createChart();
        this.isLoading = false; 
      }
    );
  }
  
  ngAfterViewInit(): void {
    this.loadDataFromApi();
  }

  ngOnChanges() {
    this.loadDataFromApi();
  }
}
