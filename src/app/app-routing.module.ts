import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
    
  {
    path: 'asistente',
    loadChildren: () => import('./asistente/asistente.module').then( m => m.AsistentePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'comenzar-compra',
    loadChildren: () => import('./comenzar-compra/comenzar-compra.module').then( m => m.ComenzarCompraPageModule)
  },
  {
    path: 'c',
    loadChildren: () => import('./c/c.module').then( m => m.CPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
