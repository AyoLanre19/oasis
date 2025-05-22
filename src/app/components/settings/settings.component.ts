import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  activeTab: 'general' | 'notification' = 'general';

  setTab(tab: 'general' | 'notification') {
    this.activeTab = tab;
  }

  isActiveTab(tab: 'general' | 'notification'): boolean {
    return this.activeTab === tab;
  }
}
