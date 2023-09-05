import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { toast } from "react-toastify";
import Spinner from "./component/Spinner";
// import toast from "toastr";
// import { toast } from "react-toastify/dist/components";

const App = () => {
  const [courses, setcourses] = useState(null);
  const [loader,setloader]  = useState(true);
  const [category,setcategory] = useState(filterData[0].title);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(apiUrl);
  //       const output = await res.json();
  //       // console.log(data);
  //       setcourses(output.data);
  //     } catch (error) {
  //       console.log("somehthing went wrong");
  //     }
  //   };
  //   fetchData();
  // }, []);\

  async function fetchData(){
    setloader(true);
    try{
      let response = await fetch(apiUrl);
      let output  = await response.json();
      setcourses(output.data);


    }
    catch(error){
      toast.error("network me koi dikat hai");

    }
    setloader(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">

      <div>
        <Filter filterData={filterData} category={category} setcategory = {setcategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex  flex-wrap justify-center items-center min-h-[50vh]">
      {
        loader? (<Spinner/>):(<Cards courses={courses} category={category}/>)
      }
        {/* <Cards courses={courses} /> */}
      </div>
      </div>
    </div>
  );
};

export default App;
