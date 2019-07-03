import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
    { path: 'list', loadChildren: './pages/list/list.module#ListPageModule' },
    { path: 'detail/:id', loadChildren: './pages/detail/detail.module#DetailPageModule' },
    { path: 'add', loadChildren: './pages/add/add.module#AddPageModule' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}
