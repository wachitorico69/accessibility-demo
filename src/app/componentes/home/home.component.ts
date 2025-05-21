import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

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
