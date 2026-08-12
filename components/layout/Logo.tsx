import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative block h-8 w-[110px] sm:h-9 sm:w-[124px]", className)}>
      <Image
        src="/logo_zahdigit_trimmed.png"
        alt="ZahDigit"
        fill
        sizes="130px"
        className="object-contain object-left"
        priority
      />
    </Link>
  );
}
