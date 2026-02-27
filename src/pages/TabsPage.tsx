import React from "react";
import { useGetTabsItemsQuery } from "../store/tabsApi";
import { Loader, Error, Tabs } from "../shared/ui";

const TabsPage: React.FC = () => {
  const { data: items, isLoading, error } = useGetTabsItemsQuery();
  if (isLoading) return <Loader />;
  if (error || !items) return <Error />;

  console.log(items);

  return (
    <div className="p-6">
      <h1 className="heading-page mb-5">Tabs</h1>
      <div className="w-[85%] m-auto">
        <Tabs items={items} />
      </div>
    </div>
  );
};

export default TabsPage;
