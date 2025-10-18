import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const currencySymbol = "$";

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState([]);

  // Getting Doctors using API
  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDoctorsData();
  }, []);

  const value = {
    doctors,
    getDoctorsData,
    currencySymbol
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
