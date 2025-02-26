import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CommandModule } from '@angular/cli/src/command-builder/command-module';
import { Update, UpdateService } from '../../../service/update.service';

@Component({
  selector: 'app-history-widget',
  standalone: false,
  templateUrl: './history-widget.component.html',
  styleUrl: './history-widget.component.css',
})
export class HistoryWidgetComponent implements OnInit {
  updates: Update[] = []; // Declare updates as an array of Update

  constructor(private updateService: UpdateService) {}

  ngOnInit(): void {
    this.updateService.getUpdatesData().subscribe((data) => {
      this.updates = data; // Fetch data properly
    });
  }
}
