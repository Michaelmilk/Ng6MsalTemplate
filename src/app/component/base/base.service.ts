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

export class BaseService {
	serverUrl: string = environment.serverBaseUrl;
    msGraphUrl: string = environment.msGraphBaseUrl;

    constructor(
        public logger: Logger, 
        public httpClient: HttpClient,
        private msalService: MsalService
    ) {
	}
}