import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  IconUser,
          IconFile,
          IconBarChart2,
          IconFileText,
          IconUserPlus,
          IconFilePlus,
          IconHeart } from 'angular-feather';

const icons = [
  IconUser,
  IconFile,
  IconBarChart2,
  IconFileText,
  IconUserPlus,
  IconFilePlus,
  IconHeart
];

@NgModule({
  exports: icons
})
export class IconsModule { }
