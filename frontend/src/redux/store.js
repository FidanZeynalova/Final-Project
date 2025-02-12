import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { recipesApi } from './Slices/recipesSlices'
import { usersApi } from './Slices/userSlices'

export const store = configureStore({
    reducer: {
        [recipesApi.reducerPath]: recipesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipesApi.middleware, usersApi.middleware),
})

setupListeners(store.dispatch)