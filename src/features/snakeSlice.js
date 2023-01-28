import {createSlice} from "@reduxjs/toolkit";

const snakeReducer=createSlice({
    name: "snake",
    initialState:{
        value: [{left:10,top:10}],
        max: 5,
        gold: {left:2,top:10},
        die: false
    },
    reducers:{
        reset:(state)=>{
            state.gold= {left:2,top:10};
            state.value=[{left:10,top:10}];
            state.die=false;
            state.max=5;
        },
        move: (state,action)=>{
           // setInterval(function(){
               /* state.value[0].left+=action.payload.x;
                state.value[0].top+=action.payload.y;*/
                const hossz=state.value.length-1;
                state.value.push({left:state.value[hossz].left+action.payload.x,top:state.value[hossz].top+action.payload.y});
                state.value=[...state.value];
                if(hossz>=state.max){
                    state.value.shift();
                }
                if(state.value[hossz].left==state.gold.left&&state.value[hossz].top==state.gold.top){
                    state.max+=1;
                    state.gold= {left:Math.floor(Math.random() * 20),top:Math.floor(Math.random() * 20)}
                }
                if(state.value[hossz].left<0||state.value[hossz].left>19||state.value[hossz].top<0||state.value[hossz].top>19){
                    state.die=true;
                }else{
                    const hit=state.value.findIndex(function(item,index){
                        return item.left==state.value[hossz].left && item.top==state.value[hossz].top && index!=hossz
                    });
                    if(hit!=-1){
                        state.die=true;
                    }
                }
           // },1000);
            
            /*state.value=[{left:11,top:11}]
            state.value=[...state.value];*/
        }
    }
})

export default snakeReducer.reducer;
export const {reset,move}=snakeReducer.actions;