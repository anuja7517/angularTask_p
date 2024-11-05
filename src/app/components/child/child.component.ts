import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() childData: any;

  childComponentData = 0;

  updateChildData() {
    this.childComponentData++;
  }

}
