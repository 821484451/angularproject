import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent implements OnInit {
    carapi:string='http://localhost:88/carlist'
    constructor() { }

    ngOnInit() {
    }

}
