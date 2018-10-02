import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardsComponent } from './product-cards.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ProductCardsComponent', () => {
  let component: ProductCardsComponent;
  let fixture: ComponentFixture<ProductCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardsComponent ],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
