import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postService = createApi({
  reducerPath: "postService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    createPost: builder.mutation({
      query: (newPost) => {
        return {
          url: `posts`,
          method: "POST",
          body: JSON.stringify(newPost),
          headers: {
            "Content-type": "applicaion/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const { useGetAllPostQuery, useCreatePostMutation } = postService;
