import React from "react";
import { useGetTabsItemsQuery } from "../store/tabsApi";
import { Loader, Error, Dropdown } from "../shared/ui";

const DropdownPage: React.FC = () => {
  const { data: items, isLoading, error } = useGetTabsItemsQuery();
  if (isLoading) return <Loader />;
  if (error || !items) return <Error />;

  return (
    <div className="p-6">
      <h1 className="heading-page mb-10 lg:mb-5">Dropdown</h1>
      <div className="w-[90%] lg:w-[40%] m-auto">
        <Dropdown items={items} />
      </div>
    </div>
  );
};

export default DropdownPage;
