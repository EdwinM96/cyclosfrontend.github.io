import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-btn',
  templateUrl: './up-btn.component.html',
  styleUrls: ['./up-btn.component.css']
})
export class UpBtnComponent implements OnInit {

  constructor() {
    window.onscroll = () => scrollFunction();
   }

  ngOnInit() {
  }

}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('topBtn').style.display = 'block';
  } else {
    document.getElementById('topBtn').style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
