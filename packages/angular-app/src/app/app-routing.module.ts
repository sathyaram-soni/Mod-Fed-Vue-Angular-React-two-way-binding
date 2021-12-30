import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VueWrapperComponent } from './vue-wrapper/vue-wrapper.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'vue',
    component: VueWrapperComponent,
    pathMatch: 'full',
  },
  {
    path: 'react',
    component: ReactWrapperComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
