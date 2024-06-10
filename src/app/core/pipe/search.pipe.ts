import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLowerCase();
        return items.filter(item => {

            const permissionName = item.login.toLowerCase();
            return permissionName.includes(searchText);
        });
    }
}