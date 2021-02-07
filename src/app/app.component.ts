import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService, private titleService: Title) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    this.translate.get('APPLICATION.TITLE').subscribe((res: string) => {
      this.titleService.setTitle(res + ' - Onizweb');
    });

  }
}
