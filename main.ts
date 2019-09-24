import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {TabGroupDynamicExample} from './app/tab-group-dynamic-example';
import {HeroJobAdComponent} from './app/hero-job-ad.component';
import {HeroProfileComponent} from './app/hero-profile.component';
import {AdBannerComponent} from './app/ad-banner.component';
import { AdService }  from './app/ad.service';
import {AdDirective} from './app/ad.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [AdService],
  entryComponents: [TabGroupDynamicExample, HeroProfileComponent, HeroJobAdComponent],
  declarations: [TabGroupDynamicExample, HeroProfileComponent, HeroJobAdComponent, AdBannerComponent, AdDirective],
  bootstrap: [TabGroupDynamicExample]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */