/* eslint-disable react/jsx-sort-props */
"use client";

import React, { useState } from "react";
import { PlayCircleIcon, SpeechIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SideMenuProps {
  onToggle: (isExpanded: boolean) => void;
}

// eslint-disable-next-line react/jsx-sort-props
function SideMenu({ onToggle }: SideMenuProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    onToggle(!isExpanded);
  };

  return (
    <div className={`z-[10] bg-slate-100 fixed top-[64px] left-0 h-full transition-all duration-300 ${isExpanded ? 'w-[200px] px-6' : 'w-[80px] px-2'}`}>
      <button onClick={toggleMenu} className="mb-4 p-2 bg-indigo-500 text-white rounded-md z-20">
        {isExpanded ? '-' : '+'}
      </button>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col justify-between gap-2">
          <div
            className={`flex flex-row p-3 rounded-md hover:bg-slate-200 cursor-pointer ${
              pathname.endsWith("/dashboard") ||
              pathname.includes("/interviews")
                ? "bg-indigo-200"
                : "bg-slate-100"
            }`}
            onClick={() => router.push("/dashboard")}
          >
            <PlayCircleIcon className="font-thin mr-2" />
            {isExpanded && <p className="font-medium ">Interviews</p>}
          </div>
          <div
            className={`flex flex-row p-3 rounded-md hover:bg-slate-200 cursor-pointer ${
              pathname.endsWith("/interviewers")
                ? "bg-indigo-200"
                : "bg-slate-100"
            }`}
            onClick={() => router.push("/dashboard/interviewers")}
          >
            <SpeechIcon className="font-thin mr-2" />
            {isExpanded && <p className="font-medium ">Interviewers</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
