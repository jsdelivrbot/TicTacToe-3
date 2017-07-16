import React, { Component } from 'react'
import Square from '../Square'

class Board extends Component {

  constructor() {
      super()
      this.state = {
        squares: Array(9).fill(null),
        isXNext: true,
      }
  }

  displaySquare(i) {
    return (
      <Square
        index = {this.state.squares[i]}
        onClick = {() => this.clickFunction(i)}
        />
    );
  }

  winner(squares) {
    const winnerLines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]
    for(let i = 0; i < winnerLines.length; i++) {
      const [square1,square2,square3] = winnerLines[i]
      if(squares[square1] && squares[square1] === squares[square2] && squares[square1] === squares[square3]) {
        return squares[square1]
      }
    }
    return null
  }

  clickFunction(i) {
      const newSquares = this.state.squares.slice()
      console.log(newSquares)

      if(this.winner(newSquares) || newSquares[i]){

        return
      }
      newSquares[i] = this.state.isXNext ? 'X' : 'O'
      this.setState({
        squares:newSquares,
        isXNext: !this.state.isXNext
      })
  }


  render() {
    const winner1 = this.winner(this.state.squares)
    let status
    if(winner1) {
      status = 'Winner is: ' + winner1
    }
    else {
      status = 'Next Turn : ' + (this.state.isXNext ? 'X' : 'O')
    }

    return (
      <div>
        <div className="status"> {status} </div>
        <div className = "board-row">
        {this.displaySquare(0)}
        {this.displaySquare(1)}
        {this.displaySquare(2)}
        </div>
        <div className = "board-row">
        {this.displaySquare(3)}
        {this.displaySquare(4)}
        {this.displaySquare(5)}
        </div>
        <div className = "board-row">
        {this.displaySquare(6)}
        {this.displaySquare(7)}
        {this.displaySquare(8)}
        </div>
        <button onClick = {() => this.setState({squares: Array(9).fill(null), isXNext: true})}>Start</button>
      </div>
    );
  }
}

export default Board
