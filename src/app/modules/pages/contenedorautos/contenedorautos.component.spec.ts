import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorautosComponent } from './contenedorautos.component';

describe('ContenedorautosComponent', () => {
  let component: ContenedorautosComponent;
  let fixture: ComponentFixture<ContenedorautosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorautosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorautosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
