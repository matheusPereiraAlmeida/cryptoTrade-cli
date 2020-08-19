import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  
  @Input() type: 'success';
  @Input() message: string;

  constructor(public bsModalRef: BsModalRef,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClose(){
    this.bsModalRef.hide();
    this.router.navigate(
      [''], { relativeTo: this.route });
  }
}
