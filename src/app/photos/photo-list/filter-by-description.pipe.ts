import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo.model';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescriptionPipe implements PipeTransform{

  transform(photos: Photo[], descriptionQuery: string) {
    descriptionQuery = descriptionQuery.
      trim().
      toLocaleLowerCase();

    if(descriptionQuery) {
      return photos.filter(photo =>
        photo.description.toLocaleLowerCase().includes(descriptionQuery)
      );
    } else {
      return photos;
    }
  }

}
