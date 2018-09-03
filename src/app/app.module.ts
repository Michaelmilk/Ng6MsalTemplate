import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { Logger } from './helper/logger';
import { Constants } from './core/constants';
import { MsalModule } from './helper/msal/msal.module';
import { BaseService } from './component/base/base.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MsalModule.forRoot(environment.msalConfig)
    ],
    providers: [
        Logger,
        { provide: 'loggerName', useValue: Constants.loggerName },
        { provide: 'loggerLevel', useValue: environment.logLevel },
        BaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
