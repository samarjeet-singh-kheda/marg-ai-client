import { Mail } from "lucide-react";
import { useState } from "react";

function RecentStudentsCard({ recentStudents }) {
  const [visibleCount, setVisibleCount] = useState(5);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="flex flex-col p-6 pb-2">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-poppins mb-2 text-2xl font-bold text-[#303972]">
            Recent Students
          </h3>
          <p className="text-sm text-[#A098AE]">
            You have <strong>{recentStudents.length}</strong> students
          </p>
        </div>
        <button className="rounded-full bg-[#4D44B5] px-3 py-[0.3rem] text-2xl font-bold text-white">
          +
        </button>
      </div>
      <ul className="mt-8">
        {recentStudents.slice(0, visibleCount).map((student) => (
          <li
            key={student.name}
            className="mb-4 flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <rect width="48" height="48" rx="24" fill="#C1BBEB" />
              </svg>

              <div className="flex flex-col">
                <h4 className="text-base font-semibold text-[#303972]">
                  {student.name}
                </h4>
                <p className="text-sm text-[#A098AE]">{student.class}</p>
              </div>
            </div>

            <button className="rounded-full border-[3px] bg-[#FFF] p-3">
              <Mail className="h-6 w-6 text-[#A098AE]" />
            </button>
          </li>
        ))}
      </ul>

      {visibleCount < recentStudents.length && (
        <button
          onClick={handleViewMore}
          className="mx-auto mt-4 w-[90%] rounded-full bg-[#C1BBEB] px-2 py-4 text-lg font-[550] text-[#4D44B5]"
        >
          View All
        </button>
      )}
    </div>
  );
}

export default RecentStudentsCard;
