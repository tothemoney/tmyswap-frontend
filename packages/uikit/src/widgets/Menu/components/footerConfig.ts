import { ContextApi } from "@tmyswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Contact"),
        href: "https://docs.tmyswap.org/contact-us",
        isHighlighted: true,
      },
      {
        label: t("Brand"),
        href: "https://docs.tmyswap.org/brand",
      },
      // {
      //   label: t("Blog"),
      //   href: "https://medium.com/pancakeswap",
      // },
      {
        label: t("Community"),
        href: "https://docs.tmyswap.org/contact-us/telegram",
      },
      {
        label: t("Litepaper"),
        href: "https://v2litepaper.tmyswap.org/",
      },
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://docs.tmyswap.org/contact-us/customer-support",
      },
      {
        label: t("Troubleshooting"),
        href: "https://docs.tmyswap.org/help/troubleshooting",
      },
      {
        label: t("Guides"),
        href: "https://docs.tmyswap.org/get-started",
      },
    ],
  },
  {
    label: t("Developers"),
    items: [
      {
        label: "Github",
        href: "https://github.com/tothemoney",
      },
      {
        label: t("Documentation"),
        href: "https://docs.tmyswap.org",
      },
      {
        label: t("Bug Bounty"),
        href: "https://docs.tmyswap.org/code/bug-bounty",
      },
      {
        label: t("Audits"),
        href: "https://docs.tmyswap.org/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: t("Careers"),
        href: "https://docs.tmyswap.org/hiring/become-a-chef",
      },
    ],
  },
];
