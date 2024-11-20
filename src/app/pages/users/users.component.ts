// import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models/interface';
import { UserService } from '../../services/users.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { ViewUserComponent } from '../view-user/view-user.component';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule],
  providers: [UserService, ],
  templateUrl: './users.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UsersComponent {
  public users$: Observable<IUser[]> | undefined;
  private userService: UserService = inject(UserService);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  openDialog(id: number) {
    this.dialog.open(ViewUserComponent, {
      data: id,
    });
  }
}
