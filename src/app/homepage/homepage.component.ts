import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  currentImageIndex = 0;
  images: string[] = [
    'assets/paisajes/imagen4A.jpeg',
    'assets/paisajes/imagen5A.jpeg',
    'assets/paisajes/imagen6A.jpeg',
    'assets/paisajes/imagen8A.jpeg',
    'assets/paisajes/imagen11A.jpeg',
    'assets/paisajes/imagen13A.jpeg'
  ];

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.setCurrentImageIndex((this.currentImageIndex + 1) % this.images.length);
    }, 4000);
  }

  setCurrentImageIndex(index: number) {
    this.currentImageIndex = index;
  }
}
