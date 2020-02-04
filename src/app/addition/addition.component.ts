import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  nombre_1: number = 0;
  nombre_2: number = 0;
  somme:number = this.nombre_1 + this.nombre_2;



  constructor() { }

  ngOnInit() {
  }

}
