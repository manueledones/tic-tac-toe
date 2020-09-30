import { Pipe, PipeTransform } from '@angular/core';
import { Player, Sign, Winner } from './app.component';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  emojiValues: { [key in Player | Winner | Sign]: string } = {
    'X': '🐁',
    'O': '🐈',
    'XO': '🐁 🐈'
  }

  transform(value: Player | Winner | Sign): string {
    return this.emojiValues[value];
  }

}
