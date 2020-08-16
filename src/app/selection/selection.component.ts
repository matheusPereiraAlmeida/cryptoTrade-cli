import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  moedaDeOrigem = '';
  moedaDeDestino = '';
  quantidadeDaMoedaDeOrigem = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const MOEDA_DE_ORIGEM = this.activatedRoute.snapshot.paramMap.get('moedaDeOrigem');
    const MOEDA_DE_DESTINO = this.activatedRoute.snapshot.paramMap.get('moedaDeDestino');
    const QUANTIDADE_DA_MOEDA_DE_ORIGEM = this.activatedRoute.snapshot.paramMap.get('quantidadeDaMoedaDeOrigem');
  
    this.moedaDeDestino = MOEDA_DE_DESTINO;
    this.moedaDeOrigem = MOEDA_DE_ORIGEM;
    this.quantidadeDaMoedaDeOrigem = QUANTIDADE_DA_MOEDA_DE_ORIGEM;
  }

}
