import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.css'],
})
export class Dashboard3Component implements OnInit {
  nama = 'Lidia Terecia';
  nim = '212102371';
  constructor(private renderer: Renderer2) {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.removeClass(document.body, 'sidebar-page');
    this.renderer.addClass(document.body, 'dark-mode');

    document.getElementById('dashboard-script')?.remove();

    let scriptEl = document.createElement('script');
    scriptEl.id = 'dashboard-script';
    scriptEl.src = 'assets/dist/js/pages/dashboard3.js';
    this.renderer.appendChild(document.body, scriptEl);
  }
  ngOnInit(): void {}
}
