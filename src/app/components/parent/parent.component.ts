import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ParentComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  primitiveData = 0;
  nonPrimitiveData = { value: 'Initial Data' };

  updatePrimitiveData() {
    this.primitiveData++;
  }

  updateNonPrimitiveData() {
    // Reassigning a new object reference to trigger OnPush change detection in child
    this.nonPrimitiveData = { ...this.nonPrimitiveData, value: 'Updated Data ' + this.primitiveData };
  }

}
