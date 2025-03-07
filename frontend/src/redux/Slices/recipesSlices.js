import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const recipesApi = createApi({
    reducerPath: 'recipesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5050/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => "recipes"
        }),
        getRecipeById: builder.query({
            query: (id) => `recipes/${id}`
        }),
        createRecipe: builder.mutation({
            query: (formData) => ({
                url: "recipes/",
                method: "POST",
                body: formData,
            }),
        }),
        deleteRecipeById: builder.mutation({
            query: (id) => ({
                url: `recipes/${id}`,
                method: "DELETE",
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
            invalidatesTags: (result, error, { id }) => [{ type: 'Recipes', id }],
        }),
    })
})

export const {
    useGetRecipesQuery,
    useGetRecipeByIdQuery,
    useCreateRecipeMutation,
    useDeleteRecipeByIdMutation,
    useUpdateRecipeMutation
} = recipesApi