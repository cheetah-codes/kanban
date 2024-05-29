import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { getQueryStringParams } from "../../../utils/common";

const module = "/columns";

export const columnEndpoints = {
  endpoints: (builder: EndpointBuilder<BaseQueryFn, any, any>) => ({
    getBoardColumns: builder.query({
      query: (requestBody: Record<string, any>) => {
        const queryStringParamas = { boardPublicId: requestBody?.boardPublicId };
        const queryParams = getQueryStringParams(queryStringParamas);
        return {
          url: `${module}?${queryParams}`,
          method: "GET",
        };
      },
    }),
    getColumn: builder.query({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "GET",
      }),
    }),
    createColumn: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}`,
        method: "POST",
        body: requestBody,
      }),
    }),
    updateColumn: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "PUT",
        body: requestBody,
      }),
    }),
    deleteColumn: builder.mutation({
      query: (requestBody: Record<string, string>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "DELETE",
        body: requestBody,
      }),
    }),
  }),
};
