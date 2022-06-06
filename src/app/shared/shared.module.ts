import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { httpInterceptors } from './interceptors';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [httpInterceptors, AuthGuard],
})
export class SharedModule {}
