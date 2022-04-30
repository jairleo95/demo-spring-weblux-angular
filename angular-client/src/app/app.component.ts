import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-client';
  description = 'Angular4-MongoDB';

  ngOnInit(){

  }
  reloadData(){
    alert("Simp")
  }
  
}
