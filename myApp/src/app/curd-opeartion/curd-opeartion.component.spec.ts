import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdOpeartionComponent } from './curd-opeartion.component';

describe('CurdOpeartionComponent', () => {
  let component: CurdOpeartionComponent;
  let fixture: ComponentFixture<CurdOpeartionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurdOpeartionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdOpeartionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
