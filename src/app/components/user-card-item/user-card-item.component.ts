import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user-card-item',
  templateUrl: './user-card-item.component.html',
  styleUrls: ['./user-card-item.component.scss']
})
export class UserCardItemComponent implements OnInit {
  @Input() user: User;
  @Input() loading: boolean;
  @Input() error: any;

  constructor() {}

  ngOnInit() {}
}
