import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { Logger } from './helper/logger';
import { Constants } from './core/constants';
import { MsalModule } from './helper/msal/msal.module';
import { BaseService } from './component/base/base.service';
import { MsalInterceptor } from './helper/msal/msal.interceptor';
import { MsGraphService } from './component/base/msGraphService';
import { PipeModule } from './pipe/pipe.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        MsalModule.forRoot(environment.msalConfig),
        PipeModule
    ],
    providers: [
        Logger,
        { provide: 'loggerName', useValue: Constants.loggerName },
        { provide: 'loggerLevel', useValue: environment.logLevel },
        BaseService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MsalInterceptor,
            multi: true
        },
        MsGraphService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
