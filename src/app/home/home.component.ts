import { Component, OnInit } from '@angular/core';

interface Category {
  id: number;
  name: string;
  status: string;
  photoURL: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categories: Category[] = [
    {
      id: 1,
      name: 'Lacinhos',
      status: 'A',
      photoURL: '../../assets/images/laco.jpg',
    },
    {
      id: 2,
      name: 'Bordados',
      status: 'A',
      photoURL: '../../assets/images/bordado_bastidor.jpg',
    },
    {
      id: 3,
      name: 'Argila',
      status: 'A',
      photoURL: '../../assets/images/argila.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
