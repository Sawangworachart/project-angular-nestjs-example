import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroModule } from './ng-zorro.module';

/** @property Pipes */
const PIPES = [];

/** @property Modules */
const CORE_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];

/** @property NgZorro */
const NG_ZORRO = [NgZorroModule];

/** @property Directives */
const DIRECTIVES = [];

@NgModule({
  imports: [...CORE_MODULE, ...NG_ZORRO],
  exports: [...CORE_MODULE, ...NG_ZORRO],
})
export class SharedModule {}
