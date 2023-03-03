import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

  instagram(){
    let url="https://www.instagram.com/avuelodepajaro2020/";
    window.open(url, "_blank");
  }

  facebook(){
    let url="https://m.facebook.com/profile.php?id=100067839520928&eav=AfaetS8wO67wP6RhPtED4-02JUzAYnVML6b8OxeRw3QjSrLeNem4f-T3W7qOHoulvag&paipv=0&_rdr";
    window.open(url, "_blank");
  }

  whatsapp(){
    let url="https://wa.link/yzw968";
    window.open(url, "_blank");
  }

}
