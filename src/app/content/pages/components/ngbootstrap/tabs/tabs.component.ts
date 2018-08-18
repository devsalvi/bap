import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

const tabset = {
		beforeCodeTitle: 'Create Profile as',
		htmlCode: ``,
		tsCode: ``,
		viewCode: ``,
		isCodeVisible: false,
		isExampleExpanded: true
	};



@Component({
	selector: 'm-tabs',
	templateUrl: './tabs.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [NgbTabsetConfig] // add NgbTabsetConfig to the component providers
})
export class TabsComponent implements OnInit {
	exampleTabset;

	currentJustify = 'center';
	currentOrientation = 'horizontal';
	globalJustify = 'center';

	constructor(config: NgbTabsetConfig) {
		// customize default values of tabsets used by this component tree
		// config.justify = 'center';
		// config.type = 'pills';
	}

	ngOnInit() {
		this.exampleTabset = tabset;
	}

	public beforeChange($event: NgbTabChangeEvent) {
		if ($event.nextId === 'tab-preventchange2') {
			$event.preventDefault();
		}
	}
}
