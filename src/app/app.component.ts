import { Component, OnInit } from '@angular/core';

import { BaseComponent } from './component/base/base.component';
import { Logger } from './helper/logger';
import { BaseService } from './component/base/base.service';
import { MsalService } from './helper/msal/msal.service';
import { MsGraphService } from './component/base/msGraphService';
import { AuthUser } from './core/authUser';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit {
    title = 'Ng6Template';
    user: AuthUser;

    constructor(
        protected logger: Logger,
        private msalService: MsalService,
        private baseService: BaseService,
        private msGraphService: MsGraphService
    ) {
        super(logger);

        this.msalService.authenticated.then((isAuthenticated: boolean) => {
            this.logger.info("isauth", isAuthenticated);
            if (!isAuthenticated) {
                this.msalService.login();
            }
        })
    }

    ngOnInit() {
        console.log("init");
        this.user = new AuthUser();
        this.msalService.getUser().then((user: any) => {
            this.logger.info("user", user);
            if (user.displayableId) {
                this.user = new AuthUser(user.name, user.displayableId);
                this.msGraphService.getPhotoByUpn(this.user.email).subscribe((photoBlob) => {
                    this.createImageFromBlob(photoBlob, this.user);
                })
            }

        });
    }

    logout() {
        this.msalService.logout();
    }

    testGraphApi() {
        this.baseService.testGraphApi();
    }
}
