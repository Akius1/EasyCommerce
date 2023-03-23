import { auctionDataApi } from './apiServices';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
  reducer: {
    [auctionDataApi.reducerPath]: auctionDataApi.reducer,
  },
    
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(auctionDataApi.middleware),
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch