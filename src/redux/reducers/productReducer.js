import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setProducts: (state, action) => {
            state.items = action.payload;
            state.status = 'succeeded';
        },
        addProducs(state, action) {
            state.items.push(action.payload);
            state.status = 'succeeded';
        },
    },
});

export const { setProducts, addProducs } = productsSlice.actions;
export default productsSlice.reducer