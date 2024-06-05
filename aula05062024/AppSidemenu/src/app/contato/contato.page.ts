import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {
  // public contato!: string;
  // private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    // this.contato = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
