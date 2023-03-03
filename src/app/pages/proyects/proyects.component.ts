import { Component, OnInit } from '@angular/core';
import { ProyectService } from 'src/app/services/proyect.service';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ProyectsInfoComponent } from 'src/app/modals/proyects-info/proyects-info.component';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {

  modalRef: MdbModalRef<ProyectsInfoComponent> | null = null;

  imgDefensaFauna:string="https://firebasestorage.googleapis.com/v0/b/a-vuelo-de-pajaro.appspot.com/o/proyectos%2Fdefensa_fauna.jpeg?alt=media&token=e4ce8e74-40e7-46e8-8e3d-ced16d4df65f";
  imgSesiones:string="https://firebasestorage.googleapis.com/v0/b/a-vuelo-de-pajaro.appspot.com/o/proyectos%2Fsesiones.jpeg?alt=media&token=7b3e7727-2227-4255-8893-aea76f30770b";

  proyectos:any;

  constructor(private proyectServices:ProyectService, private modalService: MdbModalService) { }

  ngOnInit(): void {
    this.getProyects();
  }

  getProyects(){
    this.proyectServices.getProyectos().then(resp=>{
      this.proyectos = resp;
    });
  }

  openModal(data:any) {
    this.modalRef = this.modalService.open(ProyectsInfoComponent, {
      data: {
        title: data.name,
        desc: data.desc,
        imgs: data.imgAsoci
      },
    });
  }

}
