import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-calendar',
  standalone: false,
  templateUrl: './app-calendar.component.html',
  styleUrl: './app-calendar.component.scss'
})
export class CalendarPopupComponent {
  @Output() dateSelected = new EventEmitter<Date>();
  visible = false;
  selectedDate: Date | null = null;
  currentDate = new Date();
  dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  days: Date[] = [];

  get currentMonth(): string {
    return this.currentDate.toLocaleString('default', { month: 'long' });
  }

  get currentYear(): number {
    return this.currentDate.getFullYear();
  }

  constructor() {
    this.generateCalendar();
  }

  toggle(): void {
    this.visible = !this.visible;
  }

  generateCalendar(): void {
    this.days = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // Get first day of month
    const firstDay = new Date(year, month, 1);
    // Get last day of month
    const lastDay = new Date(year, month + 1, 0);
    // Get starting day (0-6)
    const startDay = firstDay.getDay();

    // Add empty days for start of week
    for (let i = 0; i < startDay; i++) {
      this.days.push(new Date(year, month, -i));
    }

    // Add days of month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      this.days.push(new Date(year, month, i));
    }
  }

  prevMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateCalendar();
  }

  selectDate(day: Date): void {
    this.selectedDate = day;
    this.dateSelected.emit(day);
    this.visible = false;
  }

  isSelected(day: Date): boolean {
    if (!this.selectedDate) return false;
    return (
      day.getDate() === this.selectedDate.getDate() &&
      day.getMonth() === this.selectedDate.getMonth() &&
      day.getFullYear() === this.selectedDate.getFullYear()
    );
  }
}
