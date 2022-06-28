import create from "zustand";
import { devtools } from "zustand/middleware";

const useAjaxStore = create(devtools((set, get) => ({})));

export default useAjaxStore;
