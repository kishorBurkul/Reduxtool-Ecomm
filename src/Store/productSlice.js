import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState ={
    data:[],
    status:StatusCode.IDEL
}

const productSlice=createSlice({
         name:"products",
         initialState,
         reducers:{
            // fetchProducts(state , action){
            //    state.data = action.payload;

            // }

         },
         extraReducers:(builder)=>{
             builder
             .addCase(getProducts.pending ,(state ,action)=>{
                state.data = action.payload;
                state.status = StatusCode.LOADING

             })

             .addCase(getProducts.fulfilled ,(state ,action)=>{
                state.data = action.payload;
                state.status = StatusCode.IDEL
             })

             .addCase(getProducts.rejected ,(state ,action)=>{
                state.data = action.payload;
                state.status = StatusCode.ERROR
             })

         }

})

export const {fetchProducts} =productSlice.actions;
export default productSlice.reducer;



export const getProducts = createAsyncThunk("products/get",async ()=>{
    const data = await  fetch("https://fakestoreapi.com/products")
        const reslut = await data.json();
        return reslut
})

// export function getProducts(){
//     return async function getProductsThunk(dispatch , getState){
//         const data = await  fetch("https://fakestoreapi.com/products")
//         const reslut = await data.json();
//         dispatch(fetchProducts(reslut));
//     }
// }