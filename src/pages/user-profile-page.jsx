import LanguageSelector from "@/components/LanguageSelector";
import Sidebar from "@/components/Sidebar";
import EditableField from "@/components/user-profile/EditableField";
import { Pencil, MapPin, Phone, PhoneCall, Building } from "lucide-react";
import { useState } from "react";

function UserProfilePage() {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload here
      console.log("File selected:", file);
    }
  };

  const [teacherData, setTeacherData] = useState({
    teacherName: "Teacher_Name",
    subjects: "Mathematics, Physics",
    email: "cainticrg.722.stud@cdd.edu.ph",
    officeAddress: "468 Sitio Tokok, Bacayao Sur, Dagupan City, Pangasinan",
    phoneNumber: "09123456789",
    telephoneNumber: "(125) 545-5245",
    institution: "Acropolis Institute of Technology and Reseach, Indore, M.P.",
  });

  const handleEdit = (field, value) => {
    setTeacherData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Sidebar />
      <div className="ml-[16.975rem] bg-[#F3F4FF]">
        <header className="flex items-center justify-between px-10 py-6">
          <h1 className="text-4xl font-bold text-[#303972]">User Profile</h1>
          <LanguageSelector />
        </header>

        <main className="relative mx-20 mb-0 mt-6 h-screen">
          <h2 className="font-italic font-roboto mb-4 text-xl font-normal text-[#555]">
            Edit Profile
          </h2>
          <div
            className="mb-8 rounded-lg bg-white"
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="space-y-4 p-6 pl-12">
              <EditableField
                value={teacherData.teacherName}
                onEdit={(value) => handleEdit("teacherName", value)}
                icon={<Pencil className="h-4 w-4 text-gray-500" />}
                className="text-2xl font-semibold text-gray-800"
              />

              <EditableField
                value={teacherData.subjects}
                onEdit={(value) => handleEdit("subjects", value)}
                icon={<Pencil className="h-4 w-4 text-gray-500" />}
                className="text-lg text-gray-600"
              />

              <EditableField
                value={teacherData.email}
                onEdit={(value) => handleEdit("email", value)}
                icon={<Pencil className="h-4 w-4 text-gray-500" />}
                className="text-gray-600"
              />
            </div>
          </div>

          <h2 className="font-italic font-roboto mb-4 text-xl font-normal text-[#555]">
            Contact Information
          </h2>
          <div
            className="rounded-lg bg-white"
            style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="space-y-4 p-6 pl-12">
              <EditableField
                value={teacherData.officeAddress}
                onEdit={(value) => handleEdit("officeAddress", value)}
                icon={<Pencil className="h-4 w-4 text-gray-500" />}
                leftIcon={<MapPin className="h-5 w-5 pr-1.5 text-gray-500" />}
                className="text-gray-800"
              />

              <EditableField
                value={teacherData.phoneNumber}
                onEdit={(value) => handleEdit("phoneNumber", value)}
                icon={<Pencil className="h-4 w-4 text-gray-500" />}
                leftIcon={<Phone className="h-5 w-5 pr-1.5 text-gray-500" />}
                className="text-gray-600"
              />

              <EditableField
                value={teacherData.telephoneNumber}
                onEdit={(value) => handleEdit("telephoneNumber", value)}
                icon={<Pencil className="h-4 w-4 text-gray-500" />}
                leftIcon={
                  <PhoneCall className="h-5 w-5 pr-1.5 text-gray-500" />
                }
                className="text-gray-600"
              />

              <EditableField
                value={teacherData.institution}
                onEdit={(value) => handleEdit("institution", value)}
                icon={<Pencil className="h-4 w-4 text-gray-500" />}
                leftIcon={<Building className="h-5 w-5 pr-1.5 text-gray-500" />}
                className="text-gray-600"
              />
            </div>
          </div>

          {/**
           *
           * Profile Avatar
           *
           */}
          <div className="absolute right-[2rem] top-[-3rem] flex flex-col items-center justify-center">
            <div className="relative">
              <label htmlFor="profile-upload" className="cursor-pointer">
                <div className="group relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#4D44B591] bg-[#4D44B591]/50">
                  <img
                    src="/img/avatar.png"
                    alt="User Profile Avatar"
                    className="m-auto h-auto w-[6rem]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm text-white">Change Photo</span>
                  </div>
                </div>
              </label>

              <input
                type="file"
                id="profile-upload"
                accept="image/png, image/jpeg"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserProfilePage;
