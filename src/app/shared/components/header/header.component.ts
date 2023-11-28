import { Component, Input, OnInit } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input() title: string;
  @Input() backButton: string;
  @Input() color: string;
  @Input() centerTitle: boolean;
  @Input() isModal: boolean;

  darkMode: BehaviorSubject<boolean>;
  constructor(
    private themeSvc: ThemeService
  ) {}
  
  ngOnInit() {
    this.darkMode = this.themeSvc.darkMode
  }


  setTheme(darkMode: boolean){
    this.themeSvc.setTheme(darkMode);
  }

}
