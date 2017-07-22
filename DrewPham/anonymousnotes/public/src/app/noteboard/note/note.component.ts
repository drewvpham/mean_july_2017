import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note;

  constructor() { }

  ngOnInit() {
  }

}
