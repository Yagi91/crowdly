import Image from "next/image";

interface ImageCardProps {
  title: string;
  description?: string;
  imageUrl: string;
}

/**
 * ImageCard Component - A responsive card with background image and overlaid text
 * Features dynamic border radius and text scaling based on viewport size
 *
 * @param {ImageCardProps} props - Component properties
 * @returns A styled card with image background and centered text content
 */
export default function ImageCard({
  title,
  description,
  imageUrl,
}: ImageCardProps) {
  return (
    <article
      className="relative max-w-[1146px] w-full min-h-[300px] h-auto lg:h-[335px] flex flex-col items-center justify-center rounded-[50px] sm:rounded-[80px] md:rounded-[100px] lg:rounded-[140px] overflow-hidden px-6"
      role="article"
      aria-labelledby="card-title"
    >
      {/* Background Image with accessibility considerations */}
      <Image
        src={imageUrl}
        alt={`Background image for ${title}`}
        fill
        className="object-cover"
        priority={true} // Prioritize loading as this is a key visual element
        aria-hidden="true" // Hide from screen readers as it's decorative
      />

      {/* Text Content Container */}
      <section
        className="relative z-10 text-white text-center max-w-[90%]"
        role="region"
        aria-label="Card content"
      >
        {/* Card Title */}
        <h2
          id="card-title"
          className="text-xl sm:text-[20px] md:text-4xl lg:text-[50px] font-semibold"
        >
          {title}
        </h2>

        {/* Optional Description */}
        {description && (
          <p
            className="text-sm sm:text-[18px] md:text-xl lg:text-[23px] font-normal mt-2"
            aria-label="Card description"
          >
            {description}
          </p>
        )}
      </section>

      {/* Overlay for better text contrast - if needed */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
    </article>
  );
}
