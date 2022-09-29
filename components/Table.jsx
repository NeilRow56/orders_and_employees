/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction } from '../redux/reducer'



const Table = ( {employees}) => {

  




  return (
    <table className='min-w-full table-auto'>
      <thead>
        <tr className='bg-gray-800'>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>ID</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Name</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Email</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Salary</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Hire Date</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Status</span>
          </th>
          <th className='px-16 py-2'>
            <span className='text-gray-200'>Actions</span>
          </th>
        </tr>
        </thead>
        <tbody className='bg-gray-200  '>
         



        {employees.map((obj, index) => <Tr {...obj} key = {index}/>)

}

        </tbody>
      
    </table>
  )
}

export default Table

function Tr ({_id, employee_id, first_name, avatar, email, salary, hire_date, status}) {
  
  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()

  const onUpdate = () => {
      dispatch(toggleChangeAction())
      if(visible){
          dispatch(updateAction(_id))
      }
}

  
  return(

       <tr className="bg-gray-50 text-center">
                   <td className='px-16 py-2 items-center'>              
              
              <span className='text-center ml-2 font-semibold '>{ employee_id || "Unknown" }</span>
            </td>
            <td className='px-6 py-2 flex flex-row items-center'>              
            <Image src= {avatar|| "/vercel.svg"} width={40} height={40} alt="" className="rounded-full object-cover"/>
              <span className='text-center ml-2 font-semibold '>{ first_name || "Unknown" }</span>
            </td>
            <td className='px-16 py-2  items-center'>              
              
              <span className='text-center ml-2 font-semibold '>{ email || "Unknown" }</span>
            </td>
            <td className='px-16 py-2  items-center'>              
              
              <span className='text-center ml-2 font-semibold '>{ salary || "Unknown" }</span>
            </td>
            <td className='px-6 py-2  items-center '>              
              
              <span className='text-center ml-2 font-semibold flex '>{ hire_date || "Unknown" }</span>
            </td>
            <td className='px-16 py-2  items-center'>              
              <button className='cursor'><span className={`${status == "Active" ? 'bg-green-500' : 'bg-rose-500'} text-white px-5 py-1 rounded-full`}>{ status || "Unknown" }</span></button>              
            </td>
            <td className='px-10 py-2  items-center  '>              
            <button onClick={onUpdate}  className="cursor mr-3 "><BiEdit size={25} color={"rgb(34,197,94)"} /></button>
                        <button className="cursor "><BiTrashAlt size={25} color={"rgb(244,63,94)"} /></button>        
            </td>
            
              </tr>
  )

  

}