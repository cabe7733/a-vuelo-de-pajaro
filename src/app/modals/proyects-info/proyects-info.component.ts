import { Component, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-proyects-info',
  templateUrl: './proyects-info.component.html',
  styleUrls: ['./proyects-info.component.scss']
})
export class ProyectsInfoComponent implements OnInit {

  title: string | null = null;
  desc: string | null = null;
  imgs: Array<any> | null = null;

  constructor(public modalRef: MdbModalRef<ProyectsInfoComponent>) { }

  ngOnInit(): void {
    console.log('descriptio',this.desc);
    console.log('images',this.imgs);
  }

}
