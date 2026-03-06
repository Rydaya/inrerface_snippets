import React from "react";
import { useGetTabsItemsQuery } from "../store/tabsApi";
import { Loader, Error, Tabs } from "../shared/ui";

const TabsPage: React.FC = () => {
  const { data: items, isLoading, error } = useGetTabsItemsQuery();
  if (isLoading) return <Loader />;
  if (error || !items) return <Error />;

  return (
    <div className="p-6">
      <h1 className="heading-page mb-10 lg:mb-5">Tabs</h1>
      <div className="flex flex-col gap-10">
        <div className="w-[95%] lg:w-[85%] m-auto">
          <Tabs items={items} withDescription />
        </div>
        <div className="w-[95%] lg:w-[85%] m-auto">
          <Tabs items={items} />
        </div>
      </div>
    </div>
  );
};
export default TabsPage;
