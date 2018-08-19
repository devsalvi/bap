import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { ActionComponent } from './header/action/action.component';
import { ProfileComponent } from './header/profile/profile.component';
import { MailModule } from './components/apps/mail/mail.module';
import { ECommerceModule } from './components/apps/e-commerce/e-commerce.module';
import { CoreModule } from '../../core/core.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { TabsComponent } from './components/ngbootstrap/tabs/tabs.component';
import { MaterialPreviewModule } from '../partials/content/general/material-preview/material-preivew.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PharmacistStepperComponent } from './components/material/layout/stepper/pharmacist.stepper.component';
import {
	MatAutocompleteModule,
	MatNativeDateModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatSelectModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatSliderModule,
	MatPaginatorModule,
	MatSortModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatStepperModule,
	MatToolbarModule,
	MatDividerModule,
	MatTabsModule,
	MatTableModule,
	MatTooltipModule,
	MatListModule,
	MatGridListModule,
	MatButtonToggleModule,
	MatBottomSheetModule,
	MatExpansionModule,
	_MatChipListMixinBase,
	MatMenuModule,
	MatTreeModule,
	MAT_BOTTOM_SHEET_DATA,
	MatBottomSheetRef
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Form controls
import { DatepickerComponent } from './components/material/formcontrols/datepicker/datepicker.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormfieldComponent } from './components/material/formcontrols/formfield/formfield.component';
import { InputComponent } from './components/material/formcontrols/input/input.component';
import { RadiobuttonComponent } from './components/material/formcontrols/radiobutton/radiobutton.component';
import { SelectComponent } from './components/material/formcontrols/select/select.component';
import { SliderComponent } from './components/material/formcontrols/slider/slider.component';
import { SlidertoggleComponent } from './components/material/formcontrols/slidertoggle/slidertoggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [
		PagesComponent,
		ActionComponent,
		ProfileComponent,
		ErrorPageComponent,
		TabsComponent,
		PharmacistStepperComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		PagesRoutingModule,
		CoreModule,
		LayoutModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		AngularEditorModule,
		MaterialPreviewModule,
		NgbModule,
		MatStepperModule,
		FormsModule,
		ReactiveFormsModule,

		MatInputModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatListModule,
		MatSliderModule,
		MatCardModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatNativeDateModule,
		MatSlideToggleModule,
		MatCheckboxModule,
		MatMenuModule,
		MatTabsModule,
		MatTooltipModule,
		MatSidenavModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTableModule,
		MatGridListModule,
		MatToolbarModule,
		MatBottomSheetModule,
		MatExpansionModule,
		MatDividerModule,
		MatSortModule,
		MatStepperModule,
		MatChipsModule,
		MatPaginatorModule,
		MatDialogModule,
		CoreModule,
		CommonModule,
		MatRadioModule,
		MatTreeModule,
		MatButtonToggleModule,
		PartialsModule,
		MaterialPreviewModule,
	],
	providers: [],
})
export class PagesModule {}
