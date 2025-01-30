// Import UI components from local component library
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarCardProps {
  classes?: string; // Optional CSS classes to extend styling
}

/**
 * SmallAvatarCard - A compact card component displaying fundraising information
 * with a small avatar and donor details
 *
 * @param {AvatarCardProps} props - Component props
 * @returns JSX card element with fundraising details and avatar
 */
export function SmallAvatarCard({ classes }: AvatarCardProps) {
  return (
    <Card
      className={
        "rounded-[15px] shadow-custom bg-white/60 backdrop-blur-md w-[280px] h-[173px] p-[10px] relative z-10 p-3" +
        " " +
        classes
      }
    >
      {/* Card body showing amount raised and campaign details */}
      <CardContent className="text-[14px] font-[400]">
        <span className="text-[18px] font-[600]">XAF 500,000</span> raised for
        Njeng Solomon&apos;s prostrate cancer surgery.
      </CardContent>

      {/* Card footer with donor avatar and details */}
      <CardFooter>
        <div className="flex jusstify-start items-center gap-[9px]">
          <Avatar className="w-[50px] h-[50px]">
            <AvatarImage
              className="rounded-0"
              src="https://github.com/shadcn.png"
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[16px] font-[400] text-gray8">Started by</p>
            <p className="text-[18px] font-[400] text-gray2"> Njeng Loveline</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

/**
 * BigAvatarCard - A wider card component with larger avatar and fundraising details
 * displayed in a horizontal layout
 *
 * @param {AvatarCardProps} props - Component props
 * @returns JSX card element with large avatar and fundraising information
 */
export function BigAvatarCard({ classes }: AvatarCardProps) {
  return (
    <Card
      className={
        "rounded-[15px] shadow-custom bg-white/60 backdrop-blur-md w-[402px] h-[135px] relative z-9 p-3" +
        " " +
        classes
      }
    >
      {/* Card content with large avatar and fundraising details in horizontal layout */}
      <CardContent className="p-0 flex gap-[19px] items-center justify-start text-[14px] font-[400] text-white">
        <div>
          <Avatar className="w-[100px] h-[112px] rounded-[12px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p>
            <span className="text-[18px] font-[600]">XAF 500,000</span> raised
            for Njeng Solomon&apos;s prostrate cancer surgery.
          </p>
          <p>
            <span className="text-[16px] font-[400]">Started by</span>
            <span className="text-[18px] font-[400]"> Njeng Loveline</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
