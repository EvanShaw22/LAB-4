import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcomponetComponent } from './listcomponet.component';

describe('ListcomponetComponent', () => {
  let component: ListcomponetComponent;
  let fixture: ComponentFixture<ListcomponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcomponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
