import { createSlice } from "@reduxjs/toolkit";

export interface ToggleState {
    toggleCart: boolean;
}
const INITIAL_STATE = {
    toggleCart: false
}


const toggleSlice = createSlice({
    name: "toggle",
    initialState: INITIAL_STATE,
    reducers: {
        toggleCart(state) {
            state.toggleCart = !state.toggleCart
        }
    }
})

export const { toggleCart } = toggleSlice.actions

export const toggleReducer = toggleSlice.reducer