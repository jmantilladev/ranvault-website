import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import {
  SealCheck,
  Eye,
  GraduationCap,
  UserFocus,
  MagnifyingGlass,
  Stack,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

export type Service = {
  slug: string;
  Icon: PhosphorIcon;
  title: string;
  /** One-line, benefit-first hook for the /services zig-zag blocks. */
  tagline: string;
  /** Short copy for the homepage card grid. */
  summary: string;
  /** Full copy for the dedicated /services page. */
  detail: string;
  /** Concrete "What you get" deliverables shown on the /services page. */
  deliverables: string[];
  /** Highlighted with a persistent teal accent on the homepage grid. */
  featured: boolean;
  /** Whether this service appears in the homepage six-card grid. */
  onHomepage: boolean;
};

/**
 * Single source of truth for the service catalogue. The homepage shows the six
 * cards flagged `onHomepage` (using `summary`); the /services page shows all
 * seven with their `tagline`, full `detail`, and `deliverables`.
 */
export const SERVICES: Service[] = [
  {
    slug: "hipaa-compliance",
    Icon: SealCheck,
    title: "HIPAA & Compliance Made Simple",
    tagline: "Get compliant and stay compliant, without the headache.",
    summary:
      "We guide you through HIPAA and 42 CFR Part 2 from start to finish. We find your gaps, build the documentation, and get you audit-ready, then keep you compliant as rules change, so you're never scrambling before an inspection.",
    detail:
      "We guide you through HIPAA, 42 CFR Part 2, and other healthcare compliance requirements from start to finish. We begin by finding the gaps between where your clinic stands today and what the rules actually require, then build a clear, prioritized plan to close them. We handle the policies, the documentation, and the technical safeguards, and we prepare your team for what to expect in an audit. Compliance is not a one-time task. We keep your clinic current as regulations change, so you are always ready and never scrambling before an inspection.",
    deliverables: [
      "A full gap assessment against HIPAA and 42 CFR Part 2",
      "Ready-to-use policies and documentation",
      "Audit preparation and support",
      "Ongoing compliance updates as rules change",
    ],
    featured: true,
    onHomepage: true,
  },
  {
    slug: "threat-monitoring",
    Icon: Eye,
    title: "Around-the-Clock Threat Monitoring",
    tagline: "Someone watching your systems, so you don't have to.",
    summary:
      "We watch your systems continuously so threats get caught and stopped before they become breaches. You won't be buried in confusing alerts. When something real happens, we handle it and keep you informed every step of the way.",
    detail:
      "We keep continuous watch over your systems, patient data, and cloud tools so suspicious activity is caught early. We filter out the routine noise so your team is never buried in meaningless alerts, and the threats that actually matter get immediate attention and a fast, coordinated response. When something needs action, we move quickly to contain it and keep you informed at every step. You also receive regular, plain language reporting so you always understand your clinic's security over time.",
    deliverables: [
      "Continuous monitoring of your systems and data",
      "Fast response when real threats appear",
      "No flood of confusing alerts",
      "Regular, easy-to-understand security reports",
    ],
    featured: true,
    onHomepage: true,
  },
  {
    slug: "staff-training",
    Icon: GraduationCap,
    title: "Staff Training That Actually Sticks",
    tagline: "Turn your team into your first line of defense.",
    summary:
      "Most breaches start with one staff member clicking one bad email. We train your team to spot phishing and handle patient data safely, with short, practical sessions built for busy clinic staff, not boring hour-long lectures they'll forget.",
    detail:
      "Most breaches start with one staff member clicking one bad email. We train your team to recognize phishing attempts, handle patient data safely, and follow good security habits day to day. Our sessions are short, practical, and built for busy clinic staff, not long technical lectures they will forget. The result is a team that becomes your first line of defense instead of your biggest vulnerability.",
    deliverables: [
      "Short, practical phishing and security training",
      "Safe patient-data handling habits for staff",
      "Sessions designed for busy clinic schedules",
      "A team that helps protect the clinic instead of exposing it",
    ],
    featured: true,
    onHomepage: true,
  },
  {
    slug: "security-leadership",
    Icon: UserFocus,
    title: "Security Leadership Without the Salary",
    tagline: "Executive-level security guidance, sized for your clinic.",
    summary:
      "You get an experienced security expert guiding your clinic's protection, without paying for a full-time executive. We set the strategy, handle the hard decisions, and keep your leadership informed in plain language, not tech jargon.",
    detail:
      "You get experienced, executive-level security leadership on a flexible basis, without the cost of a full-time hire. We work directly with your leadership to set security strategy, develop and maintain policy, oversee risk, and report your security posture in language you actually understand. We also guide your response when something goes wrong and help oversee the risk from vendors and third parties. This is ideal for clinics that need experienced strategic direction but are not ready to staff a full-time security executive.",
    deliverables: [
      "A dedicated security expert guiding your clinic",
      "Clear security strategy and policies",
      "Risk oversight, including vendors and third parties",
      "Plain-language reporting for your leadership",
    ],
    featured: false,
    onHomepage: true,
  },
  {
    slug: "find-the-gaps",
    Icon: MagnifyingGlass,
    title: "Find the Gaps Before Problems Start",
    tagline: "Test your defenses before someone else does.",
    summary:
      "We test your defenses safely to find weak spots before they can be used against you. You get a clear report of what needs fixing, ranked by what actually matters, plus hands-on help fixing it.",
    detail:
      "The best way to know how your defenses hold up is to test them safely, the same way a real attacker would. We probe your networks, applications, and cloud tools to uncover weaknesses before they can be used against you. We focus on findings that genuinely matter, not noisy reports full of low-impact issues. Every test ends with a clear, prioritized report ranked by real-world risk, plus concrete, hands-on help fixing what we find and confirming it is resolved.",
    deliverables: [
      "Safe, real-world testing of your defenses",
      "A clear report ranked by what actually matters",
      "Hands-on help fixing the issues found",
      "Retesting to confirm problems are resolved",
    ],
    featured: false,
    onHomepage: true,
  },
  {
    slug: "secure-systems",
    Icon: Stack,
    title: "Secure Systems From the Ground Up",
    tagline: "Security built in from day one, not bolted on later.",
    summary:
      "Whether your clinic runs on local computers, the cloud, or both, we build your systems with security designed in from the start, not bolted on later. That means controlling who can access patient data and keeping it protected everywhere it lives.",
    detail:
      "Security works best when it is built in from the start, not bolted on later. Whether your clinic runs on local computers, the cloud, or a mix of both, we help design and set up your systems with strong security foundations: controlling who can access patient data, protecting that data everywhere it lives, and keeping consistent safeguards across your whole environment. We also support secure setups and migrations, so when you adopt new tools or platforms, security is part of the plan from day one instead of an expensive afterthought.",
    deliverables: [
      "Secure setup for local, cloud, or hybrid systems",
      "Strong control over who accesses patient data",
      "Consistent protection across all your tools",
      "Security built into new setups and migrations",
    ],
    featured: false,
    onHomepage: false,
  },
  {
    slug: "safe-ai",
    Icon: Robot,
    title: "Safe AI for Your Clinic",
    tagline: "Use AI tools without risking patient privacy.",
    summary:
      "More clinics are using AI tools for notes, scheduling, and admin work, but these tools can quietly expose patient data. We help you use AI safely, with clear policies on what's allowed, so you get the benefits without putting patient privacy at risk.",
    detail:
      "More clinics are using AI tools for notes, scheduling, and administrative work, but these tools can quietly expose patient data. We help you understand where AI use may be creating risk, including sensitive data leaking through AI tools and staff using AI apps without oversight. Then we build practical, plain language policies for what is allowed, so your clinic gets the benefits of AI without putting patient privacy or compliance at risk.",
    deliverables: [
      "A review of where AI may be exposing patient data",
      "Clear, plain-language AI use policies",
      "Guidance on which AI tools are safe to use",
      "Protection for patient privacy and compliance",
    ],
    featured: false,
    onHomepage: true,
  },
];

export const HOMEPAGE_SERVICES = SERVICES.filter((s) => s.onHomepage);
