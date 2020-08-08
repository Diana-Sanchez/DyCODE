import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @ViewChild('editor') editor;
    text: string = "";
 
    ngAfterViewInit() {
        this.editor.setTheme("dracula");
        this.editor.setMode("javascript")
 
        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });
 
        
    }
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
