import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://demo0198957.mockable.io/page";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGenreMovies: builder.query({
      query: (page) => ({
        url: baseUrl+page,
      }),
    }),
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGenreMoviesQuery } = apiSlice;
