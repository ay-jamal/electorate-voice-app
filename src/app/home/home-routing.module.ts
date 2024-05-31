import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'candidates',
        loadChildren: () => import('../modules/candidates/candidates.module').then(m => m.CandidatesModule)
      },
      {
        path: 'results',
        loadChildren: () => import('../modules/results/results.module').then(m => m.ResultsModule)
      },
      {
        path: 'poll',
        loadChildren: () => import('../modules/poll/poll.module').then(m => m.PollModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('../modules/questions/questions.module').then(m => m.QuestionsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
