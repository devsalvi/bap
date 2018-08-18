import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbActiveModal, ModalDismissReasons, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';



const scrollingLongContent = {
	beforeCodeTitle: 'Create your profile',
	htmlCode: ``,
	tsCode: ``,
	isCodeVisible: false,
	isExampleExpanded: true
};

@Component({
  selector: 'm-ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-info" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class NgbdModalContentComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
	selector: 'm-modal',
	templateUrl: './modal.component.html',
	encapsulation: ViewEncapsulation.None,
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
  `]
})
export class ModalComponent implements OnInit {
	exampleScrollingLongContent;

	closeResult: string;
	closeResult2: string;
	constructor(private modalService: NgbModal) { }

	open(content) {
		this.modalService.open(content).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	open2() {
		const modalRef = this.modalService.open(NgbdModalContentComponent);
		modalRef.componentInstance.name = 'World';
	}

	open3(content) {
		this.modalService.open(content, { windowClass: 'dark-modal' });
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

	openLarge(content) {
		this.modalService.open(content, {
			size: 'lg'
		});
	}

	openSmall(content) {
		this.modalService.open(content, {
			size: 'sm'
		});
	}

	openCentred(content) {
		this.modalService.open(content,
			// { centered: true }
		);
	}

	ngOnInit() {
		this.exampleScrollingLongContent = scrollingLongContent;
	}
}
