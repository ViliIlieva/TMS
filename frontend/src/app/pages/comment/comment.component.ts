import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import{Router} from'@angular/router'

@Component({
  selector: 'app-new-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class NewCommentComponent {
  @Input() comments: any;

  constructor(private commentService: CommentService, private route: ActivatedRoute, private router: Router){
    this.comments = new Array;
  }

  taskId: any;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params['taskId'];
       
        this.commentService.loadCommentsByTaskId(params['taskId']).subscribe((comments) => {
        this.comments = comments;
        })
      })
  }

  addCommentToTask(
    dateAdded: string,text: string,commentType: string,reminderDate: string){
    this.commentService.addCommentToTask(this.taskId, dateAdded, text, commentType, reminderDate)
    .subscribe((task) => {
      this.router.navigate(['/tasks', this.taskId, 'comments']);
    })
  }
}


