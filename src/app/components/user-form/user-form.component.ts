import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import { User } from '@app-core/models';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit, OnChanges {

  @Input() user: User = {
    id: 0,
    name: '',
    birthdate: new Date
  };

  @Output() save = new EventEmitter<User>();

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'id': [this.user.id],
      'name': [this.user.name, Validators.required],
      'birthdate': [this.user.birthdate, Validators.required],
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.user) {
      this.form.patchValue({...this.user});
    }
  }

  submit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }

  }

}
