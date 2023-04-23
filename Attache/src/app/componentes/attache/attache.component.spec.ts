import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacheComponent } from './attache.component';

describe('AttacheComponent', () => {
  let component: AttacheComponent;
  let fixture: ComponentFixture<AttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
