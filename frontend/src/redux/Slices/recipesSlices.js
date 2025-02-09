import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => `recipes/`,
        }),
        getRecipeById: builder.query({
            query: (id) => `recipes/${id}`,
        }),
        deleteRecipeById: builder.mutation({
            query: (id) => ({
                url: `recipes/${id}`,
                method: "DELETE"
            })
        }),
        createRecipe: builder.mutation({
            query: (newRecipe) => ({
                url: "recipes/",
                method: "POST",
                body: newRecipe,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }

            })
        }),
        updateRecipe: builder.mutation({
            query: ({ id, updatedRecipe }) => ({
                url: `recipes/${id}`,
                method: 'PUT',
                body: updatedRecipe,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }),
        })
    }),
})

export const { useGetRecipesQuery, useGetRecipeByIdQuery, useDeleteRecipeByIdMutation, useCreateRecipeMutation, useUpdateRecipeMutation } = recipesApi