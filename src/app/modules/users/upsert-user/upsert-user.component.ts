import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Input() user

  constructor(
    dialogRef: NbDialogRef<any>,
    private usersService: UsersService,
    private toastr: NbToastrService
  ) {
    super(dialogRef);
  }

  ngOnInit(): void {
    if (this.editMode) this.getUser();
  }

  getUser() {
    this.usersService.getUser(this.user.login).subscribe({
      next: (res) => {
        console.log(res);
        this.UserForm.patchValue({ ...res },
        )
      }
    })
  }

  UserForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    activated: new FormControl(true, [Validators.required]),
    langKey: new FormControl("ar-ly", [Validators.required]),
    login: new FormControl("", [Validators.required]),
    authorities: new FormControl([], [Validators.required]),
  })

  submit() {
    if (!this.editMode) {
      this.usersService.addUsers(this.UserForm.value).subscribe({
        next: (res) => {
          this.toastr.success("تمت العملية", "تم اظافة المستخدم بنجاح ");
          this.close(true)
        }
      })
      return;
    }
    const userObject = {
      id: this.user.id,
      ...this.UserForm.value
    }
    this.usersService.editUsers(userObject).subscribe({
      next: () => {
        this.toastr.success("تمت العملية", "تم تعديل المستخدم بنجاح ");
        this.close(true)
      }
    })
  }

}
