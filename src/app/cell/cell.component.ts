import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'my-cell',
  template: `<div>{{value}}</div>`,
  styles: [
    `div {height: 170px; width: 180px; background-color: pink; float: left; margin: 0 4px 4px 0; color: black; font-size: 110px; text-align: center;}`
  ]
})
export class CellComponent {
  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
}