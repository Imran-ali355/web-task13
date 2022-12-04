import { useRouter } from "next/router"
import { useState } from "react";





function Insert() {

 // const router = useState("");
  const [neame, setName] = useState("");
  const [marks, setMarks] = useState("");

  
 function Insertrecord(){

  console.log(neame);
  console.log(marks);
}

 const router = useRouter();

function savedata(e){
  e.preventDeflut();

}
return (
  <div className="h-full  w-5/6  pt-36 m-auto">
<div className="w-10/12 mx-auto p-10 bg-slate-400 flex justify-center items-center flex-col">
<h3 className="font-bold text-center w-full">Edit Details</h3>
<input   className="w-full mt-4 py-1 px-5" placeholder="Enter Name" value={neame}
onChange={ (e) => setName(e.target.value)}
></input>
<input  className="w-full mt-4  py-1 px-5 "  placeholder="Enter Masks " //value={masks} 
// onChange={ (e) => setMarks(e.target.value)}
></input>
<button className="w-full bg-blue-600 m-4 rounded-full p-1">Insert</button>
</div>
<button
onClick={ () => router.push('/') }

className="w-full mx-auto text-blue-600">Back</button>

  </div>
)
}

export default Insert