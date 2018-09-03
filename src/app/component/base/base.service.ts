import { Component, OnInit, Injectable } from '@angular/core';
import {
	HttpClient,
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpParams,
	HttpHeaders,
	HttpResponse
} from '@angular/common/http';


import { Logger } from '../../helper/logger';
import { environment } from '../../../environments/environment';
import { MsalService } from '../../helper/msal/msal.service';

@Injectable()
export class BaseService implements OnInit {
	serverUrl: string = environment.serverBaseUrl;
    msGraphUrl = environment.msGraphBaseUrl;

    constructor(public logger: Logger, 
        public httpClient: HttpClient,
        private msalService: MsalService
    ) {
	}

	ngOnInit() { }

	testGraphApi() {
        this.msalService.getUser().then((user: any) => {
            console.log("uesr", user);
        });
        
        const headers = new HttpHeaders({ });
        this.httpClient.get(`${this.msGraphUrl}/me`, { headers: headers }).subscribe((userInfo: any) => {
            console.log("userinfo", userInfo);
        });

        this.httpClient.get(`${this.msGraphUrl}/me/photo/$value`, { headers: headers }).subscribe((photo: any) => {
            console.log("userinfo", photo);
        });

        this.httpClient.get(`${this.msGraphUrl}/users/danipi@M365x342201.onmicrosoft.com`, { headers: headers }).subscribe((photo: any) => {
            console.log("userinfo", photo);
        });
    }
}