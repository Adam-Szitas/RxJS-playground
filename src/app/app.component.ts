import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RxJS-playground';

  constructor(private translateService: TranslateService){}

  ngOnInit(): void{
    this.initLanguage()
  }

  private initLanguage(){
    const languages = ['en', 'sk'];
    this.translateService.addLangs(languages);
    for(const lang of languages){
      this.translateService.setTranslation(lang, require('./translations/' + lang + '.json'));
    }
    this.translateService.setDefaultLang('en');
  }
}
