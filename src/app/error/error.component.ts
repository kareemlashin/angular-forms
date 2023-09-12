import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {
  /* Variables
  -------------------------------------------------- */
  title: any = '';

  /* Input & Output
  -------------------------------------------------- */
  // ! - Input to get Value From Parent Component
  @Input() Name: any;

  // ? The constructor initializes the component and its dependencies.
  constructor(private cd: ChangeDetectorRef) {
    /*
     ***********************************************************************************************************
     * The ChangeDetectorRef (cd) is a service provided by Angular for manual change detection control.
     * It allows us to mark components for change detection and trigger the change detection process manually.
     * In this case, we are injecting ChangeDetectorRef into the component and assigning it to the private property (cd).
     * This allows us to use the cd object later in the code to manually mark the component for change detection.
     ***********************************************************************************************************
     */
  }

  /* life Cycle components
  -------------------------------------------------- */

  // ? Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  // ? Add 'implements DoCheck' to the class.
  ngDoCheck(): void {
    // ! Calling markForCheck() on the ChangeDetectorRef object (cd) marks the component
    // ! for change detection, indicating that it should be checked for changes in the next cycle.
    this.cd.markForCheck();
  }

  // * on init components
  ngOnInit(): void {}

  // * after view  components render
  ngAfterViewInit(): void {}

  // * on Input change
  ngOnChanges(): void {}

  // * on Destroy components
  ngOnDestroy(): void {}

  /* Logic & function
  -------------------------------------------------- */
}
