import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { getQueryStringParams } from "../../../utils/common";

const module = "/tasks";

export const taskEndpoints = {
  endpoints: (builder: EndpointBuilder<BaseQueryFn, any, any>) => ({
    getTaskColumns: builder.query({
      query: (requestBody: Record<string, any>) => {
        const queryStringParamas = { columnPublicId: requestBody?.columnPublicId };
        const queryParams = getQueryStringParams(queryStringParamas);
        return {
          url: `${module}?${queryParams}`,
          method: "GET",
        };
      },
    }),
    getTask: builder.query({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "GET",
      }),
    }),
    createTask: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}`,
        method: "POST",
        body: requestBody,
      }),
    }),
    updateTask: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "PUT",
        body: requestBody,
      }),
    }),
    deleteTask: builder.mutation({
      query: (requestBody: Record<string, string>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "DELETE",
      }),
    }),
  }),
};
