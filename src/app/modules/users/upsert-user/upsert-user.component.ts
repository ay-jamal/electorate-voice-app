import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { DialogCard } from 'src/app/core/classes/dialog-card';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-upsert-user',
  templateUrl: './upsert-user.component.html',
  styleUrls: ['./upsert-user.component.scss']
})
export class UpsertUserComponent extends DialogCard implements OnInit {

  @Input() editMode = false

  constructor(
    dialogRef: NbDialogRef<any>,
    private usersService: UsersService,
    private toastr: NbToastrService
  ) {
    super(dialogRef);
  }

  ngOnInit(): void {
  }

  UserForm: FormGroup = new FormGroup({

  })

  submit() {
    this.usersService.addUsers(this.UserForm.value).subscribe({
      next: (res) => {
        this.toastr.success("تمت العملية", "تم اظافة المستخدم بنجاح ");
      }
    })
  }

}
