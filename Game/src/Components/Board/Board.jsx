import Boxes from '../Boxes/Boxes';
import { useState } from 'react';

export default function Board() {
    const [squares, setSquares] = useState(Array(49).fill(null));
    const [redIsNext, setRedIsNext] = useState(true);
    const red = <div className='red'></div>;
    const blue = <div className='blue'></div>;
    function handleClick(i){
        const nextSquares = squares.slice()

        if (nextSquares[i] || calculateWinner(squares)){
            return;
        }

        nextSquares[i] = redIsNext === true ? red : blue;
            
        setSquares(nextSquares);
        setRedIsNext(!redIsNext)
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2, 3, 4],
            [1, 2, 3, 4, 5],
            [2, 3, 4, 5, 6],
            // Row 1
            [7, 8, 9, 10, 11],
            [8, 9, 10, 11, 12],
            [9, 10, 11, 12, 13],
            // Row 2
            [14, 15, 16, 17, 18],
            [15, 16, 17, 18, 19],
            [16, 17, 18, 19, 20],
            // Row 3
            [21, 22, 23, 24, 25],
            [22, 23, 24, 25, 26],
            [23, 24, 25, 26, 27],
            // Row 4
            [28, 29, 30, 31, 32],
            [29, 30, 31, 32, 33],
            [30, 31, 32, 33, 34],
            // Row 5
            [35, 36, 37, 38, 39],
            [36, 37, 38, 39, 40],
            [37, 38, 39, 40, 41],
            // Row 6
            [42, 43, 44, 45, 46],
            [43, 44, 45, 46, 47],
            [44, 45, 46, 47, 48],

            // COLUMNS
            [0, 7, 14, 21, 28],
            [7, 14, 21, 28, 35],
            [14, 21, 28, 35, 42],
            // Column 1
            [1, 8, 15, 22, 29],
            [8, 15, 22, 29, 36],
            [15, 22, 29, 36, 43],
            //  Column 2
            [2, 9, 16, 23, 30],
            [9, 16, 23, 30, 37],
            [16, 23, 30, 37, 44],
            // Column 3
            [3, 10, 17, 24, 31],
            [10, 17, 24, 31, 38],
            [17, 24, 31, 38, 45],
            // Column 4
            [4, 11, 18, 25, 32],
            [11, 18, 25, 32, 39],
            [18, 25, 32, 39, 46],
            // Column 5
            [5, 12, 19, 26, 33],
            [12, 19, 26, 33, 40],
            [19, 26, 33, 40, 47],
            // Column 6
            [6, 13, 20, 27, 34],
            [13, 20, 27, 34, 41],
            [20, 27, 34, 41, 48],
            // Column 7
            
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c, d, e] = lines[i];
            console.log(squares[a]);
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d] && squares[a] === squares[e]){
                return squares[a];
             }
        }
        return null;
    }

  return (
    <>
      <div>
        <Boxes value={squares[0]} onSquareClick={()=>handleClick(0)}/>
        <Boxes value={squares[1]} onSquareClick={()=>handleClick(1)}/>
        <Boxes value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        <Boxes value={squares[3]} onSquareClick={()=>handleClick(3)}/>
        <Boxes value={squares[4]} onSquareClick={()=>handleClick(4)}/>
        <Boxes value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        <Boxes value={squares[6]} onSquareClick={()=>handleClick(6)}/>
      </div>
      <div>
        <Boxes value={squares[7]} onSquareClick={()=>handleClick(7)}/>
        <Boxes value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        <Boxes value={squares[9]} onSquareClick={()=>handleClick(9)}/>
        <Boxes value={squares[10]} onSquareClick={()=>handleClick(10)}/>
        <Boxes value={squares[11]} onSquareClick={()=>handleClick(11)}/>
        <Boxes value={squares[12]} onSquareClick={()=>handleClick(12)}/>
        <Boxes value={squares[13]} onSquareClick={()=>handleClick(13)}/>
      </div>
      <div>
        <Boxes value={squares[14]} onSquareClick={()=>handleClick(14)}/>
        <Boxes value={squares[15]} onSquareClick={()=>handleClick(15)}/>
        <Boxes value={squares[16]} onSquareClick={()=>handleClick(16)}/>
        <Boxes value={squares[17]} onSquareClick={()=>handleClick(17)}/>
        <Boxes value={squares[18]} onSquareClick={()=>handleClick(18)}/>
        <Boxes value={squares[19]} onSquareClick={()=>handleClick(19)}/>
        <Boxes value={squares[20]} onSquareClick={()=>handleClick(20)}/>
      </div>
      <div>
        <Boxes value={squares[21]} onSquareClick={()=>handleClick(21)}/>
        <Boxes value={squares[22]} onSquareClick={()=>handleClick(22)}/>
        <Boxes value={squares[23]} onSquareClick={()=>handleClick(23)}/>
        <Boxes value={squares[24]} onSquareClick={()=>handleClick(24)}/>
        <Boxes value={squares[25]} onSquareClick={()=>handleClick(25)}/>
        <Boxes value={squares[26]} onSquareClick={()=>handleClick(26)}/>
        <Boxes value={squares[27]} onSquareClick={()=>handleClick(27)}/>
      </div>
      <div>
        <Boxes value={squares[28]} onSquareClick={()=>handleClick(28)}/>
        <Boxes value={squares[29]} onSquareClick={()=>handleClick(29)}/>
        <Boxes value={squares[30]} onSquareClick={()=>handleClick(30)}/>
        <Boxes value={squares[31]} onSquareClick={()=>handleClick(31)}/>
        <Boxes value={squares[32]} onSquareClick={()=>handleClick(32)}/>
        <Boxes value={squares[33]} onSquareClick={()=>handleClick(33)}/>
        <Boxes value={squares[34]} onSquareClick={()=>handleClick(34)}/>
      </div>
      <div>
        <Boxes value={squares[35]} onSquareClick={()=>handleClick(35)}/>
        <Boxes value={squares[36]} onSquareClick={()=>handleClick(36)}/>
        <Boxes value={squares[37]} onSquareClick={()=>handleClick(37)}/>
        <Boxes value={squares[38]} onSquareClick={()=>handleClick(38)}/>
        <Boxes value={squares[39]} onSquareClick={()=>handleClick(39)}/>
        <Boxes value={squares[40]} onSquareClick={()=>handleClick(40)}/>
        <Boxes value={squares[41]} onSquareClick={()=>handleClick(41)}/>
      </div>
      <div>
        <Boxes value={squares[42]} onSquareClick={()=>handleClick(42)}/>
        <Boxes value={squares[43]} onSquareClick={()=>handleClick(43)}/>
        <Boxes value={squares[44]} onSquareClick={()=>handleClick(44)}/>
        <Boxes value={squares[45]} onSquareClick={()=>handleClick(45)}/>
        <Boxes value={squares[46]} onSquareClick={()=>handleClick(46)}/>
        <Boxes value={squares[47]} onSquareClick={()=>handleClick(47)}/>
        <Boxes value={squares[48]} onSquareClick={()=>handleClick(48)}/>
      </div>
     
    </>
  );
}
