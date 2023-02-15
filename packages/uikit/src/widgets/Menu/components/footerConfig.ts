import { ContextApi } from "@tmyswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("About"),
    items: [
      {
        label: t("Contact"),
        href: "https://discord.gg/EQHqDab8Mj",
        // isHighlighted: true,
      },
      // {
      //   label: t("Brand"),
      //   href: "mailto:media@tmychain.org",
      // },
      // {
      //   label: t("Blog"),
      //   href: "https://medium.com/pancakeswap",
      // },
      // {
      //   label: t("Community"),
      //   href: "https://docs.tmyswap.org/contact-us/telegram",
      // },
      {
        label: t("Litepaper"),
        href: "https://drive.google.com/drive/folders/1_0JFxV1FSWDvAVZlmlA50nAFDgZsIyLN",
      },
    ],
  },
  {
    label: t("Help"),
    items: [
      {
        label: t("Customer Support"),
        href: "https://discord.gg/EQHqDab8Mj",
      },
      // {
      //   label: t("Troubleshooting"),
      //   href: "https://docs.tmyswap.org/help/troubleshooting",
      // },
      {
        label: t("Guides"),
        href: "https://drive.google.com/drive/folders/1_0JFxV1FSWDvAVZlmlA50nAFDgZsIyLN",
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
        href: "https://drive.google.com/drive/folders/1_0JFxV1FSWDvAVZlmlA50nAFDgZsIyLN",
      },
      // {
      //   label: t("Bug Bounty"),
      //   href: "https://docs.tmyswap.org/code/bug-bounty",
      // },
      // {
      //   label: t("Audits"),
      //   href: "https://docs.tmyswap.org/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      // },
      // {
      //   label: t("Careers"),
      //   href: "https://docs.tmyswap.org/hiring/become-a-chef",
      // },
    ],
  },
];
