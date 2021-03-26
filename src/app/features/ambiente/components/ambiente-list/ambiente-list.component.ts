import {Component, OnInit} from '@angular/core';
import { MvAmbienteCardComponent } from '../mv-ambiente-card/mv-ambiente-card.component';



@Component({
  selector: 'mv-ambiente-list',
  templateUrl: './ambiente-list.component.html',
  styleUrls: ['./ambiente-list.component.scss']
})
export class AmbienteListComponent implements OnInit {

  constructor(public mvcard: MvAmbienteCardComponent) {
    
  }

  ngOnInit(): void {
  }

}
