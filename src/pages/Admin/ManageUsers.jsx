import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuFileSpreadsheet } from 'react-icons/lu';
import UserCard from '../../components/Cards/UserCard';

const ManageUsers = () => {

  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS);

      if (response.data?.length > 0) {
        setAllUsers(response.data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // handleDownloadReport

  const handleDownloadReport = async () => {
  try {
    const response = await axiosInstance.get(API_PATHS.REPORTS.EXPORT_USERS, {
      responseType: "blob"
    });

    // Create a URL for the blob
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "user_details.xlsx");
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }, 100);
    
  } catch (error) {
    console.error("Error downloading user details:", error);
    toast.error('Failed to download user details. Please try again.');
  }
};

  useEffect(()=>{
    getAllUsers();

    return ()=> {};

  }, [])

  return (
    <DashboardLayout activeMenu="Team Members">
     <div className='mt-5 mb-10'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
          <h2 className='text-xl md:text-xl font-medium'>Team Members</h2>
          <button 
            className='flex items-center gap-2 px-4 py-2 bg-lime-500 text-white rounded-md hover:bg-lime-800 transition-colors'
            onClick={handleDownloadReport}
          >
            <LuFileSpreadsheet className='text-lg' />
            Download Report
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
          {allUsers?.map((user)=>(
            <UserCard key={user._id} userInfo={user} />
          ))
          }
        </div>
      </div>

    </DashboardLayout>
  )
}

export default ManageUsers