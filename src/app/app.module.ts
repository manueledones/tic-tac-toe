import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmojiPipe } from './emoji.pipe';
import { PlayComponent } from './play/play.component';
import { SelectPlayerComponent } from './select-player/select-player.component';


@NgModule({
  declarations: [
    AppComponent,
    EmojiPipe,
    SelectPlayerComponent,
    PlayComponent,
  ],
  providers: [
    EmojiPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
