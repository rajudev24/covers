import { baseApi } from "./baseApi";

const videoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Videos: build.query({
      query: (data) => ({
        url: ``,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useVideosQuery } = videoApi;
