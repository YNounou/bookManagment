import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMenuHidden?: boolean = true;

  handleIsMenuHidden(isHidden?: boolean) {
    if (isHidden == null || isHidden == undefined){
      this.isMenuHidden = this.isMenuHidden;      
      console.log(this.isMenuHidden, isHidden)
    } else {
      this.isMenuHidden = isHidden;
      console.log(this.isMenuHidden, isHidden)
    }
  }
}
