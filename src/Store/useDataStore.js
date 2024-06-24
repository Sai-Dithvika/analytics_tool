import { create } from "zustand" ;
import getTodayDate from "../Helpers/GetTodayDate";


const useDataStore = create((set) => ({ 
    startDate: "2024-05-01",
    endDate: getTodayDate(),
    setStartDate: (date) => set({ startDate : date }),
    setEndDate: (date) => set({ endDate : date }),
}));


export default useDataStore;