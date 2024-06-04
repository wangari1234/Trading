import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockGraphsComponent } from './stock-graphs.component';

describe('StockGraphsComponent', () => {
  let component: StockGraphsComponent;
  let fixture: ComponentFixture<StockGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockGraphsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
