import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../../models/user";

@Component({
  selector: 'app-user-card-item',
  templateUrl: './user-card-item.component.html',
  styleUrls: ['./user-card-item.component.scss']
})
export class UserCardItemComponent implements OnInit {
  @Input() user: User;
  @Output() select = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
