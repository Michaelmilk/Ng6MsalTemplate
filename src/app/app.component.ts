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
    timeInterval: any;
    previous: AuthUser;

    constructor(
        protected logger: Logger,
        private msalService: MsalService,
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
        this.user = new AuthUser();

        this.timeInterval = setInterval(() => {
            if (!this.user.email) {
                this.msalService.getUser().then((user: any) => {
                    this.logger.info("user", user);
                    if (user.displayableId) {
                        this.user = new AuthUser(user.name, user.displayableId);
                        this.msGraphService.getPhotoByUpn(this.user.email).subscribe((photoBlob) => {
                            this.createImageFromBlob(photoBlob, this.user);
                        })
                        this.logger.info("clear time interval", this.user.email);
                        clearInterval(this.timeInterval);
                    }
                    this.previous = this.user;
                });
            } 
        }, 1000);
    }

    logout() {
        this.msalService.logout();
    }

    testGraphApi() {
        this.msalService.authenticated.then((isAuthenticated: boolean) => {
            this.logger.info("isauth", isAuthenticated);
        })

        if (this.user.email) {
            this.user = new AuthUser(this.user.name, this.user.email);
            this.msGraphService.getPhotoByUpn(this.user.email).subscribe((photoBlob) => {
                this.createImageFromBlob(photoBlob, this.user);
            })

            this.msGraphService.getUserProfile("danipi@M365x342201.onmicrosoft.com").subscribe((userProfile) => {
                this.logger.info("profile", userProfile);
            })
        }
    }
}
