import { useState } from 'react'
import './index.css'

function Square({value,onClickAct}){
  return(
    <button className='btn' onClick={onClickAct} >{value}</button>
  );
}

export default function Board(){
  let [xIsNext,setXIsNext]=useState(true);
  let [squares,setSquares]=useState(Array(9).fill(null));
  function handleClick(i){
    if(squares[i]!==null|| checkWinner(squares)){
      return;
    }
    const nextSquares=squares.slice();
    if(xIsNext){
      nextSquares[i]="x";
    }
    else{
      nextSquares[i]="0";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  } 

  return(
    <div className='main-body'>
       <div className="status">{status}</div>
     <div className='board-row'>
      <Square value={squares[0]} onClickAct={()=>handleClick(0)}/>
      <Square value={squares[1]} onClickAct={()=>handleClick(1)}/>
      <Square value={squares[2]} onClickAct={()=>handleClick(2)}/>
     </div>
     <div className='board-row'>
      <Square value={squares[3]} onClickAct={()=>handleClick(3)}/>
      <Square value={squares[4]} onClickAct={()=>handleClick(4)}/>
      <Square value={squares[5]} onClickAct={()=>handleClick(5)}/>
     </div>
     <div className='board-row'>
      <Square value={squares[6]} onClickAct={()=>handleClick(6)}/>
      <Square value={squares[7]} onClickAct={()=>handleClick(7)}/>
      <Square value={squares[8]} onClickAct={()=>handleClick(8)}/>
     </div>
    </div>
  );
}

function checkWinner(squares){
  const winnigWays=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<winnigWays.length;i++){
  const [a,b,c]=winnigWays[i];
   if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
   {
    return squares[a];
   }
 }
 return null;
   
}