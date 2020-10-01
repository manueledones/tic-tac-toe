import { Component, HostBinding, Input } from '@angular/core';
import { Cell, Player, Winner } from '../datamodel';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent {

  @Input() player1!: string;
  @Input() player2!: string;
  @HostBinding("style.--player1")

  boardSize = 3;
  boardDimension = this.boardSize * this.boardSize;
  player!: Player;
  state!: Cell[];
  winner: Winner | undefined;

  possibleWinnerPositionsIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]];

  constructor() {
    this.startNewGame();
  }

  startNewGame(): void {
    this.player = 'X';
    this.state = [...new Array(this.boardDimension)].map(() => ({ sign: undefined }));
    this.winner = undefined;
  }

  move(index: number): void {
    this.state[index].sign = this.player;
    this.player = this.player === 'X'
      ? 'O'
      : 'X';

    const winningCoordinates = this.possibleWinnerPositionsIndexes.find(([x1, x2, x3]) => this.sameSign(x1, x2, x3));

    if (winningCoordinates) {
      this.winner = this.state[winningCoordinates[0]].sign;
    }

    const moreMovesAreAvailable = this.state.some(x => !x.sign);
    if (!moreMovesAreAvailable && !this.winner) {
      this.winner = 'XO';
    }
  }

  sameSign(index1: number, index2: number, index3: number): boolean {
    return this.state[index1].sign === this.state[index2].sign &&
      this.state[index2].sign === this.state[index3].sign &&
      !!this.state[index1].sign;
  }
}
