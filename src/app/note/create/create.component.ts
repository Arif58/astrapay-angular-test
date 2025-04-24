import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  form!: FormGroup;

  constructor(
    public noteService: NoteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    })
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.noteService.create(this.form.value).subscribe(res => {
      console.log(res);
      this.router.navigate(['/note/index']);
    })
  }
}
