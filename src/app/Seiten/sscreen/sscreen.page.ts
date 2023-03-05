import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sscreen',
  templateUrl: './sscreen.page.html',
  styleUrls: ['./sscreen.page.scss'],
})
export class SScreenPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
    this.router.navigate(['login']);
  },3000)
    
  }
}
