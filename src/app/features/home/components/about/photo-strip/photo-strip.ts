import { Component } from '@angular/core';
import { ABOUT_PHOTOS } from '@features/home/model/constants/about-photos';
import { AboutPhoto } from '@features/home/model/interfaces/about-photo';

@Component({
  imports: [],
  selector: 'app-photo-strip',
  styleUrl: './photo-strip.scss',
  templateUrl: './photo-strip.html',
})
export class PhotoStrip {
  readonly photos: AboutPhoto[] = ABOUT_PHOTOS;
}
