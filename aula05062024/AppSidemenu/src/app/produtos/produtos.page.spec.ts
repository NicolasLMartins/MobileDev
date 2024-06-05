import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ProdutosPage } from './produtos.page';

describe('ProdutosPage', () => {
  let component: ProdutosPage;
  let fixture: ComponentFixture<ProdutosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutosPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();
    
    fixture = TestBed.createComponent(ProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
