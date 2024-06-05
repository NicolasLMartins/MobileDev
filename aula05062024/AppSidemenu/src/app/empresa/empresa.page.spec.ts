import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { EmpresaPage } from './empresa.page';

describe('EmpresaPage', () => {
  let component: EmpresaPage;
  let fixture: ComponentFixture<EmpresaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpresaPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();
    
    fixture = TestBed.createComponent(EmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
