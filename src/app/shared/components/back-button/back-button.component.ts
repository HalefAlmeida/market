import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'market-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css'],
})
export class BackButtonComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  /**
   * Volta a navegação para a página anterior
   */
  backNavigation() {
    this.location.back();
  }
}
