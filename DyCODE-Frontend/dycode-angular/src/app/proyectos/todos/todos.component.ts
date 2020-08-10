import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @ViewChild('editor') editor;
  @ViewChild('editor2') editor2;
  @ViewChild('editor3') editor3;

    ngAfterViewInit() {
        this.editor.setTheme("asphalt");
        this.editor.setMode("html")
        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });
        this.editor2.setTheme("asphalt");
        this.editor2.setMode("css")
        this.editor2.getEditor().setOptions({
            enableBasicAutocompletion: true
        }); 
        this.editor3.setTheme("asphalt");
        this.editor3.setMode("javascript")
        this.editor3.getEditor().setOptions({
            enableBasicAutocompletion: true
        }); 
       
    }
    
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
