import { Component, OnInit, signal } from '@angular/core';
import { GroupService } from '../../Services/group/group.service';
import { DataView } from 'primeng/dataview';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group',
  standalone: true,
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], // Correction ici
  imports: [
    DataView,
    Tag,
    Rating,
    ButtonModule,
    CommonModule,
    SelectButton,
    FormsModule
  ],
})
export class GroupComponent implements OnInit {
  layout: 'list' | 'grid' = 'list'; // Type correctement défini
  groups = signal<any[]>([]); // Préciser le type
  options = ['list', 'grid'];

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    // S'abonner à l'observable pour obtenir les groupes
    this.groupService.getGroups().subscribe((data: any[]) => {
      this.groups.set([...data.slice(0, 12)]);
    });
  }

  getSeverity(group: any) {
    return group.inventoryStatus === 'OUTOFSTOCK' ? 'danger' : 'success';
  }
}
