import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { DialogCard } from 'src/app/core/classes/dialog-card';
import { CandidatesService } from 'src/app/core/services/candidates.service';

@Component({
  selector: 'app-upsert-candidates',
  templateUrl: './upsert-candidates.component.html',
  styleUrls: ['./upsert-candidates.component.scss']
})
export class UpsertCandidatesComponent extends DialogCard implements OnInit {

  @Input() editMode: boolean = false;
  @Input() candidate

  constructor(dialogRef: NbDialogRef<any>,
    private candidatesService: CandidatesService,
    private toastr: NbToastrService
  ) {
    super(dialogRef)
  }

  CandidatesForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    party: new FormControl("", [Validators.required]),
    biography: new FormControl("", [Validators.required]),
    achievements: new FormControl("", [Validators.required]),
    keyIssues: new FormControl("", [Validators.required]),
  })

  ngOnInit(): void {
  }

  getCandidate() {
  }


  submit() {
    if (!this.editMode) {
      this.candidatesService.addCandidates(this.CandidatesForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.toastr.success("تمت العملية", "تم اظافة المرشح بنجاح ");
          this.close(true)
        }
      })
      return;
    }
  }

}
