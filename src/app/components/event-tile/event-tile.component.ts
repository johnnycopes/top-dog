import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-tile',
  templateUrl: './event-tile.component.html',
  styleUrls: ['./event-tile.component.scss']
})
export class EventTileComponent implements OnInit {
  @Input() date = this.date;
  @Input() name = this.name;

  constructor() { }

  ngOnInit() {
  }

}
