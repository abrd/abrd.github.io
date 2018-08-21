import { NgModule } from '@angular/core';
import { NgxMdModule } from 'ngx-md';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TileComponent } from './tile/tile.component';
import { ReaderComponent } from './reader/reader.component';
import { TilecardComponent, MyDialog } from './tilecard/tilecard.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatDialogModule,
    NgxMdModule.forRoot()
  ],
  entryComponents: [TilecardComponent, MyDialog, MyDialogComponent],
  declarations: [FooterComponent, HeaderComponent, TileComponent, ReaderComponent, TilecardComponent, MyDialog, MyDialogComponent],
  exports: [FooterComponent, HeaderComponent, TileComponent, ReaderComponent, TilecardComponent ]
})
export class SharedModule { }
