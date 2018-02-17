import {
  Component, OnInit, Input, OnChanges, AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { DevicesService } from '../devices/devices.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  logs: Observable<any[]>;
  private pirlogs: Observable<any[]>;
  public lineChartPirData: Array<any>;
  public lineChartPirLabels: Array<any>;
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any>;

  public lineChartOptions: any = {
    responsive: true,
    showLines: true
  };

  public lineChartLegend: Boolean = true;
  public lineChartType: string = 'line';


  //@Input() private data: Array<any>;



  constructor(private DevicesService: DevicesService) { };

  ngOnInit() {

    this.logs = this.DevicesService.getTempList(); //  db.list('devices/mydhtsensor1/logs');

    this.logs.subscribe(logs => {
      const len = logs.length;
      // items is an array
      let i = 0;
      let d = new Array(len);
      let l = new Array(len);
      logs.forEach(log => {
        // console.log('Item:', log.temp);
        if (i < len) {
          d[i] = log.level;
          l[i] = i;
        }
        i++;

      });

      this.lineChartLabels = l;
      this.lineChartData = [
        { data: d, label: 'TEMP' }
      ];

      console.log(this.lineChartData[0]);

      this.createPirGraph();
    });
  }

  private createPirGraph() {
    this.pirlogs = this.DevicesService.getPirList();

    this.pirlogs.subscribe(logs => {
      const len = 100; // logs.length;
      // items is an array
      let i = 0;
      let d = new Array(len);
      let l = new Array(len);
      logs.forEach(log => {
        // console.log('Item:', log.temp);
        if (i < 100) {
          d[i] = log.level === 'on' ? 1 : 0;
          l[i] = i;
        }
        i++;

      });

      this.lineChartPirLabels = l;
      this.lineChartPirData = [
        { data: d, label: 'ON/OFF' }
      ];

      console.log(this.lineChartPirData[0]);
    });
  }

  public chartClicked(e: any): void {
    console.log(e);


    /*  this.lineChartData = [
       { data: [65, 59, 80, 81, 56, 55, 40, 95], label: 'Series A2' },
       { data: [28, 48, 40, 19, 86, 27, 90, 96], label: 'Series B2' },
       { data: [28, 28, 20, 29, 26, 27, 20, 97], label: 'Series B4' }
     ];
     this.lineChartLabels.push('APA'); */

  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  private addData(chart: any, label: String, data: Number) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    chart.update();
  }

}
