import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/interface';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { UserService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [CommonModule,MatDialogModule],
  providers:[UserService],
  templateUrl: './view-user.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class ViewUserComponent {

  public user$: Observable<IUser> | undefined;
  private userService:UserService=inject(UserService);
  public data=inject(MAT_DIALOG_DATA) ;
  public dialogRef=inject(DialogRef) ;

  ngOnInit(): void {    
    this.user$=this.userService.getUser(this.data);
  }  
  
}
