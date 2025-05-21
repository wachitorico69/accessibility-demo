import { NgStyle } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  barra: boolean = false;
  fontSize: number = 20;
  fontFam: string = "Arial";
  color: string = "#2ea55a";
  bcolor: string = "#ff3131";
  weight: string = "normal";

  doSom() {
    this.barra = !this.barra;
    this.fontSize = 20;
    this.fontFam = "Arial";
    this.color = "#2ea55a";
    this.bcolor = "#ff3131";
    this.weight = "normal";
    this.cancelar();
  }

  @ViewChildren('readable') readableElements!: QueryList<ElementRef>;
  currentElement: HTMLElement | null = null;

  addMessage() {
    const elements = this.readableElements.toArray();

    const readNext = (index: number) => {
      if (index >= elements.length) return;

      const el = elements[index].nativeElement;
      const text = el.innerText;

      const utterance = new SpeechSynthesisUtterance(text);

      //resaltar
      utterance.onstart = () => {
        el.style.backgroundColor = 'yellow';
        this.currentElement = el; // guardar referencia
      };

      //quitar resaltado
      utterance.onend = () => {
        el.style.backgroundColor = 'transparent';
        this.currentElement = null;
        readNext(index + 1);
      };

      speechSynthesis.speak(utterance);
    };

    readNext(0); // Comenzar desde el primer elemento
  }

  pausaResumir() {
    if (speechSynthesis.paused)
      speechSynthesis.resume();
    else
      speechSynthesis.pause();
  }

  cancelar() {
    speechSynthesis.cancel();

    if (this.currentElement) {
      this.currentElement.style.backgroundColor = 'transparent';
      this.currentElement = null;
    }
  }

  actContraste() {
    const colors = ["#2ea55a", "#343232"];
    const currentIndex = colors.indexOf(this.color);
    const nextIndex = (currentIndex + 1) % colors.length;
    this.color = colors[nextIndex];

    const bcolors = ["#ff3131", "#cdc9c5"];
    const currentIndex2 = bcolors.indexOf(this.bcolor);
    const nextIndex2 = (currentIndex2 + 1) % bcolors.length;
    this.bcolor = bcolors[nextIndex2];

    const weights = ["normal", "bolder"];
    const currentIndex3 = weights.indexOf(this.weight);
    const nextIndex3 = (currentIndex3 + 1) % weights.length;
    this.weight = weights[nextIndex3];
  }

  changeSize() {
    const sizes = [20, 22, 24, 26];
    const currentIndex = sizes.indexOf(this.fontSize);
    const nextIndex = (currentIndex + 1) % sizes.length;
    this.fontSize = sizes[nextIndex];
  }

  changeFont() {
    const fonts = ["Arial", "Verdana", "Roboto"];
    const currentIndex = fonts.indexOf(this.fontFam);
    const nextIndex = (currentIndex + 1) % fonts.length;
    this.fontFam = fonts[nextIndex];
  }
}
