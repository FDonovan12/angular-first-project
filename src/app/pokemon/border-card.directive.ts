import { Directive, ElementRef, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective implements OnInit {

  inititalColor: string = '#f5f5f5';
  defaultColor: string = '#009688';
  defaultBack: string = this.randomGradient();
  heightDefault: number = 180;

  @Input('pkmnBorderCard') borderColor: string;

  constructor(private el: ElementRef) {
    // this.setHeight(this.heightDefault);
    this.setBorder(this.inititalColor);
    this.setBackground(this.borderColor || this.defaultBack);
  }

  ngOnInit(): void {
    this.setBackground(this.borderColor || this.defaultBack);
    // console.log("ListPokemonComponent : " + this.borderColor)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
    this.setBackground(this.randomGradient());
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.inititalColor);
    this.setBackground(this.borderColor || this.defaultBack);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  }
  

  setBackground(color: string) {
    this.el.nativeElement.style.background = color;
  }
  

  setBorder(color: string) {
    const border = `solid 4px ${color}`
    this.el.nativeElement.style.border = border;
  }

  oneRandomColor(): string {
    return BorderCardDirective.oneRandomColor();
  }

  static oneRandomColor(): string {
    const first = (Math.floor(Math.random()*256).toString(16)).padStart(2, '0');
    const second = (Math.floor(Math.random()*256).toString(16)).padStart(2, '0');
    const third = (Math.floor(Math.random()*256).toString(16)).padStart(2, '0');
    return `#${first}${second}${third}`;
  }

  randomGradient(): string {
    return BorderCardDirective.randomGradient();
  }
  static randomGradient(): string {
    let result: string = "linear-gradient(150deg";
    for (let index = 0; index < 15; index++) {
      result += ",";
      let color: string = BorderCardDirective.oneRandomColor();
      result += color;
    }
    
    return result + ")";
  }
}
