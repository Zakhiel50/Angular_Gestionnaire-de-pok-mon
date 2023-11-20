import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]',
})
export class BorderCardDirective {

  constructor(private el: ElementRef) {
    this.setHeight(180);
    this.setBorder("f5f5f5");
  }

  // recupère l'élément de référence sur l'élément natif du DOM et applique le style
  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
