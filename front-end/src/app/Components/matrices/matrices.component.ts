import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { SliderModule } from 'primeng/slider';
import { Table, TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { TagModule } from 'primeng/tag';
import {Badge} from 'primeng/badge';
import {MatricesServices} from '../../Services/matrices/Matrices-services';

interface ExpandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-matrices',
  standalone: true,
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css'],
  imports: [
    TableModule,
    MultiSelectModule,
    SelectModule,
    InputIconModule,
    TagModule,
    InputTextModule,
    SliderModule,
    ProgressBarModule,
    ToggleButtonModule,
    ToastModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule,
    RippleModule,
    IconFieldModule,
    Badge
  ],
  providers: [ConfirmationService, MessageService , MatricesServices]
})
export class MatricesComponent implements OnInit {
  products!: any[];


  ngOnInit(): void {
    this.products =this.matricesServices.getProductsData()
  }


  constructor( private matricesServices:MatricesServices , private cd: ChangeDetectorRef) {}



  //rowClass(product: any) {
  //  return { '!bg-primary !text-primary-contrast': product.category === 'Fitness' };
  // }

  rowStyle(product: any) {
    if (product.etat === 0) {
      return { fontWeight: 'bold', fontStyle: 'italic' };
    }
    return {}
  }

  stockSeverity(product: any) {
    if (product.quantity === 0) return 'danger';
    else if (product.etat > 0 && product.etat < 10) return 'warn';
    else return 'success';
  }




  rowClass(product: any) {
    return undefined;
  }
}
