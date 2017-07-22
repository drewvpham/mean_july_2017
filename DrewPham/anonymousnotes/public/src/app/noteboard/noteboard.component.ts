import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-noteboard',
  templateUrl: './noteboard.component.html',
  styleUrls: ['./noteboard.component.css']
})
export class NoteboardComponent implements OnInit {
  newNote={note: ''};
  notes:any[] = [];

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
    this.getNotes();

  }
  getNotes(){

    return this._noteService.getNotes()
    .then(notes => this.notes=notes)
    .catch(err=> console.log(err))
  


  }

  createNote(){
   return this._noteService.create(this.newNote)
  .then(note => {
    if(note.errors){
      console.log(note.errors)
    }
    else{
      console.log('you created this note:', this.newNote, this.notes)
      this.getNotes();
    }
  })
  .catch(err => console.log(err))
  }

}
