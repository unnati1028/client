import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { httpInterceptors } from './interceptors';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [httpInterceptors],
})
export class SharedModule {}
