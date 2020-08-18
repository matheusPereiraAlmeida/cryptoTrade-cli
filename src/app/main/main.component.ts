import { Component, OnInit } from '@angular/core';
import './main.component.css';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/crud-service';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

const BTC_ID = 90;
const BCH_ID = 2321;
const ETH_ID = 80;
const XMR_ID = 28;
const ZEC_ID = 134;
const STORED_IN_CASH = 1;
const NOT_STORED_IN_CASH = -1;
const INITIAL_VALUE = 0

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  formulario: FormGroup; 
  dropdown_trade_selected = '';
  dropdown_trade_selected_initials = '';  
  dropdown_trade_selected_id = 0;  
  is_dropdown_trade_selected_initials_value_cached= '';

  CachedCurrencyIds = new Array();


  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      moedaDeOrigem: [null, Validators.required],
      quantidadeDaMoedaDeOrigem: [null, Validators.required],
      moedaDeDestino: [null, Validators.required]
    });

    this.initializeHash();
  }


  //vamos redicionar aqui pra proxima pagina, passando os paremetros
  onSubmit(){
    this.router.navigate(
    ['selection',
    this.dropdown_trade_selected_id,
    this.formulario.controls['moedaDeOrigem'].value,
    this.formulario.controls['moedaDeDestino'].value,
    this.formulario.controls['quantidadeDaMoedaDeOrigem'].value
    ], { relativeTo: this.route });
    /*
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(dados => {
      console.log(dados);
      
      //reseta o form
      this.resetar();
    },
    (error: any) => alert("erro"));//com esse erro ele não reseta
    */
  }

  getSelectedValue(event: any){
    this.dropdown_trade_selected = event.target.value;

    switch(this.dropdown_trade_selected) { 

      case "Bitcoin (BTC)": { 
         this.dropdown_trade_selected_initials="BTC";
         this.dropdown_trade_selected_id = BTC_ID;
         break; 
      } 
      case "Bitcoin Cash (BCH)": { 
        this.dropdown_trade_selected_initials="BCH";
        this.dropdown_trade_selected_id = BCH_ID;
        break; 
      } 
      case "Ethereum (ETH)": { 
        this.dropdown_trade_selected_initials="ETH"; 
        this.dropdown_trade_selected_id = ETH_ID;
        break; 
      } 
      case "Monero (XMR)": { 
        this.dropdown_trade_selected_initials="XMR";
        this.dropdown_trade_selected_id = XMR_ID;
        break; 
      } 
      case "Zcash (ZEC)": { 
        this.dropdown_trade_selected_initials = "ZEC";
        this.dropdown_trade_selected_id = ZEC_ID;
        break; 
      } 
      default: { 
        break; 
      } 
    }
 
    this.is_dropdown_trade_selected_initials_value_cached = this.isCached(this.dropdown_trade_selected_id);

    if (this.is_dropdown_trade_selected_initials_value_cached == NOT_STORED_IN_CASH.toString()){
        
        this.httpClient.get<string>(environment.API+'/api/coin/'+this.dropdown_trade_selected_id).subscribe
        ( 
          result =>  this.CachedCurrencyIds[this.dropdown_trade_selected_id.toString()] = result 
        ) 
         
    } else{
        console.log("Valor Armazenado na cash");
    }

  }
 
  isCached(idDaMoedaBuscada){

    if (idDaMoedaBuscada == INITIAL_VALUE ) return INITIAL_VALUE.toString();

    for (var CurrencyId in this.CachedCurrencyIds) {
      if (CurrencyId == idDaMoedaBuscada) {
        if(this.CachedCurrencyIds[idDaMoedaBuscada] != INITIAL_VALUE){
          return STORED_IN_CASH.toString();
        }else{
          return NOT_STORED_IN_CASH.toString();
        }
      }
    }

  }

  initializeHash(){
    this.CachedCurrencyIds[BTC_ID.toString()] = 0;
    this.CachedCurrencyIds[BCH_ID.toString()] = 0;
    this.CachedCurrencyIds[ETH_ID.toString()] = 0;
    this.CachedCurrencyIds[XMR_ID.toString()] = 0;
    this.CachedCurrencyIds[ZEC_ID.toString()] = 0;
  }

  resetar(){
    this.formulario.reset();
  }
}
