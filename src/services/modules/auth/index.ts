import { BaseQueryFn } from "@reduxjs/toolkit/dist/query";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

export const authEndpoints = {
  endpoints: (builder: EndpointBuilder<BaseQueryFn, any, any>) => ({
    signUp: builder.mutation({
      query: (requestBody) => ({ url: "/auth/sign_up", method: "POST", body: requestBody }),
    }),
    signIn: builder.mutation({
      query: (requestBody) => ({ url: "/auth/sign_in", method: "POST", body: requestBody }),
    }),
  }),
};
