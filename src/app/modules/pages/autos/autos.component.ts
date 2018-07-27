import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
@Input() AutosFiltrados:Array<object>;
  constructor() { }

  ngOnInit() {
  }

}
