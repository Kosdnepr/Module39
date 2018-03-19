import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdToUsernamePipe } from '../id-to-username.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IdToUsernamePipe],
  exports: [IdToUsernamePipe]
})
export class SharedModule { }
