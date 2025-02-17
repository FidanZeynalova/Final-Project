import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5050/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users/',
        }),
        getUserById: builder.query({
            query: (id) => `users/${id}`,
        }),
        registerUser: builder.mutation({
            query: (newUser) => ({
                url: 'users/register',
                method: 'POST',
                body: newUser,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }),
        }),
        userLogin: builder.mutation({
            query: (newUser) => ({
                url: 'users/login',
                method: 'POST',
                body: newUser,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }),
        }),
        confirmPasswordUser: builder.mutation({
            query: (confirmData) => ({
                url: 'users/confirm',
                method: 'POST',
                body: confirmData,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }),
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useUserLoginMutation,
    useRegisterUserMutation,
    useConfirmPasswordUserMutation,
} = usersApi;
