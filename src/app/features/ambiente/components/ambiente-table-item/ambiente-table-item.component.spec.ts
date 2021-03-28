import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbienteTableItemComponent } from './ambiente-table-item.component';

describe('AmbienteTableItemComponent', () => {
  let component: AmbienteTableItemComponent;
  let fixture: ComponentFixture<AmbienteTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbienteTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbienteTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
