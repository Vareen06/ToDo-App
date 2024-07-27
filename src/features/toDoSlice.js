
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  inputValue:'',
  update:{
    isupdate:false,
    isupdateIndex:null}
}

export const toDoSlice = createSlice({
  name: 'ToDo App',
  initialState,
  reducers: {
    addItem: (state,action) => {
      console.log(action.payload)
      if(state.update.isupdate){
        const updatedValue = [...state.value];
        updatedValue.splice(state.update.isupdateIndex,1,action.payload);
        state.value=updatedValue;
        console.log(state.value)
        state.update.isupdate=false;
        state.update.isupdateIndex=null;
      }
      else{
        state.value= [...state.value,action.payload];
      }
      state.inputValue='';
    },
    handleinputChange:(state,action) =>{
        state.inputValue = action.payload
    },
    deleteItem: (state,action) => {
        state.value.splice(action.payload,1)
    },
    updateItem: (state, action) => {
        state.inputValue = action.payload.data
        // state.inputValue=state.value
        state.update={
            isupdate: true,
            isupdateIndex: action.payload.index
        }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addItem, deleteItem, updateItem, handleinputChange } = toDoSlice.actions

export default toDoSlice.reducer