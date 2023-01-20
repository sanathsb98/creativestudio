import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  on_color_change = true;

  constructor() { }

  ngOnInit(): void { }

  @HostListener("document:scroll")
  scrollfunction() {
    if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
      this.on_color_change = true;
    }
    else {
      this.on_color_change = false;
    }
  }


}
