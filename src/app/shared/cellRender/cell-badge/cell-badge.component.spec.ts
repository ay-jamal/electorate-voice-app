import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellBadgeComponent } from './cell-badge.component';

describe('CellBadgeComponent', () => {
  let component: CellBadgeComponent;
  let fixture: ComponentFixture<CellBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CellBadgeComponent]
    });
    fixture = TestBed.createComponent(CellBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
