/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JewelleryComponent } from './jewellery.component';

describe('JewelleryComponent', () => {
  let component: JewelleryComponent;
  let fixture: ComponentFixture<JewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
