import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ambiente } from 'src/app/shared/models/ambiente.model';
import { AmbienteService } from '../../services/ambiente.service';

@Component({
  selector: 'mv-ambiente-create-container',
  templateUrl: './ambiente-create-container.component.html',
  styleUrls: ['./ambiente-create-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AmbienteCreateContainerComponent implements OnInit {

  constructor(private ambienteService: AmbienteService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(ambiente: Ambiente): void {
    this.ambienteService.save(ambiente);
  }

  onCancel(): void {
    this.router.navigate(['/ambientes']);
  }

}
