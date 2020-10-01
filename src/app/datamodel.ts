
export type X = 'X';
export type O = 'O';
export type Sign = X | O | undefined;
export type Player = X | O;
export type Winner = Player | 'XO';
export interface Cell {
    sign: Sign
}