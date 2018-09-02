import { Component } from '@angular/core';
import { BaseComponent } from './component/base/base.component';
import { Logger } from './helper/logger';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
    title = 'Ng6Template';

    constructor(
        protected logger: Logger
    ){
        super(logger);
        this.logger.info("app component start");
    }
}
