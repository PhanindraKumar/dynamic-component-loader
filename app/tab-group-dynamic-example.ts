import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';

/**
 * @title Tab group with dynamically changing tabs
 */
@Component({
  selector: 'tab-group-dynamic-example',
  templateUrl: 'tab-group-dynamic-example.html',
  styleUrls: ['tab-group-dynamic-example.css'],
})
export class TabGroupDynamicExample implements OnInit {
  tabs = ['First', 'Second', 'Third'];
  ads: AdItem[];
  selected = new FormControl(0);

  constructor(private adService: AdService) {}

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */