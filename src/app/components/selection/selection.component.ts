import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rate } from '../../entities/rate';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';

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
  currentDateTime: string;
  
  ListOfMarkets: rate[] = [];
  market: any; 
  coinImage: string; 

  constructor(
    private activatedRoute: ActivatedRoute, 
    private httpClient: HttpClient,
    private modalService: BsModalService) { }

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
      this.callApiToGetRates();
    }

    callApiToGetRates(): any{
    this.httpClient.get<rate[]>(environment.API+"/api/rate/"+this.moedaDeOrigemId+"/"+this.moedaDeOrigem+"/"+this.moedaDeDestino)
    .subscribe(value=>{
      value.forEach(element => {
        this.populate(element);
      });
      this.currentDateTime = new Date().toJSON("yyyy/MM/dd HH:mm");
      });

    }

    populate(value: rate){
      this.market = new Object();
      this.market.base = value.base;
      this.market.name = value.name;
      this.market.price = value.price;
      this.market.price_usd = value.price_usd;
      this.market.quote = value.quote;
      this.market.time = value.time;
      this.market.volume = value.volume;
      this.market.volume_usd = value.volume_usd;
      this.market.price_usdTotal = value.price_usd * parseInt(this.quantidadeDaMoedaDeOrigem);
      this.market.priceTotal = value.price * parseInt(this.quantidadeDaMoedaDeOrigem);

      this.populateMarketsWithImages(this.market.base);

      this.ListOfMarkets.push(this.market);
      console.log(this.ListOfMarkets.length);
    }

    populateMarketsWithImages(value: string){
      switch(value) { 
        case "BTC": { 
          this.coinImage = "assets/images/btc-icon.png";
          break; 
        } 
        case "BCH": { 
          this.coinImage = "assets/images/bch-icon.png";
          break;
        } 
        case "ETH": { 
          this.coinImage = "assets/images/eth-icon.png";
          break; 
        } 
        case "XMR": { 
          this.coinImage = "assets/images/monero-icon.png";
          break; 
        } 
        case "ZEC": { 
          this.coinImage = "assets/images/zcash-icon.png";
          break;
        } 
        default: { 
          break; 
        } 
      }

    }

    private showAlert(message: string){
      const bsModalRef = this.modalService.show(AlertModalComponent);
      bsModalRef.content.type = 'success';
      bsModalRef.content.message = message;
    }

}
