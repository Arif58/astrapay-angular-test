import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  notes: Note[] = [];

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getAll().subscribe((res) => {
      this.notes = res.data;
      console.log(this.notes);
      })
  }

  deleteNote(id:number){
    this.noteService.delete(id).subscribe(res => {
      this.notes = this.notes.filter(item => item.id !== id);
    })
  }

  convertNewlinesToBreaks(text: string): string {
    return text.replace(/\n/g, '<br>');
  }
}
