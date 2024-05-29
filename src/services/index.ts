import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authEndpoints } from "./modules/auth";
import { boardEndpoints } from "./modules/board";
import { columnEndpoints } from "./modules/column";
import { taskEndpoints } from "./modules/task";
import { subtaskEndpoints } from "./modules/subtask";

const api = (headers?: Record<string, any>) => {
  const token = localStorage.getItem("ktm_token") ?? "";
  return createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
      baseUrl: import.meta.env.VITE_APP_BASE_API_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      credentials: "include",
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: () => ({}),
  });
};

export const apiSlice = api()
  .injectEndpoints({ ...authEndpoints })
  .injectEndpoints({ ...boardEndpoints })
  .injectEndpoints({ ...columnEndpoints })
  .injectEndpoints({ ...taskEndpoints })
  .injectEndpoints({ ...subtaskEndpoints });

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetBoardQuery,
  useGetBoardsQuery,
  useGetBoardColumnsQuery,
  useGetColumnQuery,
  useCreateBoardMutation,
  useCreateColumnMutation,
  useUpdateBoardMutation,
  useUpdateColumnMutation,
  useDeleteBoardMutation,
  useDeleteColumnMutation,
  useGetTaskColumnsQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useGetTaskSubtasksQuery,
  useGetSubtaskQuery,
  useCreateSubtaskMutation,
  useUpdateSubtaskMutation,
  useDeleteSubtaskMutation,
} = apiSlice;
