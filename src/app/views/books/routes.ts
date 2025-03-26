import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Kitaplar'
    },
    children: [
      {
        path: '',
        redirectTo: 'kitaplar',
        pathMatch: 'full'
      },
      {
        path: 'kitaplar',
        loadComponent: () => import('./kitaplar/kitaplar.component').then(m => m.KitaplarComponent),
        data: {
          title: 'Kitaplar'
        }
      }
    ]
  }
];

