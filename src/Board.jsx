import { useState } from "react"

export function Square({value , onSqureClick}){
  return  <button className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg" onClick={onSqureClick}>{value} </button>
}

function Board() {
  const [Squares, setSquares]=useState(Array(9).fill(null));
  const [IsXNext,setIsXNext]=useState(true);

  const winner =calculateWinner(Squares);
  let status;
  if(winner){
    status=`winner: ${winner}`;

  }else{
    status='Next player ' + (IsXNext ? 'X' : 'O')
  }


  function handleClick(i){
    if(Squares[i]){
      return;
    }
    
    const nextSquares=Squares.slice();
        if(IsXNext){
           nextSquares[i]="X"
        }else{
           nextSquares[i]="O"
        }
    setSquares(nextSquares);
    setIsXNext(!IsXNext);


  }


  return (
    <>
    <div>{status}</div>
    <div className="flex">    
       <Square value={Squares[0]} onSqureClick={()=>handleClick(0)}/>
       <Square value={Squares[1]} onSqureClick={()=>handleClick(1)}/>
       <Square value={Squares[2]} onSqureClick={()=>handleClick(2)}/>

    </div>
    <div className="flex">    
    <Square value={Squares[3]} onSqureClick={()=>handleClick(3)}/>
       <Square value={Squares[4]} onSqureClick={()=>handleClick(4)}/>
       <Square value={Squares[5]} onSqureClick={()=>handleClick(5)}/>

    </div>
    <div className="flex">    
    <Square value={Squares[6]} onSqureClick={()=>handleClick(6)}/>
       <Square value={Squares[7]} onSqureClick={()=>handleClick(7)}/>
       <Square value={Squares[8]} onSqureClick={()=>handleClick(8)}/>

    </div> 
  
      
    </>
  )
}

export default Board

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}