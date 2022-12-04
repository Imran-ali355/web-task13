import { Router, useRouter } from "next/router"
import { useState } from "react";
function Update(){
  const router = useState("");
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  console.log(name);
  console.log(marks);
}

// const id = Router.query.id;


function Updata() {
  const router =useRouter();
  // 

  return (
    <div className="h-full  w-5/6  pt-36 m-auto">
<div className="w-10/12 mx-auto p-10 bg-slate-700 flex justify-center items-center flex-col">
  <h3 className="font-bold text-center w-full">Edit Details</h3>
  <input   className="w-full mt-4 py-1 px-5" placeholder="Enter Name" value={naame}
  onChange={ (e) => setName(e.target.value)}
  ></input>
  <input  className="w-full mt-4  py-1 px-5 "  placeholder="Enter Masks " value={masks} 
  // onChange={ (e) => setMarks(e.target.value)}
  ></input>
  <button className="w-full bg-blue-600 m-4 rounded-full p-1">Update</button>
</div>
<button
onClick={ () => router.push('/') }

className="w-full mx-auto text-blue-600">Back</button>

    </div>
  )
}


export default Updata