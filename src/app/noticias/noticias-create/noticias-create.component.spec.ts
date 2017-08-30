import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasCreateComponent } from './noticias-create.component';

describe('NoticiasCreateComponent', () => {
  let component: NoticiasCreateComponent;
  let fixture: ComponentFixture<NoticiasCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
