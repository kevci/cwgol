import { BoardSize } from '../Types';

export default class Board {
  board: Array<Boolean> = [];
  constructor(size: BoardSize) {
    this.board = Array<Boolean>(size.width * size.height);
  }
}