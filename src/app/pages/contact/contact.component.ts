import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isList = false;
  imgContact: string = "https://firebasestorage.googleapis.com/v0/b/a-vuelo-de-pajaro.appspot.com/o/Img%2FIMG_20201024_095255_2.jpg?alt=media&token=d66ca9b9-43ea-40ae-8364-26f1a15bd836";
  constructor() { }

  ngOnInit(): void {
  }

}
