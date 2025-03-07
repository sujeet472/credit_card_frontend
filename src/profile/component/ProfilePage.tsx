
import { useFetchUserProfileQuery } from "@/rtk/createApi";

const ProfilePage = () => {
  const { data: profile, isLoading, error } = useFetchUserProfileQuery();

  if (isLoading) return <div className="text-center py-4">Loading profile...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error loading profile</div>;
  if (!profile) return <div className="text-center py-4">No profile data available</div>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Profile Details</h2>
      
      <div className="space-y-4">

      <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Profile ID</label>
            <p className="mt-1 p-2 bg-gray-100 rounded">{profile.id} </p>
          </div>
      
        </div>


        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <p className="mt-1 p-2 bg-gray-100 rounded">{profile.first_name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <p className="mt-1 p-2 bg-gray-100 rounded">{profile.last_name}</p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 p-2 bg-gray-100 rounded">{profile.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <p className="mt-1 p-2 bg-gray-100 rounded">{profile.phone_number}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
          <p className="mt-1 p-2 bg-gray-100 rounded">{profile.date_of_birth}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <p className="mt-1 p-2 bg-gray-100 rounded">{profile.address}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Branch ID</label>
            <p className="mt-1 p-2 bg-gray-100 rounded">{profile.branch_id}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Type</label>
            <p className="mt-1 p-2 bg-gray-100 rounded">{profile.account_type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

















// import React, { useState } from "react";
// import { useFetchUserProfileQuery, useUpdateUserProfileMutation } from "@/rtk/createApi";

// const ProfilePage = () => {
//   const { data: profile, isLoading, error } = useFetchUserProfileQuery();
//   const [updateProfile] = useUpdateUserProfileMutation();
//   console.log(profile);

//   const [formData, setFormData] = useState({
//     first_name: profile?.first_name || "",
//     last_name: profile?.last_name || "",
//     date_of_birth: profile?.date_of_birth || "",
//     email: profile?.email || "",
//     phone_number: profile?.phone_number || "",
//     address: profile?.address || "",
//   });

//   if (isLoading) return <p>Loading profile...</p>;
//   if (error) return <p>Error loading profile</p>;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await updateProfile(formData);
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div>
//       <h2>Profile Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label>First Name:</label>
//         <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        
//         <label>Last Name:</label>
//         <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />

//         <label>Email:</label>
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />

//         <label>Phone Number:</label>
//         <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} />

//         <label>Address:</label>
//         <textarea name="address" value={formData.address} onChange={handleChange}></textarea>

//         <button type="submit">Update Profile</button>
//       </form>
//     </div>
//   );
// };

// export default ProfilePage;
