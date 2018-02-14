import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, cifrar:boolean = true): string {
    let cifrado:string = "";
    if(cifrar){
      for(let i = 0; i<value.length; i++){
          cifrado += "*";
      }
    }else{
      cifrado = value;
    }
    // console.log(cifrado);
    return cifrado;
  }

}
