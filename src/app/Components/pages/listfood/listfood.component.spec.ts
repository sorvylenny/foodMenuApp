import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfoodComponent } from './listfood.component';

describe('ListfoodComponent', () => {
  let component: ListfoodComponent;
  let fixture: ComponentFixture<ListfoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListfoodComponent]
    });
    fixture = TestBed.createComponent(ListfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
