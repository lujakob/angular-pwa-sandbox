import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import {SVG_ICONS} from '../constants'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  links = [{path: '/', title: 'Home'}, {path: 'repos', title: 'Repositories'}];

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.registerSvgIcons();
  }

  registerSvgIcons() {
    SVG_ICONS.map(item => this.iconRegistry.addSvgIcon(
      item.name,
      this.sanitizer.bypassSecurityTrustResourceUrl(item.path)
    ))
  }
}
