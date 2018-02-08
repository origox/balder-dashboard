import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AuthService } from './core/auth.service';

// My Components
import { HeaderNavComponent } from './ui/header-nav/header-nav.component';
import { FooterNavComponent } from './ui/footer-nav/footer-nav.component';
import { UserLoginComponent } from './user-login/user-login.component';

// Devices
import { DevicesService } from './devices/devices.service';
import { SensorService } from './devices/sensor.service';
import { DeviceListComponent } from './devices/device-list/device-list.component';
import { DeviceDetailComponent } from './devices/device-detail/device-detail.component';
import { StatisticsComponent } from './statistics/statistics.component';

// Graphs
import { ChartsModule } from 'ng2-charts';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterNavComponent,
    UserLoginComponent,
    DeviceDetailComponent,
    DeviceListComponent,
    StatisticsComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [AuthService, DevicesService, SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
