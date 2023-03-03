import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { BucketService } from 'src/app/services/bucket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentRoute: string;
  public titlePage:any;
  public imageData:any;

  constructor(private router: Router, private services:BucketService) {
    this.currentRoute = "/home";
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
            console.log(this.currentRoute);
        }
    });
  }

  menuHandler: boolean = true;
  mdOptions: boolean = true;
  search: boolean = true;
  menuHandlerBtn() {
      this.menuHandler = !this.menuHandler;
  }
  mdOptionsToggle() {
      this.mdOptions = !this.mdOptions;
  }
  searchToggle() {
      this.search = !this.search;
  }

  ngOnInit(): void {

    let bucket="sliderPrincipal"
    this.services.imagenes(bucket).then(resp=>{
      this.imageData = resp;
    })
  }

  contact(){
    location.href = "#irMedio";
  }

}
