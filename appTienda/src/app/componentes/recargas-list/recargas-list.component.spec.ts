import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargasListComponent } from './recargas-list.component';

describe('RecargasListComponent', () => {
  let component: RecargasListComponent;
  let fixture: ComponentFixture<RecargasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecargasListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecargasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
