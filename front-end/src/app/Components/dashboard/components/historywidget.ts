import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Update, UpdateService } from '../../service/update.service';

@Component({
  selector: 'app-history-widget',
  template: `<div class="card !mb-8">
        <div class="font-semibold text-xl mb-4">Recent Updates</div>
        <p-table [value]="updates" [paginator]="true" [rows]="5" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th>Level</th>
                    <th>Subject</th>
                    <th>Validation Status</th>
                    <th>Verification Status</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-updates>
                <tr>
                    <td style="width: 15%; min-width: 5rem;">{{ updates.level}}</td>
                    <td style="width: 15%; min-width: 5rem;">{{ updates.subject}}</td>
                    <td style="width: 15%; min-width: 5rem;">{{ updates.validation_status}}</td>
                    <td style="width: 15%; min-width: 5rem;">{{ updates.verification_status}}</td>
                </tr>
            </ng-template>
        </p-table>
    </div>`,
  providers: [UpdateService]
})
export class Historywidget implements OnInit {
  updates: Update[] = [];

  constructor(private updateService: UpdateService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.updates = this.updateService.getUpdatesData();
    this.cd.detectChanges();
  }



}
