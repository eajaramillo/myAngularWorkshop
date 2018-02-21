import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes: any[], pos:number = 1): any {

    let noimage = 'assets/img/noimage.png';
    if(!imagenes){
      return noimage;
    }
    return (imagenes.length > 0 && imagenes[pos] != undefined)? imagenes[pos].url: noimage;
  }

}
