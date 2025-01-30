"use client";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function CauseCard() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(33), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full">
      <div className="flex flex-col h-full bg-white overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-[250px] sm:h-[320px] md:h-[360px] lg:h-[393px] overflow-hidden rounded-[10px] sm:rounded-[15px] lg:rounded-[20px]">
          <div className="bg-cause bg-cover bg-center w-full h-full" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-4 sm:p-5">
          {/* Title */}
          <h3 className="text-[16px] sm:text-[18px] lg:text-[20px] font-[600] line-clamp-2">
            Help people suffering in the Israeli war
          </h3>

          {/* Description */}
          <p
            className="mt-[6px] sm:mt-[9px] 
            text-[14px] sm:text-[16px] lg:text-[18px] 
            font-[400] text-gray5 
            line-clamp-3"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore...
          </p>

          {/* Amount Section */}
          <div className="flex items-center gap-2 mt-[15px] lg:mt-[20px] flex-wrap">
            <p className="text-[18px] sm:text-[20px] lg:text-[22px] font-[600]">
              XAF 500,000
            </p>
            <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-[400] text-gray6">
              raised of XAF 2,000,000 goal
            </p>
          </div>

          {/* Progress Section */}
          <div className="mt-[25px] lg:mt-[32px] lg:mt-[39px]">
            <Progress value={progress} className="w-full h-[4px] text-accent" />

            <div className="flex flex-col lg:flex-row py-[10px] lg:py-[14px] items-start lg:items-center justify-between gap-2">
              <p className="text-[14px] lg:text-[16px] lg:text-[18px] font-[400] text-gray6">
                226 people have supported this
              </p>
              <Badge
                className="text-center rounded-[15px] sm:rounded-[20px] 
                  bg-gray7 text-gray8 
                  text-[14px] sm:text-[15px] lg:text-[16px] 
                  font-[600] px-4"
              >
                Political
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
