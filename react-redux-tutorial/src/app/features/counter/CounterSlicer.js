import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  count: 0,
};

export const CounterSlice = createSlice(
    {
        name: 'counter',
        initialState:initialValues,
        reducers:{
            increment: (state,actions) => {
                state.count += actions.payload
            },
            decrement: (state,actions) => {
                state.count -= actions.payload
            }
        }
    }
)

export const {increment, decrement} = CounterSlice.actions
export default CounterSlice.reducer