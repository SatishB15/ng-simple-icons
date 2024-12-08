import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as SimpleIcons from 'simple-icons';
import { SimpleIcon } from 'simple-icons';
import { NgxSimpleIconsService } from './ngx-simple-icons.service';

// Type representing possible icon names (for type safety)
type IconName = keyof typeof SimpleIcons;

@Component({
  selector: 'ngx-simple-icon',
  standalone: false,
  template: `
  <ng-container *ngIf="icon">
      <svg
        role="img"
        [attr.viewBox]="'0 0 24 24'"
        [attr.width]="size"
        [attr.height]="size"
        [style.fill]="color || icon.hex"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path [attr.d]="icon.path"></path>
    </svg>
  </ng-container>
  <p *ngIf="!icon" style="color: red;">Icon "{{ name }}" not found.</p>`,
  styles: [':host { display: inline-block; }'],
})
export class NgxSimpleIconsComponent implements OnChanges {
  @Input({ required: true }) name!: string;
  @Input() size: string = '24';
  @Input() color?: string = 'black';
  protected icon?: SimpleIcon | null = null;
  protected errorMessage = '';
  private iconService = inject(NgxSimpleIconsService);

  ngOnChanges(): void {
    if (!this.name) {
      this.errorMessage = 'Please provide the icon name.';
      return;
    }

    if (!this.iconService.isIconPresent(this.name)) {
      this.errorMessage = `Invalid icon name: "${this.name}".`;
      return;
    }

    const iconKey = this.iconService.formatKeyName(this.name);
    this.icon = SimpleIcons[iconKey as IconName] as SimpleIcon;

    if (!this.icon) {
      this.errorMessage = `Icon "${this.name}" not found in simple-icons.`;
    }
  }
}
