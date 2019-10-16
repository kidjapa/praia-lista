import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompraComponent } from './add-compra.component';

describe('AddCompraComponent', () => {
  let component: AddCompraComponent;
  let fixture: ComponentFixture<AddCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
