import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { recipesApi } from './Slices/recipesSlices'
import { usersApi } from './Slices/userSlices'
import { chefsApi } from './Slices/chefSlices'

export const store = configureStore({
    reducer: {
        [recipesApi.reducerPath]: recipesApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [chefsApi.reducerPath]: chefsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipesApi.middleware, usersApi.middleware, chefsApi.middleware),
})

setupListeners(store.dispatch)