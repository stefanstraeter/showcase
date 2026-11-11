import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '@shared/components/button/button';

@Component({
  imports: [RouterLink, Button],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
