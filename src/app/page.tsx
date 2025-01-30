import { Button } from "@/components/ui/button";
import Image from "next/image";
import Cutout from "@/components/cutout/cutout";
import ImageCard from "@/components/imageCard/imageCard";
import {
  SmallAvatarCard,
  BigAvatarCard,
} from "@/components/avatarCard/avatarCard";

import CarouselSection from "@/components/customCarousel/customCarousel";

/**
 * Home Page Component
 * Main landing page featuring hero section, carousel, and fundraising information
 */
export default function Home() {
  return (
    <main
      className="px-[66px] pb-20 font-[family-name:var(--font-titillium-web)]"
      role="main"
      aria-labelledby="main-heading"
    >
      {/* Hero Section */}
      <section
        className="flex flex-col lg:flex-row lg:justify-between gap-4 items-center lg:items-start"
        aria-label="Hero section"
      >
        {/* Left Content Container */}
        <article className="xl:mt-[133px] mt-[30px]">
          <h1
            id="main-heading"
            className="max-w-[607px] md:text-[40px] sm:text-[33px] text-[20px] xs:text-[18px] font-[400] font-[family-name:var(--font-krona-one)]"
          >
            Together, we can build <span className="text-accent">trust</span>{" "}
            for <span className="text-accent">Humanity</span>
          </h1>

          <div className="mt-[17px] max-w-[593px] sm:text-[20px] text-[16px] leading-[30px]">
            <p className="font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>

            <Button
              className="bg-gray3 hover:bg-gray4 text-gray2 sm:text-[20px] text-[16px] justify-around sm:py-[10px] py-[5px] sm:w-[187px] w-[150px] sm:h-[50px] h-[40px] sm:rounded-[15px] rounded-[10px] b-[1px] sm:mt-[30px] mt-[20px] font-[600]"
              aria-label="Learn more about our mission"
            >
              Learn More
              <Image
                src="/sun.svg"
                alt=""
                width={30}
                height={30}
                role="presentation"
                aria-hidden="true"
              />
            </Button>
          </div>

          {/* Trust Indicator Section */}
          <div
            className="flex mt-[17px] gap-[5px]"
            aria-label="Trust indicator"
          >
            <Image
              src="/sheild.svg"
              alt=""
              width={24}
              height={24}
              role="presentation"
              aria-hidden="true"
            />
            <p className="text-[18px] font-[400] text-gray2">
              Trusted by millions of Cameroonians
            </p>
          </div>

          {/* Cutout Component */}
          <div className="mt-[17px]">
            <Cutout />
          </div>
        </article>

        {/* Right Banner Image */}
        <figure
          className="mt-[3px] relative w-[611px] h-[779px] hidden lg:block"
          role="img"
          aria-label="Crowdfunding banner showcase"
        >
          <Image
            src="/banner.jpeg"
            alt="People helping each other"
            fill
            objectFit="cover"
            className="rounded-tl-[50px] rounded-bl-[50px]"
            priority={true}
          />
          <SmallAvatarCard classes="absolute top-[276px] left-[-104px] 2xl:block hidden" />
          <SmallAvatarCard classes="absolute top-[540px] left-[-176px] xl:block hidden" />
          <BigAvatarCard classes="absolute top-[635px] right-[43px]" />
        </figure>
      </section>

      {/* Carousel Section */}
      <section
        className="mt-[50px] lg:mt-[200px] md:mt-[100px]"
        aria-label="Featured causes carousel"
      >
        <div className="w-full relative py-10">
          <CarouselSection />
        </div>
      </section>

      {/* Fundraising Section */}
      <section
        className="flex flex-col items-center gap-8 sm:gap-[64px] py-6 sm:py-[77px] px-4 sm:px-[66px] mt-[0px] sm:mt-[92px] rounded-[25px] sm:rounded-[50px] w-full max-w-[1325px] mx-auto bg-gray1"
        aria-labelledby="fundraising-title"
      >
        {/* Fundraising Info Card */}
        <article className="w-full rounded-[20px] sm:rounded-[40px] flex flex-col lg:flex-row items-start lg:items-end justify-between bg-white p-4 sm:p-8 lg:px-[51px] lg:pb-[103px] lg:pt-[33px]">
          <div className="max-w-full lg:max-w-[578px] flex flex-col gap-[20px] mb-6 lg:mb-0">
            <h2
              id="fundraising-title"
              className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-[600]"
            >
              Fundraising on Trust Humanity is easy, powerful, and trusted
            </h2>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-[400]">
              Get what you need to help your fundraiser succeed on Trust
              Humanity, whether you&apos;re raising money for yourself, friends,
              family, or charity. With no fee to start, Trust Humanity is
              Cameroon&apos;s leading crowdfunding platform—from memorial
              tributes and funerals to medical emergencies and nonprofits.
              Whenever you need help, you can ask here.
            </p>
          </div>

          <Button
            className="hover:bg-primary/50 w-full sm:w-[279px] h-[50px] justify-between items-center rounded-[18px] text-[16px] sm:text-[18px] font-[600] bg-primary p-[13px] text-white"
            aria-label="Join our community"
          >
            Join the community
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
              aria-hidden="true"
              role="presentation"
            >
              <path
                d="M6.22438 17.9287C6.36591 18.0667 6.55676 18.1423 6.75438 18.1387C6.95141 18.1391 7.14109 18.064 7.28438 17.9287L16.6144 8.58994V16.6487C16.6144 17.0629 16.9502 17.3987 17.3644 17.3987C17.5658 17.4042 17.7608 17.3273 17.9042 17.1857C18.0477 17.0442 18.1272 16.8502 18.1244 16.6487V6.9165C18.1504 6.80241 18.1498 6.68188 18.1198 6.56444C18.0519 6.29871 17.8444 6.09121 17.5787 6.02334C17.4612 5.99335 17.3407 5.99275 17.2266 6.01873H7.49438C7.08017 6.01873 6.74438 6.35451 6.74438 6.76873C6.74438 7.18294 7.08017 7.51873 7.49438 7.51873H15.5644L6.22438 16.8587C6.08085 16.9997 6 17.1925 6 17.3937C6 17.5949 6.08085 17.7877 6.22438 17.9287Z"
                fill="currentColor"
              />
            </svg>
          </Button>
        </article>

        {/* Featured Topics Section */}
        <section
          className="w-full bg-white rounded-[20px] sm:rounded-[40px] p-4 lg:px-[51px] sm:py-[45px]"
          aria-labelledby="featured-topics"
        >
          <h2
            id="featured-topics"
            className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-[600]"
          >
            Featured Topics
          </h2>
          <div
            className="flex flex-col gap-[24px] mt-[28px]"
            role="list"
            aria-label="Featured topics list"
          >
            <ImageCard
              imageUrl="/flooding.jpeg"
              title="NATURAL DISASTERS"
              description="Get what you need to help your fundraiser succeed on Trust Humanity, whether you're raising money for yourself, friends, family, or charity. With no fee to start, Trust Humanity is Cameroon's leading crowdfunding platform—from memorial tributes and funerals to medical emergencies and nonprofits. Whenever you need help, you can ask here."
            />
            <ImageCard imageUrl="/pandemic.jpeg" title="HEALTH EPIDEMICS" />
            <ImageCard imageUrl="/education.jpeg" title="HEALTH EPIDEMICS" />
          </div>
        </section>
      </section>
    </main>
  );
}
