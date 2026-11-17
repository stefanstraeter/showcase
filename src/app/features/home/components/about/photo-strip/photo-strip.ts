import { Component } from '@angular/core';
import { PHOTOS } from '@features/home/model/constants/photos';
import { Photo } from '@features/home/model/interfaces/photo';

@Component({
  imports: [],
  selector: 'app-photo-strip',
  styleUrl: './photo-strip.scss',
  templateUrl: './photo-strip.html',
})
export class PhotoStrip {
  readonly photos: Photo[] = PHOTOS;
}
