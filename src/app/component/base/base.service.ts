import { Component, OnInit } from '@angular/core';
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

export class BaseService implements OnInit {
	serverUrl: string = environment.serverBaseUrl;


	constructor(public logger: Logger, public httpClient: HttpClient) {
	}

	ngOnInit() { }

	
}