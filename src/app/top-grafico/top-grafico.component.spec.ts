import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGraficoComponent } from './top-grafico.component';

describe('TopGraficoComponent', () => {
  let component: TopGraficoComponent;
  let fixture: ComponentFixture<TopGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
