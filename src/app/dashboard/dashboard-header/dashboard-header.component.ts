import { Component, EventEmitter, Output } from '@angular/core';
import { MAJOR_VERSION, MINOR_VERSION, PATCH_VERSION } from 'src/app/utils/constants/version.const';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  onToggleSidenav() {
    this.toggleSidenav.emit();
  }

  onSearch(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    console.log('Recherche:', inputElement.value);
  }

  getVersion(): string {
    return `Version ${MAJOR_VERSION}.${MINOR_VERSION}.${PATCH_VERSION}`;
  }

}
