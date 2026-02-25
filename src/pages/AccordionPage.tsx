import React from "react";
import { useGetAccordionItemsQuery } from "../store/accordionApi";
import { Loader, Error, Accordion } from "../shared/ui";

const AccordionPage: React.FC = () => {
  const { data: items, isLoading, error } = useGetAccordionItemsQuery();

  if (isLoading) return <Loader />;
  if (error || !items) return <Error />;

  return (
    <div className="p-6">
      <h1 className="heading-page mb-5">Accordion</h1>
      <div className="w-[70%] m-auto">
        <Accordion items={items} title="FAQ's" />
      </div>
    </div>
  );
};

export default AccordionPage;
