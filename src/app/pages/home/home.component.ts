import { Component, OnInit } from '@angular/core';
import { BucketService } from 'src/app/services/bucket.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slider:any
  defaultTransform:any

  goNext() {
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7) this.defaultTransform = 0;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  goPrev() {

    if (Math.abs(this.defaultTransform) === 0) this.defaultTransform = 0;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = "translateX(" + this.defaultTransform + "px)";
  }

  load: boolean=false;

  preguntasFrecuentes:any;
  imgPreguntasFrecuentes: string = "https://firebasestorage.googleapis.com/v0/b/a-vuelo-de-pajaro.appspot.com/o/Img%2FIMG_20201024_090504_1.jpg?alt=media&token=989ddc4b-25c6-4bff-a293-4b1b9cb7af7e"

  isToggle= [false, false];
  public imgParners:any;
  imgSlider:any=[];

  constructor(private services:BucketService, private homeServices:HomeService) { }

  ngOnInit(): void {
    let url="logos";
    this.services.imagenes(url).then(resp=>{
      this.imgParners =resp;
    });

    let url2="Img";
    this.services.imagenes(url2).then(resp=>{
      this.imgSlider = resp;
      this.load = true;
    });

    this.slider = document.getElementById("slider");
    this.defaultTransform=0;

    this.getpreguntasFrecuentes();
  }

  collapse(id:number){
    this.isToggle[id] = !this.isToggle[id]
  }

  getpreguntasFrecuentes(){
    this.homeServices.getPreguntasFrecuentes().then(resp=>{
      this.preguntasFrecuentes = resp;
      console.log(this.preguntasFrecuentes);
    });
  }

}
