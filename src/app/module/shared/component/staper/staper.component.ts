import { Component ,  Input } from '@angular/core';

@Component({
  selector: 'app-staper',
  templateUrl: './staper.component.html',
  styleUrls: ['./staper.component.scss']
})
export class StaperComponent {
@Input() steps: any;
@Input() activeStep: any;

}
