import Image from "next/image";

export default function Logo({ className }: { className: string }) {
  return (
    <Image alt="niche ai logo" width={200} height={200} src="/images/niche-ai-logo.png" />
  );
}
