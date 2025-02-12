import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050/' }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => `users/`,
        }),
        getUserById: builder.query({
            query: (id) => `users/${id}`,
        }),
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: "users/register",
                method: "POST",
                body: newUser,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }

            })
        }),
        loginUser: builder.mutation({
            query: (newUser) => ({
                url: "users/login",
                method: "POST",
                body: newUser,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }

            })
        }),

    }),
})

export const { useGetUsersQuery, useGetUserByIdQuery,useLoginUserMutation,useRegisterUserMutation } = usersApi