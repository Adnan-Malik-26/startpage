// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Jammu",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dash",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "bookmarks",
          links: [
            {
              name: "raindrop",
              url: "https://app.raindrop.io",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "musicForProgramming();",
              url: "https://musicforprogramming.net",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "calendar",
              url: "https://calendar.google.com",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "sheets",
              url: "https://docs.google.com/spreadsheets",
              icon: "table",
              icon_color: palette.red,
            },
            {
              name: "drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "broflix",
              url: "https://broflix.cc/download",
              icon: "movie",
              icon_color: palette.peach,
            },
            {
              name: "forcoder",
              url: "https://forcoder.net/",
              icon: "code",
              icon_color: palette.red,
            },
            {
              name: "liber3 books",
              url: "https://liber3.eth.limo/",
              icon: "books",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "message-chatbot",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com",
              icon: "24-hours",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "brand-leetcode",
              icon_color: palette.peach,
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/",
              icon: "brand-hackerrrank",
              icon_color: palette.red,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com",
              icon: "brand-whatsapp",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "inspo",
          links: [
            {
              name: "pinterest",
              url: "https://in.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: palette.green,
            },
            {
              name: "behance",
              url: "https://www.behance.net/",
              icon: "brand-behance",
              icon_color: palette.peach,
            },
            {
              name: "awwwards",
              url: "https://www.awwwards.com/",
              icon: "trophy",
              icon_color: palette.red,
            },
            {
              name: "dribble",
              url: "https://dribbble.com/",
              icon: "brand-dribbble",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "design",
          links: [
            {
              name: "canva",
              url: "https://canva.com/",
              icon: "brand-canva",
              icon_color: palette.green,
            },
            {
              name: "fontsquirrel",
              url: "https://www.fontsquirrel.com/",
              icon: "letter-case-toggle",
              icon_color: palette.peach,
            },
            {
              name: "ilovetypography",
              url: "https://fonts.ilovetypography.com/",
              icon: "affiliate",
              icon_color: palette.red,
            },
            {
              name: "flaticon",
              url: "https://www.flaticon.com/icons",
              icon: "favicon",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
