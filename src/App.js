import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {reset,move} from "./features/snakeSlice";

const Help=()=>{
  const snake=useSelector(state=>state.snake.value);
  const die=useSelector(state=>state.snake.die);
  const dispatch=useDispatch();
  return <div style={{position:"absolute",top:600}}>
    {die?clearInterval(process):""}
  </div>
}
var process;
const Controller=()=>{
  
  const dispatch=useDispatch();
  const die=useSelector(state=>state.snake.die);
  die?clearInterval(process):timer();
  return die==true?<button onClick={function(){dispatch(reset())}}>Új játék</button>:<div style={{position:"absolute",top:440}}>
    <button onClick={function(e){clearInterval(process);timer({x:0,y:-1})}}>Top</button><br/>
    <button onClick={function(e){clearInterval(process);timer({x:-1,y:0})}}>Left</button>
    <button onClick={function(e){clearInterval(process);timer({x:1,y:0})}}>Right</button><br/>
    <button onClick={function(e){clearInterval(process);timer({x:0,y:1})}}>Bottom</button>
  </div>
  function timer(pos){
    process=setInterval(()=>{dispatch(move(pos))},500);
  }  
}


const Field=()=>{
  const snake=useSelector(state=>state.snake.value);
  const gold=useSelector(state=>state.snake.gold);
  return [...Array(20)].map(function(item,index){
    return [...Array(20)].map(function(item2,index2){
      return <div style={{position:"absolute",width:20,height:20,left:index2*21,top:index*21,backgroundColor:snake.findIndex(function(pos){ return pos.left==index2 && pos.top==index })!=-1?"red":index2==gold.left&&index==gold.top?"yellow":"blue"}}></div>
    })
  })

}

function App() {
  return (
    <div className="App">
      <Field/>
      <Controller/>
      {/* <Help/> */}
    </div>
  );
}

export default App;
