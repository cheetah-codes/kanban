import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

const module = "/boards";

export const boardEndpoints = {
  endpoints: (builder: EndpointBuilder<BaseQueryFn, any, any>) => ({
    getBoards: builder.query({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}`,
        method: "GET",
      }),
    }),
    getBoard: builder.query({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "GET",
      }),
    }),
    createBoard: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}`,
        method: "POST",
        body: requestBody,
      }),
    }),
    updateBoard: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "PUT",
        body: requestBody,
      }),
    }),
    deleteBoard: builder.mutation({
      query: (requestBody: Record<string, string>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "DELETE",
      }),
    }),
  }),
};
