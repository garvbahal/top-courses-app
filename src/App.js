import "./App.css";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw Error("Error is here");
        }
        const data = await res.json();
        //save the data

        setCourses(data.data);
      } catch (err) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Filter filterData={filterData} />

      <Cards courses={courses} />
    </div>
  );
}

export default App;
