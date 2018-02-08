import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../devices.service';
import { SensorService } from '../sensor.service';


@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {

  @Input() device: any;

  color = 'accent';
  checked = false;
  disabled = false;


  constructor(private deviceService: DevicesService) { }

  ngOnInit() {
  }

  onActuatorEvent(key: any, value: string) {
    // this.checked = value === 1 ? false : true;
    // console.log(`onActuatorEvent - ${value} checked: ${this.checked} key: ${key}`);

    // this.deviceService.updateDevice(this.device.$key, { 'properties': { 'time': Date(), 'state': value } });
    this.deviceService.updateDevice(key, { 'time': Date(), 'level': value});
  }

  isState() {

  }

}
