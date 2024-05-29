import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";
import { getQueryStringParams } from "../../../utils/common";

const module = "/subtasks";

export const subtaskEndpoints = {
  endpoints: (builder: EndpointBuilder<BaseQueryFn, any, any>) => ({
    getTaskSubtasks: builder.query({
      query: (requestBody: Record<string, any>) => {
        const queryStringParamas = { taskPublicId: requestBody?.taskPublicId };
        const queryParams = getQueryStringParams(queryStringParamas);
        return {
          url: `${module}?${queryParams}`,
          method: "GET",
        };
      },
    }),
    getSubtask: builder.query({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "GET",
      }),
    }),
    createSubtask: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}`,
        method: "POST",
        body: requestBody,
      }),
    }),
    updateSubtask: builder.mutation({
      query: (requestBody: Record<string, any>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "PUT",
        body: requestBody,
      }),
    }),
    deleteSubtask: builder.mutation({
      query: (requestBody: Record<string, string>) => ({
        url: `${module}/${requestBody?.publicId}`,
        method: "DELETE",
        body: requestBody,
      }),
    }),
  }),
};
