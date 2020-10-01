import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-player',
  templateUrl: './select-player.component.html',
  styleUrls: ['./select-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectPlayerComponent {

  @Input() player!: string;
  @Input() disabledAvatar!: string;
  @Output() selectedAvatar: EventEmitter<string> = new EventEmitter();

  avatars = [
    '🐁',
    '🐈',
    '🦁',
    '🐆',
    '🐎',
    '🦄',
    '🐖',
    '🐇',
    '🐧',
    '🐬',
    '🐙',
    '🐞',
    '🌻',
    '🌵',
    '🌈',
    '🚒',
    '🚓',
    '🎄',
    '⛵',
    '🍭',
    '🚀',
    '🚜',
    '🌞']

  constructor() { }

}
