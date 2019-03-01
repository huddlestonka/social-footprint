import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from "../../models/user";
import { UserResult } from 'src/app/models';

@Component({
  selector: 'app-user-card-item',
  templateUrl: './user-card-item.component.html',
  styleUrls: ['./user-card-item.component.scss']
})
export class UserCardItemComponent implements OnInit {
  @Input() user: UserResult;
  @Output() select = new EventEmitter<number>();
  @Input() loading: boolean;
  @Input() error: any;

  @Output() refresh = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
