import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';


@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private webReqService: WebRequestService) { }


  loadCommentsByTaskId(taskId: string){
    return this.webReqService.get(`tasks/${taskId}/comments`) ;
  }

  addCommentToTask(taskId: string, dateAdded: string, tex: string, commentType: string, reminderDate: string){
    return this.webReqService.post(`tasks/${taskId}/comments`, {dateAdded, tex, commentType, reminderDate})
  }
}
