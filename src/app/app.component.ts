import { Component,OnInit } from '@angular/core';
import './app.component.css';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';
  formulario: FormGroup; 

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      moedaDeOrigem: [null, Validators.required],
      quantidadeDaMoedaDeOrigem: [null, Validators.required],
      moedaDeDestino: [null, Validators.required],
      quantidadeDaMoedaDeDestino: [null, Validators.required]
    })
  }

  
  onSubmit(){
    
    console.log(this.formulario);
    /*
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).subscribe(dados => {
      console.log(dados);
      
      //reseta o form
      this.resetar();
    },
    (error: any) => alert("erro"));//com esse erro ele não reseta
    */
  }

  resetar(){
    this.formulario.reset();
  }
}
