import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  template: `
        <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-history-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-validation-stream-widget />
                <app-notifications-widget />
            </div>
        </div>
    `
})
export class Dashboard {}
