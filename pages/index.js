import { useRouter } from "next/router"

function Index() {
  const router =useRouter();
  return (
  <div className="h-full pt-10">
    <button 
    onClick={ () => router.push('/insert')}
    className="bg-blue-600 rounded-md ml-28 px-10 py-2 mt-1 hover:bg-blue-700">Insert</button>

    <div className="w-10/12 mx-auto bg-slate-400">

      <table className="w-full text-center mt-5">
        <thead>
        <tr>

          <th>Name</th>
          <th>Masks</th>
          <th>Action</th></tr>
        </thead>
        <tbody>
          <tr><td>Imran</td>
          <td>78</td>
          <td>
            <button 
                onClick={ () => router.push('/update')}

            className="bg-green-600 rounded-md ml-2 px-10 py-2 mt-1 hover:bg-green-700">Update</button>
            <button className="bg-red-600 rounded-md ml-2 px-10 py-2 mt-1 hover:bg-red-700">Delete</button>
            </td>
          </tr>
        </tbody>


      </table>

    </div>
  </div>
  )
}

export default Index