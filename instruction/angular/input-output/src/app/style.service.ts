import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class StyleService {
  styles: object = {
    container_style: {
      'background': '#96B5D9',
      'border': '2px solid black',
      'padding': '5px',
      'margin': '25px',
      'vertical-align': 'top'
    },
    main_component: { 
      'width': '64%',
      'display': 'inline-block'
    },
    component_title: {
      'margin': '0'
    }
  }

  constructor() { }

  getStyles() {
    return this.styles;
  }

}
