import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(
    value: string | undefined | null, 
    limit: number = 100,
    suffix: string = '...'
  ): string {
    if (!value) return '';
    return value.length > limit 
      ? value.substring(0, limit) + suffix 
      : value;
  }
}