import { Component, OnInit } from '@angular/core';

// Los estilos definidos en el template solo afectan
// al mismo template, a menos que se defina una estilo global
// en el archivo de estilos style.css
@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [`
      p {
        font-size:20px;
      }
    `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
