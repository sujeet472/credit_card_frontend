import React, { useState } from "react";
import { useFetchUserProfileQuery, useUpdateUserProfileMutation } from "@/rtk/createApi";
import { useEffect } from "react";
const ProfileUpdate = () => {
  const { data: profile, isLoading, error } = useFetchUserProfileQuery();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  console.log("the profile from ProfileUpdate",profile);

  console.log("the profile from ProfileUpdate email",profile?.email);

  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    address: "",
    profile_image: "",
  });

  // Update state when profile data is available
  useEffect(() => {
    if (profile) {
      setFormData({
        email: profile.email || "",
        phone_number: profile.phone_number || "",
        address: profile.address || "",
        profile_image: profile.profile_image || "",
      });
    }
  }, [profile]); // Runs only when `profile` changes


  console.log("email from from data",formData?.email)

  const [imagePreview, setImagePreview] = useState<string | null>(profile?.profile_image || null);
  const [loading, setLoading] = useState(false);

  if (isLoading) return <div className="text-center py-4">Loading profile...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error loading profile</div>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
      setFormData({ ...formData, profile_image: file.name });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await updateUserProfile(formData).unwrap();
      console.log("Update Response:", response);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Profile update failed!");
    }
  
    setLoading(false);
  };
  

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     await updateUserProfile(formData);
//     setLoading(false);
//     alert("Profile updated successfully!");
//   };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="flex flex-col items-center">
          <label className="block text-sm font-medium text-gray-700">Profile Image</label>
          <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-300 mt-2">
            <img src={imagePreview || "/default-avatar.png"} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2 text-sm text-gray-500" />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            disabled
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows={3}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
