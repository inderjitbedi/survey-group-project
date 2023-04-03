import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component'; 
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent extends BasePageComponent implements OnInit{
  constructor(route:ActivatedRoute) {
    super(route);
  }
  override ngOnInit():void{
  }
}
