import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chefsApi = createApi({
    reducerPath: 'chefsApi',
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
        getChefs: builder.query({
            query: () => "chefs"
        }),
        getChefById: builder.query({
            query: (id) => `chefs/${id}`
        }),
        createChef: builder.mutation({
            query: (formData) => ({
                url: "chefs/",
                method: "POST",
                body: formData,
            }),
        }),
        deleteChefById: builder.mutation({
            query: (id) => ({
                url: `chefs/${id}`,
                method: "DELETE",
            })
        }),
        updateChef: builder.mutation({
            query: ({ id, updatedChef }) => ({
                url: `chefs/${id}`,
                method: 'PUT',
                body: updatedChef,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'chefs', id }],
        }),
    })
})

export const {
    useGetChefsQuery,
    useGetChefByIdQuery,
    useCreateChefMutation,
    useDeleteChefByIdMutation,
    useUpdateChefMutation
} = chefsApi