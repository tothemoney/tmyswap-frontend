import { Language } from '../LangSelector/types';
import {
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
  GithubIcon,
  DiscordIcon,
  YoutubeIcon,
  FacebookIcon,
  VkIcon,
} from '../Svg';
import { FooterLinkType } from './types';

export const footerLinks: FooterLinkType[] = [
  // {
  //   label: "About",
  //   items: [
  //     {
  //       label: "Contact",
  //       href: "https://docs.tmyswap.org/contact-us",
  //     },
      // {
      //   label: "Blog",
      //   href: "https://medium.com/pancakeswap",
      // },
      // {
      //   label: "Community",
      //   href: "https://docs.tmyswap.org/contact-us/telegram",
      // },
      // {
      //   label: "CAKE",
      //   href: "https://docs.tmyswap.org/tokenomics/cake",
      // },
  //     {
  //       label: "—",
  //     },
  //     {
  //       label: "Online Store",
  //       href: "https://pancakeswap.creator-spring.com/",
  //       isHighlighted: true,
  //     },
  //   ],
  // },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://discord.gg/EQHqDab8Mj",
      },
      // {
      //   label: "Troubleshooting",
      //   href: "https://docs.tmyswap.org/help/troubleshooting",
      // },
      {
        label: "Guides",
        href: "https://drive.google.com/drive/folders/1_0JFxV1FSWDvAVZlmlA50nAFDgZsIyLN",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Explorer",
        href: "https://tmyscan.com",
      },
      {
        label: "Github",
        href: "https://github.com/tothemoney",
      },
      {
        label: "Documentation",
        href: "https://drive.google.com/drive/folders/1_0JFxV1FSWDvAVZlmlA50nAFDgZsIyLN",
      },
      // {
      //   label: "Audits",
      //   href: "https://docs.tmyswap.org/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      // },
      // {
      //   label: "Careers",
      //   href: "https://docs.tmyswap.org/hiring/become-a-chef",
      // },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/TMYchain",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "中文",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Italiano",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "русский",
        href: "https://t.me/TMYchainRussia",
      },
      {
        label: "Türkiye",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Português",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Español",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "日本語",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Français",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Deutsch",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Filipino",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/TMYchain_chat",
      },
      {
        label: "Announcements",
        href: "https://t.me/TMYchain",
      },
    ],
  },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/tmychain",
  },
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/TMY-chain",
  },
  {
    label: "VK",
    icon: VkIcon,
    href: "https://vk.com/tmychain",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/tothemoney/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/EQHqDab8Mj",
  },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "https://medium.com/pancakeswap",
  // },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://www.youtube.com/channel/UCxlWD0LpgIP-5z17KRtO1SA\n",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
