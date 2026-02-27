import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TabsItem } from "../shared/ui/Tabs";

export const tabsApi = createApi({
  reducerPath: "tabsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://responserift.dev/api/",
  }),
  endpoints: (builder) => ({
    getTabsItems: builder.query<TabsItem[], void>({
      query: () => "categories",
      transformResponse: (response: any) => response.results.slice(0, 5),
    }),
  }),
});

export const { useGetTabsItemsQuery } = tabsApi;
