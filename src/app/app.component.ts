import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // myControl: FormControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];
  title = 'predicta';
  
  // filteredOptions: Observable<string[]>;

  ngOnInit() {
    // this.filteredOptions = this.myControl.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filter(value))
    //   );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
    
  //   // filter by any letter
  //   // return this.options.filter(option => option.toLowerCase().includes(filterValue));
    
  //   // filter by begining letter
  //   return this.options.filter(option => option.toLowerCase().indexOf(filterValue.toLowerCase()) === 0);
  // }
}
