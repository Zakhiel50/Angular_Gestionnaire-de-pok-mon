import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  standalone:true,
  selector: '[pokemonBorderCard]',
})
export class BorderCardDirective {


  //propriété initialColor (couleur initial au chargement de la page)
  private initialColor: string = "#f5f5f5"
  // defaultColor (couleur par default si aucun couleur de bordure n'a été précisé par l'user dan le html)
  private defaultColor: string = "#009688"
  // defaultHeight (taille de la bordure par defaut)
  private defaultHeight: number = 180
  // styles de bordures
  private dashedHeight: string = "dashed"
  private solidHeight: string = "solid"

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor, this.solidHeight);
    this.setHeight(this.defaultHeight);
  }


  @Input("pokemonBorderCard") borderColor: string; // alias
  // @input() pokemonBorderCard: string; // sans alias

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor, this.dashedHeight || this.defaultColor && this.solidHeight );
    this.setHeight(this.defaultHeight)
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor, this.solidHeight); 
  }

  // recupère l'élément de référence sur l'élément natif du DOM et applique le style
  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  // Séléctionne le style et la couleur de la bordure
  private setBorder(color: string, borderStyle: string) {
    let border = `${borderStyle} 4px ${color}` 
    this.el.nativeElement.style.border = border;
  }

}
