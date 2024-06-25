import { create } from "zustand" ;
import getTodayDate from "../Helpers/GetTodayDate";


const useDataStore = create((set) => ({ 
    startDate: "2024-05-01",
    endDate: getTodayDate(),
    loader: 0,
    setStartDate: (date) => set({ startDate : date }),
    setEndDate: (date) => set({ endDate : date }),
    setLoader: (val)=>set({loader:val})
}));


export default useDataStore;