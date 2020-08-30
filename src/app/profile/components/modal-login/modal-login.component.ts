import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ConfigOptionsService } from '../../../core/services/config-options.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.less'],
})
export class ModalLoginComponent implements OnInit {
  loginForm: FormGroup;
  visible = false;

  @Output() onUserLoggedIn = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder, 
    private localStorageService: LocalStorageService,
    private configOptionsService: ConfigOptionsService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.loginForm = this.fb.group({
      name: ['', [
          Validators.required
        ]
      ],
        password: ['', [
          Validators.required, 
          Validators.minLength(6)
        ]
      ]
    });
  }

  onSubmit(): void {
    const controls = this.loginForm.controls;

    if (this.loginForm.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());

      return;
    }
    
    const userName = this.loginForm.value.name;

    this.localStorageService.setItem('username', userName);
    this.configOptionsService.set({ id: Math.floor((Math.random() * 100) + 1) });
    this.onUserLoggedIn.emit(userName);

    this.loginForm.reset();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  togleModal(flag: boolean): void {
    this.visible = flag;
  }

}
