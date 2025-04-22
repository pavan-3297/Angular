import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOPerationsComponent } from './crud-operations.component';

describe('CrudOPerationsComponent', () => {
  let component: CrudOPerationsComponent;
  let fixture: ComponentFixture<CrudOPerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOPerationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudOPerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
