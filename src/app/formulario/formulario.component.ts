import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  userform;

  constructor() { }

  ngOnInit() {
    this.userform= new FormGroup({
      email : new FormControl("", Validators.compose([null,Validators.required])),
  
      password: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      direccion: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      pais: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      ciudad: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      provincia: new FormControl("",Validators.compose([null,Validators.required,Validators.maxLength(30)])),
      codigo: new FormControl(""),
    });}

    
    

  

  onSubmit (){
    console.log(this.userform.value);
  
  }
}
