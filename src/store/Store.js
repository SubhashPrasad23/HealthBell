import {create} from "zustand";
import { devtools, persist } from "zustand/middleware";

const MediStore = (set) => ({
  medicines: [],
  AddMedicine: (medicine) => {
    set((state) => ({
      medicines: [medicine, ...state.medicines],
    }));
  },
  removeMedicine: (medicineId) => {
    set((state) => {
      const newMedicines = state.medicines.filter(
        (med) => med.id !== medicineId
      );
      return { medicines: newMedicines };
    });
  },
  updateMedicine: (updatedMedicine) => {
    set((state) => {
      const updatedMedicines = state.medicines.map((medicine) =>
        medicine.id === updatedMedicine.id ? updatedMedicine : medicine
      );
      return { medicines: updatedMedicines };
    });
  },
});

const useMediStore = create(
  devtools(persist(MediStore, { name: "Medicines" }))
);

export default useMediStore;
