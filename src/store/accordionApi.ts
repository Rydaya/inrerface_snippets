import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AccordionItem } from "../shared/ui/Accordion";

export const accordionApi = createApi({
  reducerPath: "accordionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAccordionItems: builder.query<AccordionItem[], void>({
      query: () => "posts",
      transformResponse: (response: any[]) =>
        response.slice(0, 10).map((item) => ({
          id: item.id,
          title: item.title,
          content: item.body,
        })),
    }),
  }),
});

export const { useGetAccordionItemsQuery } = accordionApi;
