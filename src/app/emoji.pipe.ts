import { Pipe, PipeTransform } from '@angular/core';
import { Player, Sign, Winner } from './play/play.component';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  player1 = '🐁'
  player2 = '🐈';

  transform(value: Player | Winner | Sign, player1: string, player2: string): string {
    if (!value) {
      return '';
    }

    const p1 = player1 ?? player1;
    const p2 = player2 ?? player2;
    return {
      'X': p1,
      'O': p2,
      'XO': `${p1}${p2}`
    }[value];
  }

}
