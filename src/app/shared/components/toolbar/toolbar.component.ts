import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'market-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
