import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import {SVG_ICONS} from '../constants'

const links = [
  {path: '/', title: 'Home'},
  {path: 'repos', title: 'Repositories'},
  {path: 'catalog', title: 'Catalog'}
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public links = links;

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
