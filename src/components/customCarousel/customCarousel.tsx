"use client";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";
import CauseCard from "../causeCard/causeCard";

// Properly type the custom navigation components
interface CarouselNavigationProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

/**
 * CustomCarouselNext - Custom next button component for carousel navigation
 * Renders a styled button with a right-facing arrow icon
 *
 * @param {CarouselNavigationProps} props - Component props including className and onClick handler
 * @returns Styled next navigation button
 */
const CustomCarouselNext = ({
  className,
  onClick,
  ...props
}: CarouselNavigationProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        // Base styles with responsive widths and heights
        "w-[45px] sm:w-[60px] hover:bg-accent/50 p-0 h-[45px] sm:h-[60px] rounded-[15px] border-[1px] border-accent/50 bg-accent/15",
        className
      )}
      aria-label="Next slide" // Accessibility label
      type="button" // Explicit button type
      {...props}
    >
      {/* Inner circle with arrow icon */}
      <span className="flex items-center justify-center border-[1px] border-accent/50 bg-accent w-[35px] sm:w-[50px] h-[35px] sm:h-[50px] rounded-[15px]">
        <Image
          src="/left.svg"
          width={16.54}
          height={15.49}
          alt="next"
          role="presentation"
        />
      </span>
    </Button>
  );
};

/**
 * CustomCarouselPrev - Custom previous button component for carousel navigation
 * Similar to Next button but with rotated arrow icon
 *
 * @param {CarouselNavigationProps} props - Component props including className and onClick handler
 * @returns Styled previous navigation button
 */
const CustomCarouselPrev = ({
  className,
  onClick,
  ...props
}: CarouselNavigationProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        // Base styles matching next button
        "w-[45px] sm:w-[60px] hover:bg-accent/50 p-0 h-[45px] sm:h-[60px] rounded-[15px] border-[1px] border-accent/50 bg-accent/15",
        className
      )}
      aria-label="previous slide" // Accessibility label
      type="button" // Explicit button type
      {...props}
    >
      {/* Inner circle with rotated arrow icon */}
      <span className="flex items-center justify-center border-[1px] border-accent/50 bg-accent w-[35px] sm:w-[50px] h-[35px] sm:h-[50px] rounded-[15px]">
        <Image
          src="/left.svg"
          width={16.54}
          height={15.49}
          alt="left"
          className="rotate-180"
          role="presentation"
        />
      </span>
    </Button>
  );
};

// Main Component
/**
 * CarouselSection - Main carousel component displaying cause cards
 * Features auto-scrolling, custom navigation, and responsive layout
 *
 * @returns Responsive carousel section with cause cards and navigation
 */
export default function CarouselSection() {
  // State to manage carousel API instance
  const [carousel, setCarousel] = useState<CarouselApi>();

  // Monitor carousel initialization
  useEffect(() => {
    if (carousel) {
      console.log("carousel ready");
    }
  }, [carousel]);

  return (
    <div className="w-full relative sm:py-10">
      <p className="max-w-[790px] font-[600] lg:text-[45px] md:text-[25px] sm:text-[23px] text-[20px]">
        Discover Causes Inspired by the things you care about
      </p>

      {/* Carousel component with autoplay and custom configuration */}
      <Carousel
        setApi={setCarousel}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          //   loop: true,
          dragFree: true,
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="w-full"
        aria-label="Cause cards carousel"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          <CarouselItem
            className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
            role="group" // Semantic role
            aria-roledescription="slide"
          >
            <div className="p-2 md:p-4 curso-pointer">
              <CauseCard />
            </div>
          </CarouselItem>
          <CarouselItem
            className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
            role="group" // Semantic role
            aria-roledescription="slide"
          >
            <div className="p-2 md:p-4 curso-pointer">
              <CauseCard />
            </div>
          </CarouselItem>
          <CarouselItem
            className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
            role="group" // Semantic role
            aria-roledescription="slide"
          >
            <div className="p-2 md:p-4 curso-pointer">
              <CauseCard />
            </div>
          </CarouselItem>
          <CarouselItem
            className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
            role="group" // Semantic role
            aria-roledescription="slide"
          >
            <div className="p-2 md:p-4 curso-pointer">
              <CauseCard />
            </div>
          </CarouselItem>
          <CarouselItem
            className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
            role="group" // Semantic role
            aria-roledescription="slide"
          >
            <div className="p-2 md:p-4 curso-pointer">
              <CauseCard />
            </div>
          </CarouselItem>
        </CarouselContent>

        {/* Using the custom navigation components */}
        <nav
          className="absolute flex gap-[10px] top-[-88px] sm:top-[-103px] right-0"
          aria-label="Carousel navigation"
        >
          <CustomCarouselPrev
            onClick={() => carousel?.scrollPrev()}
            className="hidden sm:flex sm:-left-16"
          />
          <CustomCarouselNext
            onClick={() => carousel?.scrollNext()}
            className="hidden sm:flex sm:-right-16"
          />
        </nav>
      </Carousel>
    </div>
  );
}
