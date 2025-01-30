import Image from "next/image";
import { Button } from "../ui/button";

/**
 * Cutout Component - A card-like component displaying political causes with donation CTA
 * Styled with a custom background and rounded corners for visual appeal
 */
export default function Cutout() {
  return (
    <article
      className="bg-cutout rounded-[15px] w-[206px] h-[326px] pt-[12px]"
      role="article"
      aria-labelledby="cause-category"
    >
      {/* Cause Category Header */}
      <h3
        id="cause-category"
        className="mx-[16px] font-[600] text-[18px] text-white"
      >
        Political
      </h3>

      {/* Cause Description */}
      <p
        className="mt-[48px] mx-[16px] font-[400] text-[16px] text-white"
        aria-label="Cause description"
      >
        Hundred of thousands of people have been displaced from their homes in
        the Southern Cameroons cause of the anglophone crisis. They need your
        help
      </p>

      {/* Donation CTA Button */}
      <Button
        className="mx-[9px] hover:bg-white/10 justify-between pl-[16px] pr-[3px] mt-[21px] font-[600] text-[18px] bg-white/25 w-[188px] h-[45px] rounded-[18px]"
        aria-label="Donate to this cause"
        type="button"
      >
        Donate Now
        {/* Circular arrow container */}
        <span
          className="flex items-center justify-center bg-white w-[40px] h-[40px] rounded-[40px]"
          aria-hidden="true" // Hide decorative element from screen readers
        >
          <Image
            src="/arrow.svg"
            width={24}
            height={24}
            alt="" // Empty alt since image is decorative
            role="presentation"
            priority={false} // Don't prioritize loading this decorative image
          />
        </span>
      </Button>
    </article>
  );
}
