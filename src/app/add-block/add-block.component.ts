import { Component, OnInit } from '@angular/core';
import {MDCMenu} from '@material/menu';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.scss']
})
export class AddBlockComponent implements OnInit {
  menu: MDCMenu;
  constructor() { }

  ngOnInit() {
    this.menu = new MDCMenu(document.querySelector('.mdc-menu'));
  }

  onClick(): void{
    console.log("onClick of add Block item.");
    this.menu.open = !this.menu.open;
  }

}
