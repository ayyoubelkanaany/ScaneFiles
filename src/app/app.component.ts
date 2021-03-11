import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  files: Array<File> = new Array<File>();
  filesRef: Array<File> = new Array<File>();
  title = 'ScanFiles';
  good = false;
  analyse = false;
  handleFileInput(files: FileList){
    this.files.push(files.item(0));
    this.filesRef = this.files;
    console.log( files.item(0).size);
  }
  analyser(file){
    ///traitemen d'analyse puis le resultat
    this.analyse = true;
  }
  filter(nom: string){
  this.files = this.filesRef;
  if(nom !== ''){
    this.files = this.filesRef.filter(value => value.name.startsWith(nom));
  }
  else{
    this.files = this.filesRef;
    }
  }

}
