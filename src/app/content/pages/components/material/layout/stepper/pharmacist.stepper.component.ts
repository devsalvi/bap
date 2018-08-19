import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

const stepperOverview =	{
		cssCode: `
.mat-list-icon {
  color: rgba(0, 0, 0, 0.54);
}
`,
		viewCode: ``,
		isCodeVisible: false,
		isExampleExpanded: true
	};

@Component({
	selector: 'm-pharmacy-stepper',
	templateUrl: './pharmacist.stepper.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})



export class PharmacistStepperComponent implements OnInit {
licenseNumber: any;
isHuman: any;
onChange: any;
stateCtrl: FormControl;
      filteredStates: Observable<any[]>;
      states: State[] = [
          {
              "name": "Alabama",
              "abbreviation": "AL"
          },
          {
              "name": "Alaska",
              "abbreviation": "AK"
          },
          {
              "name": "American Samoa",
              "abbreviation": "AS"
          },
          {
              "name": "Arizona",
              "abbreviation": "AZ"
          },
          {
              "name": "Arkansas",
              "abbreviation": "AR"
          },
          {
              "name": "California",
              "abbreviation": "CA"
          },
          {
              "name": "Colorado",
              "abbreviation": "CO"
          },
          {
              "name": "Connecticut",
              "abbreviation": "CT"
          },
          {
              "name": "Delaware",
              "abbreviation": "DE"
          },
          {
              "name": "District Of Columbia",
              "abbreviation": "DC"
          },
          {
              "name": "Federated States Of Micronesia",
              "abbreviation": "FM"
          },
          {
              "name": "Florida",
              "abbreviation": "FL"
          },
          {
              "name": "Georgia",
              "abbreviation": "GA"
          },
          {
              "name": "Guam",
              "abbreviation": "GU"
          },
          {
              "name": "Hawaii",
              "abbreviation": "HI"
          },
          {
              "name": "Idaho",
              "abbreviation": "ID"
          },
          {
              "name": "Illinois",
              "abbreviation": "IL"
          },
          {
              "name": "Indiana",
              "abbreviation": "IN"
          },
          {
              "name": "Iowa",
              "abbreviation": "IA"
          },
          {
              "name": "Kansas",
              "abbreviation": "KS"
          },
          {
              "name": "Kentucky",
              "abbreviation": "KY"
          },
          {
              "name": "Louisiana",
              "abbreviation": "LA"
          },
          {
              "name": "Maine",
              "abbreviation": "ME"
          },
          {
              "name": "Marshall Islands",
              "abbreviation": "MH"
          },
          {
              "name": "Maryland",
              "abbreviation": "MD"
          },
          {
              "name": "Massachusetts",
              "abbreviation": "MA"
          },
          {
              "name": "Michigan",
              "abbreviation": "MI"
          },
          {
              "name": "Minnesota",
              "abbreviation": "MN"
          },
          {
              "name": "Mississippi",
              "abbreviation": "MS"
          },
          {
              "name": "Missouri",
              "abbreviation": "MO"
          },
          {
              "name": "Montana",
              "abbreviation": "MT"
          },
          {
              "name": "Nebraska",
              "abbreviation": "NE"
          },
          {
              "name": "Nevada",
              "abbreviation": "NV"
          },
          {
              "name": "New Hampshire",
              "abbreviation": "NH"
          },
          {
              "name": "New Jersey",
              "abbreviation": "NJ"
          },
          {
              "name": "New Mexico",
              "abbreviation": "NM"
          },
          {
              "name": "New York",
              "abbreviation": "NY"
          },
          {
              "name": "North Carolina",
              "abbreviation": "NC"
          },
          {
              "name": "North Dakota",
              "abbreviation": "ND"
          },
          {
              "name": "Northern Mariana Islands",
              "abbreviation": "MP"
          },
          {
              "name": "Ohio",
              "abbreviation": "OH"
          },
          {
              "name": "Oklahoma",
              "abbreviation": "OK"
          },
          {
              "name": "Oregon",
              "abbreviation": "OR"
          },
          {
              "name": "Palau",
              "abbreviation": "PW"
          },
          {
              "name": "Pennsylvania",
              "abbreviation": "PA"
          },
          {
              "name": "Puerto Rico",
              "abbreviation": "PR"
          },
          {
              "name": "Rhode Island",
              "abbreviation": "RI"
          },
          {
              "name": "South Carolina",
              "abbreviation": "SC"
          },
          {
              "name": "South Dakota",
              "abbreviation": "SD"
          },
          {
              "name": "Tennessee",
              "abbreviation": "TN"
          },
          {
              "name": "Texas",
              "abbreviation": "TX"
          },
          {
              "name": "Utah",
              "abbreviation": "UT"
          },
          {
              "name": "Vermont",
              "abbreviation": "VT"
          },
          {
              "name": "Virgin Islands",
              "abbreviation": "VI"
          },
          {
              "name": "Virginia",
              "abbreviation": "VA"
          },
          {
              "name": "Washington",
              "abbreviation": "WA"
          },
          {
              "name": "West Virginia",
              "abbreviation": "WV"
          },
          {
              "name": "Wisconsin",
              "abbreviation": "WI"
          },
          {
              "name": "Wyoming",
              "abbreviation": "WY"
          }
      ];
	exampleStepperOverview;

	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

	constructor(private _formBuilder: FormBuilder) { 
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

	ngOnInit() {
		this.exampleStepperOverview = stepperOverview;
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required],
      lastCtrl: ['', Validators.required]
		  });
		  this.secondFormGroup = this._formBuilder.group({
      addressLine1Ctrl: ['', Validators.required],
			addressLine2Ctrl: ['', Validators.required]
		  });
      this.thirdFormGroup = this._formBuilder.group({
      licenseNumber: ['', Validators.required]
      });
      this.fourthFormGroup = this._formBuilder.group({
      });
	}
    filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}

export class State {
  constructor(public name: string, public abbreviation: string) { }
}

