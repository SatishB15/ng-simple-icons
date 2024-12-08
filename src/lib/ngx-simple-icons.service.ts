import { Injectable } from '@angular/core';
import * as SimpleIcons from 'simple-icons';

@Injectable({
  providedIn: 'root'
})
export class NgxSimpleIconsService {

  // Generate the list of icon names from SimpleIcons by stripping the
  // 'si' prefix and converting to lowercase
  iconNames: string[] = Object.keys(SimpleIcons).map(key =>
    key.slice(2).toLowerCase() // Removes 'si' and converts to lowercase
  );

  /**
   * @description Formats the icon name by adding 'si' and capitalizing the first letter.
   * @param name The simplified name of the icon (e.g., 'angular', 'dotnet').
   * @returns The correctly formatted name (e.g., 'siAngular', 'siDotnet').
   */
  formatKeyName(name: string): string {
    return `si${name.charAt(0).toUpperCase() + name.slice(1)}`;
  }

  /**
   * @description Method to check if an icon name is valid.
   * @param name The simplified name of the icon.
   * @returns True if the icon name exists in SimpleIcons, otherwise false.
   */
  isIconPresent(name: string): boolean {
    const formattedName = this.formatKeyName(name);
    return formattedName in SimpleIcons;
  }
}
