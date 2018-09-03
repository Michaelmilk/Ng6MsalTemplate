import { Component, OnInit } from '@angular/core';

import { BaseComponent } from './component/base/base.component';
import { Logger } from './helper/logger';
import { BaseService } from './component/base/base.service';
import { MsalService } from './helper/msal/msal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit {
    title = 'Ng6Template';

    constructor(
        protected logger: Logger,
        private msalService: MsalService,
        private baseService: BaseService
    ) {
        super(logger);
        // this.logger.info("app component start");
        
        //this.msalService.login();

        this.msalService.getUser().then((user) => {
            this.logger.info("user", user);
        });
        
        this.msalService.authenticated.then((isAuthenticated: boolean) => {
            this.logger.info("isauth", isAuthenticated);
            if (!isAuthenticated) {
                this.msalService.login();
            }
        })
    }

    ngOnInit () {
        
    }

    login() {
        this.msalService.login();
    }

    logout() {
        this.msalService.logout();
    }

    testGraphApi() {
        this.baseService.testGraphApi();
    }
}
