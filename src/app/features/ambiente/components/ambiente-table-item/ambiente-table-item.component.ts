import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mv-ambiente-table-item',
  templateUrl: './ambiente-table-item.component.html',
  styleUrls: ['./ambiente-table-item.component.scss']
})
export class AmbienteTableItemComponent implements OnInit {

  @Input()
  nome: string | undefined;

  @Input()
  status: string | undefined;

  @Input()
  nomeBotao: string | undefined = 'Atualizar';

  @Output()
  onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  click(): void {
    this.onClick.emit();
  }

}
