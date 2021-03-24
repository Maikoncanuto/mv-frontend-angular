import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ambiente } from 'src/app/shared/models/ambiente.model';

@Component({
  selector: 'mv-ambiente-create',
  templateUrl: './ambiente-create.component.html',
  styleUrls: ['./ambiente-create.component.scss']
})
export class AmbienteCreateComponent implements OnInit {

  @Output() onCreate: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }


  create(ambiente: Ambiente): void {
    //envia para o container o objeto que foi preenchido no componente create
    this.onCreate.emit(ambiente);
  }

  cancel(): void {
    this.onCancel.emit();
  }

}
