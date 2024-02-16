import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  testApp: string = (Math.floor(Math.random()*256).toString(16)).padStart(2, '0'); 
  ngOnInit(): void {
    console.log("AppComponent : " + this.testApp);
    
  }
}
