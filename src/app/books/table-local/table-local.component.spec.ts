import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLocalComponent } from './table-local.component';

describe('TableLocalComponent', () => {
  let component: TableLocalComponent;
  let fixture: ComponentFixture<TableLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
