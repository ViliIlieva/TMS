import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { NewCommentComponent } from './pages/comment/comment.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TaskViewComponent},
  {path: 'tasks/:taskId/comments', component: NewCommentComponent},
  {path: 'tasks/:taskId', component: TaskViewComponent},
  {path: 'new-comment', component: NewCommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
