import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  documentos:any;
  documentosRe:any;

  constructor(private services:ProyectService) { }

  ngOnInit(): void {
    this.getDosc();
    this.getDoscRe();
  }

  getDosc(){
    this.services.getDocs().then(resp=>{
      this.documentos = resp;
    });
  }

  getDoscRe(){
    this.services.getDocsRe().then(resp=>{
      this.documentosRe = resp;
    });
  }

  openDoc(url:any){
    window.open(url,'_blank')
  }

}
