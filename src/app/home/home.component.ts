import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, shareReplay } from 'rxjs';
import { Category } from '../shared/models/category';
import { CategoryService } from '../shared/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  categories: Category[] = [];

  tiles: any[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoryService.readAll().subscribe((data) => {
      data.map((item) => this.addTile(item));
    });
  }

  private addTile(item: Category) {
    this.tiles.push({
      cols: item.cols,
      rows: item.rows,
      ...{
        id: item.id,
        name: item.name,
        photoURL: item.photoURL,
        status: item.status,
        componentURL: item.componentURL,
      },
    });
    console.log(this.tiles);
  }

  public navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
