import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1> {{name}} </h1>`,
  styles: [`h1 { color:rgb(124, 88, 129); font-family: myfont; background-image: url("/assets/images/folha.gif") ; text-align: center; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
