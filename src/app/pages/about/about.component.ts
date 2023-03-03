import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { BucketService } from '../../services/bucket.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  team:any;
  teamDesc:any;
  vision:any;
  mision:any;

  imgAbout: string = "https://firebasestorage.googleapis.com/v0/b/a-vuelo-de-pajaro.appspot.com/o/sliderPrincipal%2FIMG-20221021-WA0009.jpg?alt=media&token=24945553-bf01-4a8a-b5c6-402a38c73f63";
  imgAboutVision: string = "https://firebasestorage.googleapis.com/v0/b/a-vuelo-de-pajaro.appspot.com/o/Img%2FIMG_20201024_103019_1.jpg?alt=media&token=c907c9ed-305b-479f-92c1-fa6ad6d210d8";
  imgAboutMision: string = "https://firebasestorage.googleapis.com/v0/b/a-vuelo-de-pajaro.appspot.com/o/Img%2FIMG_20201025_084154_2.jpg?alt=media&token=74c3c270-6926-4ad7-af72-9d0d62f29803";

  constructor(private services:AboutService) { }

  ngOnInit(): void {
    this.getTeam();
    this.getTeamDesc();
    this.getVisionAndMision();
  }

  getTeam(){
    this.services.getTeam().then(data=>{
      this.team = data;
    })
  }

  getTeamDesc(){
    this.services.getTeamDesc().then(data=>{
      this.teamDesc = data;
    })
  }

  getVisionAndMision(){
    this.services.getVisionMision().then(data=>{
      this.vision = data[1];
      this.mision = data[0];
    })
  }

}
