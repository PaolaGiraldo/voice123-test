import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { VoiceComponent } from './components/voice/voice.component';

const routes: Routes = [
{
  path: 'search',
  component: SearchComponent
},
{
  path: 'results/:search',
  component: VoiceComponent
},
{
  path: '**',
  redirectTo: '/search',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
