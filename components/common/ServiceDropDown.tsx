import ServiceCard from "@/components/features/services/service-card/service-card";
import { getServices } from "@/lib/data/services";
import type { ComponentWithDict } from "@/lib/types";
import Link from "next/link";

interface ServiceDropDownProps extends ComponentWithDict {
  dropdownRef: React.RefObject<HTMLDivElement>;
  setIsDropdownOpen: (open: boolean) => void;
}

export default function ServiceDropDown({
  dict,
  lang,
  dropdownRef,
  setIsDropdownOpen,
}: ServiceDropDownProps) {
  const services = getServices(dict, lang)

  return (
    <div
      ref={dropdownRef}
      className="absolute mt-[20px] w-[80vw] left-1/2 transform -translate-x-1/2 bg-transparent backdrop-blur-md border border-muted rounded-md shadow-md transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 flex flex-row gap-4 p-4"
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      {services.map((service) => (
        <Link
          key={service.id}
          href={service.href}
          className="block px-4 py-2 text-sm text-popover-foreground"
        >
          <ServiceCard service={service} variant="compact" />
        </Link>
      ))}
    </div>
  );
}
