import {create} from "zustand";
import { devtools, persist } from "zustand/middleware";

const MediStore = (set) => ({
  medicines: [],
  AddMedicine: (medicine) => {
    set((state) => ({
      medicines: [medicine, ...state.medicines],
    }));
  },
});

const useMediStore = create(
  devtools(persist(MediStore, { name: "Medicines" }))
);

export default useMediStore;
