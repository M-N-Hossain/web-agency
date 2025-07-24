import Link from "next/link";
import ServiceCard from "./ServiceCard";

import { Globe, Smartphone, Zap } from "lucide-react";







export default function ServiceDropDown({
  dict,
  lang,
  dropdownRef,
  setIsDropdownOpen,
}: any) {



   const services = [
      {
        icon: Globe,
        title: dict.services.static.title,
        description: dict.services.static.description,
        features: dict.services.static.features,
        price: dict.services.static.price,
        href: `/${lang}/services`,
        popular: false,
      },
      {
        icon: Zap,
        title: dict.services.dynamic.title,
        description: dict.services.dynamic.description,
        features: dict.services.dynamic.features,
        price: dict.services.dynamic.price,
        href: `/${lang}/services`,
        popular: true, // Mark as popular/recommended
      },
      {
        icon: Smartphone,
        title: dict.services.custom.title,
        description: dict.services.custom.description,
        features: dict.services.custom.features,
        price: dict.services.custom.price,
        href: `/${lang}/services`,
        popular: false,
      },
    ]

  return (
    <div
      ref={dropdownRef}
      className="absolute mt-[20px] w-[80vw]  left-1/2 transform -translate-x-1/2 bg-popover backdrop-blur-md border border-muted rounded-md shadow-md transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100
       flex flex-row gap-4 p-4"
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <Link
        href={`/${lang}/services`}
        className="block px-4 py-2 text-sm text-popover-foreground "
      >
        {/* {dict.nav.allServices} */}
        <ServiceCard key={1} service={services[0]} />
        {/* <Card title={dict.nav.allServices} description={dict.services.description} /> */}
      </Link>
      <Link
        href={`/${lang}/services`}
        className="block px-4 py-2 text-sm text-popover-foreground "
      >
        {/* {dict.nav.allServices} */}
        <ServiceCard key={1} service={services[0]} />
        {/* <Card title={dict.nav.allServices} description={dict.services.description} /> */}
      </Link>
      <Link
        href={`/${lang}/services`}
        className="block px-4 py-2 text-sm text-popover-foreground "
      >
        {/* {dict.nav.allServices} */}
        <ServiceCard key={1} service={services[0]} />
        {/* <Card title={dict.nav.allServices} description={dict.services.description} /> */}
      </Link>
      <Link
        href={`/${lang}/services`}
        className="block px-4 py-2 text-sm text-popover-foreground "
      >
        {/* {dict.nav.allServices} */}
        <ServiceCard key={1} service={services[0]} />
        {/* <Card title={dict.nav.allServices} description={dict.services.description} /> */}
      </Link>

      {/* <div className="block px-4 py-2 text-sm text-popover-foreground hover:bg-blue-100 hover:text-blue-500">
        {dict.services.static.title}
      </div>

      <div className="block px-4 py-2 text-sm text-popover-foreground hover:bg-blue-100 hover:text-blue-500">
        {dict.services.dynamic.title}
      </div>

      <div className="block px-4 py-2 text-sm text-popover-foreground hover:bg-blue-100 hover:text-blue-500">
        {dict.services.custom.title}
      </div> */}
    </div>
  );
}
