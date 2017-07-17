import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';

  generate = function (){
    var colorCodeList : string[] = [];
    
    var Hex: any[] = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    
    var colorCodeList: string[] = []
    for(let j=0; j<10; j++){
      
      var colorCode: string = '#'
      for(let i = 0; i< 6; i++){
        let index = Math.floor(Math.random()*16)
        colorCode = colorCode+Hex[index];
      }
    colorCodeList[j] = colorCode;
    }
    return colorCodeList;
  }
  colorCodeList = this.generate()

}
