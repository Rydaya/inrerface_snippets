import React from "react";
import { Loader, Error } from "../shared/ui";
import { Menu, MobileMenu } from "../features/menu";
import { useGetMenuQuery } from "../store/menuApi";

const MenuPage: React.FC = () => {
  const { data: categories, isLoading, error } = useGetMenuQuery();

  if (isLoading) return <Loader />;
  if (error || !categories) return <Error />;

  return (
    <div className="p-6">
      <h1 className="heading-page mb-10 lg:mb-5">Menu</h1>
      <div className="hidden sm:block">
        <Menu categories={categories} />
      </div>
      <div className="block sm:hidden">
        <MobileMenu categories={categories} />
      </div>
    </div>
  );
};
export default MenuPage;
