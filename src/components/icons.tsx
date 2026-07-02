import type { SVGProps } from "react";

/**
 * Shared stroke-icon set (24×24, currentColor, 1.75 stroke) used across the
 * home-page sections. Size/color via className (e.g. "h-6 w-6 text-healthcare-blue").
 */
function Base({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

/* ---- Problem / pain ---- */
export const IconFileLock = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <rect x="9" y="12.5" width="6" height="4.5" rx="1" />
    <path d="M10.5 12.5v-1a1.5 1.5 0 0 1 3 0v1" />
  </Base>
);

export const IconUsersGap = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M17 7.5h5" />
    <path d="M19.5 5v5" />
  </Base>
);

export const IconScale = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M12 3v18" />
    <path d="M7 21h10" />
    <path d="M6 7h12l-9-2" />
    <path d="M6 7l-3 6a3 3 0 0 0 6 0Z" />
    <path d="M18 7l3 6a3 3 0 0 1-6 0Z" />
  </Base>
);

/* ---- Services ---- */
export const IconShieldUser = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
    <circle cx="12" cy="10" r="2" />
    <path d="M8.5 16a3.5 3.5 0 0 1 7 0" />
  </Base>
);

export const IconRadar = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M19.07 4.93A10 10 0 1 0 21 11" />
    <path d="M15.5 8.5A5 5 0 1 0 17 12" />
    <path d="M12 12l7-7" />
    <circle cx="12" cy="12" r="1" />
  </Base>
);

export const IconClipboardCheck = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <rect x="6" y="4" width="12" height="17" rx="2" />
    <path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9z" />
    <path d="M9 13l2 2 4-4" />
  </Base>
);

export const IconKey = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <circle cx="8" cy="15" r="4" />
    <path d="M10.8 12.2 20 3" />
    <path d="M16 7l3 3" />
    <path d="M18 5l2 2" />
  </Base>
);

export const IconMail = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Base>
);

export const IconLifeBuoy = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="m5.6 5.6 3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9" />
  </Base>
);

/* ---- Why RanVault ---- */
export const IconHeartPulse = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M19 14c1.5-1.6 2-3 2-4.5A4.5 4.5 0 0 0 12 7a4.5 4.5 0 0 0-9 2.5C3 13 7 16.5 12 20c1.8-1.3 3.4-2.6 4.7-3.8" />
    <path d="M3.5 12H7l1.5-3 2 5 1.5-3h2" />
  </Base>
);

export const IconMapPin = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M12 21c4.5-4.2 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 2.5 6.8 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const IconChat = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12Z" />
    <path d="M9 11h6M9 14h4" />
  </Base>
);

export const IconTag = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M3.5 12.5 11 5h7a1 1 0 0 1 1 1v7l-7.5 7.5a1.5 1.5 0 0 1-2.1 0l-5.9-5.9a1.5 1.5 0 0 1 0-2.1Z" />
    <circle cx="15.5" cy="8.5" r="1.4" />
  </Base>
);

/* ---- UI / utility ---- */
export const IconShieldCheck = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
    <path d="m9 11.5 2 2 4-4" />
  </Base>
);

export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="m5 12 4.5 4.5L19 7" />
  </Base>
);

export const IconArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const IconPlay = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p} fill="currentColor" stroke="none">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
  </Base>
);

export const IconChevronDown = (p: SVGProps<SVGSVGElement>) => (
  <Base {...p}>
    <path d="m6 9 6 6 6-6" />
  </Base>
);
