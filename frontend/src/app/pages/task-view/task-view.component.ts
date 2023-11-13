import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  @Input() tasks: any;
   
  constructor(private taskService: TaskService, private route: ActivatedRoute){
  } 

  ngOnInit() {
     this.taskService.loadAllTasks().subscribe((tasks) => {
    this.tasks = tasks})
  }
   
  loadAllTasks(){
    this.taskService.loadAllTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

 

  // getTasksByStatus(){
  //   this.taskService.loadAllTasks().subscribe((tasks) => {})
  // }
}


