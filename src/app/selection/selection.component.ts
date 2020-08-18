import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rate } from '../entities/rate';
import { teste } from '../entities/teste';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})

export class SelectionComponent implements OnInit {
  moedaDeOrigem = '';
  moedaDeOrigemId = '';
  moedaDeDestino = '';
  quantidadeDaMoedaDeOrigem = '';
  rateTest: teste = {
    base: "",
    name: "",
    price: -1, 
    price_usd: -1,
    quote: "",
    time: -1,
    volume: -1,
    volume_usd: -1,
    image: "",
    isFirst: false
  }
  
  testes: teste[] = [];
  novoObjeto: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private httpClient: HttpClient) { }

  ngOnInit() {
    const MOEDA_DE_ORIGEM_ID = this.activatedRoute.snapshot.paramMap.get('id');
    const MOEDA_DE_ORIGEM = this.activatedRoute.snapshot.paramMap.get('moedaDeOrigem');
    const MOEDA_DE_DESTINO = this.activatedRoute.snapshot.paramMap.get('moedaDeDestino');
    const QUANTIDADE_DA_MOEDA_DE_ORIGEM = this.activatedRoute.snapshot.paramMap.get('quantidadeDaMoedaDeOrigem');
  
    this.moedaDeDestino = MOEDA_DE_DESTINO;
    this.moedaDeOrigemId = MOEDA_DE_ORIGEM_ID;
    this.moedaDeOrigem = MOEDA_DE_ORIGEM;
    this.quantidadeDaMoedaDeOrigem = QUANTIDADE_DA_MOEDA_DE_ORIGEM;
  
    console.log("OnInit do Selection");
    this.getHeroes();
  }

  getHeroes(): any{
    this.httpClient.get<teste[]>(environment.API+"/api/rate/"+this.moedaDeOrigemId+"/"+this.moedaDeOrigem+"/"+this.moedaDeDestino)
    .subscribe(value=>{
      value.forEach(element => {
        this.populate(element);
      });
      this.testes[0].isFirst = true;
      });

    }

    populate(value: teste){
      this.novoObjeto = new Object();
      this.novoObjeto.base = value.base;
      this.novoObjeto.name = value.name;
      this.novoObjeto.price = value.price;
      this.novoObjeto.price_usd = value.price_usd;
      this.novoObjeto.quote = value.quote;
      this.novoObjeto.time = value.time;
      this.novoObjeto.volume = value.volume;
      this.novoObjeto.volume_usd = value.volume_usd;

      this.populateRateWithImages(this.novoObjeto.base);

      this.testes.push(this.novoObjeto);
    }

    populateRateWithImages(value: string){
      switch(value) { 
        case "BTC": { 
          this.rateTest.image = "assets/images/btc-icon.png";
          break; 
        } 
        case "BCH": { 
          this.rateTest.image = "assets/images/bch-icon.png";
          break;
        } 
        case "ETH": { 
          this.rateTest.image = "assets/images/eth-icon.png";
          break; 
        } 
        case "XMR": { 
          this.rateTest.image = "assets/images/monero-icon.png";
          break; 
        } 
        case "ZEC": { 
          this.rateTest.image = "assets/images/zcash-icon.png";
          break;
        } 
        default: { 
          break; 
        } 
      }

    }
}
