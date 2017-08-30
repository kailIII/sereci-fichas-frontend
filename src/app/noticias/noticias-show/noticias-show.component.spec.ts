import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasShowComponent } from './noticias-show.component';

describe('NoticiasShowComponent', () => {
  let component: NoticiasShowComponent;
  let fixture: ComponentFixture<NoticiasShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
