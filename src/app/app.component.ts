import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  files: Array<File> = new Array<File>();
  title = 'ScanFiles';
  good = false;
  analyse = false;
  handleFileInput(files: FileList){
    this.files.push(files.item(0));
    console.log( files.item(0).size);
  }
  analyser(file){
    ///traitemen d'analyse puis le resultat
    this.analyse = true;
  }
  filter(){

  }
}
