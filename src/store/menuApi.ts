import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category } from "../features/menu";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v3.minestorecms.com/api/",
  }),
  endpoints: (builder) => ({
    getMenu: builder.query<Category[], void>({
      query: () => "categories/get",
      transformResponse: (response: any): Category[] => {
        const addTestToFactionsSubcategories = (
          categories: Category[],
        ): Category[] => {
          return categories.map((cat: Category) => {
            if (cat.name === "Factions" && cat.subcategories?.length) {
              const updatedSubcategories = cat.subcategories.map(
                (sub: Category, index: number) => ({
                  ...sub,
                  subcategories: [
                    ...(sub.subcategories || []),
                    {
                      idx: sub.idx * 10 + 1,
                      name: "Test",
                      subcategories: [],
                    },
                    {
                      idx: sub.idx * 10 + 2,
                      name: "Test",
                      subcategories: [],
                    },
                    {
                      idx: sub.idx * 10 + 3,
                      name: "Test",
                      subcategories: [],
                    },
                  ],
                }),
              );
              return { ...cat, subcategories: updatedSubcategories };
            }
            return {
              ...cat,
              subcategories: cat.subcategories
                ? addTestToFactionsSubcategories(cat.subcategories)
                : [],
            };
          });
        };

        return addTestToFactionsSubcategories(response.categories || response);
      },
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
