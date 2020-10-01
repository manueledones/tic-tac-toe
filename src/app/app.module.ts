import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmojiPipe } from './emoji.pipe';
import { PlayComponent } from './play/play.component';
import { SelectPlayerComponent } from './select-player/select-player.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPlayerComponent,
    PlayComponent,
    EmojiPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
