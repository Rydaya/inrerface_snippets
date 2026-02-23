import { Product } from "../ProductCard";
import { checkboxConfig } from "./config";

export interface CarouselOptions {
  pagination: boolean;
  autoplay: boolean;
  scrollbar: boolean;
}

export interface CarouselProps {
  products: Product[];
  options: CarouselOptions;
}

export type OptionKey = (typeof checkboxConfig)[number]["key"];
export type OptionsState = Record<OptionKey, boolean>;

export interface CarouselOptionsProps {
  options: OptionsState;
  setOptions: React.Dispatch<React.SetStateAction<OptionsState>>;
}
