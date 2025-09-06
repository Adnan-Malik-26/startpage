// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = mocha;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Jammu",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "IN",
      timezone: "Asia/Kolkata",
      format: "k: i p",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
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
              name: "slides",
              url: "https://slides.google.com",
              icon: "slideshow",
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
              icon_color: palette.green,
            },
            {
              name: "yts.mx",
              url: "https://yts.mx",
              icon: "movie",
              icon_color: palette.peach,
            },
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: palette.red,
            },

          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
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
              name: "r/programming",
              url: "https://github.com/r/programming",
              icon: "code",
              icon_color: palette.peach,
            },
            {
              name: "vercel",
              url: "https://vercel.com/adnanmalik26s-projects",
              icon: "brand-vercel",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Artificial Intelligence",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "brand-openai",
              icon_color: palette.green,
            },
            {
              name: "gemini",
              url: "https://gemini.google.com",
              icon: "zodiac-gemini",
              icon_color: palette.peach,
            },
            {
              name: "v0",
              url: "https://v0.app",
              icon: "brand-vercel",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
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
              name: "Reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: "r/unixporn",
              url: "https://www.reddit.com/r/unixporn",
              icon: "terminal",
              icon_color: palette.red,
            },

          ],
        },
        {
          name: "Reading",
          links: [
            {
              name: "myBlog",
              url: "https://adnanmalik.vercel.app/blog",
              icon: "markdown",
              icon_color: palette.green,
            },
            {
              name: "web.dev",
              url: "https://web.dev",
              icon: "code",
              icon_color: palette.peach,
            },
            {
              name: "ploeh blog",
              url: "https://blog.ploeh.dk/",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "medium",
              url: "https://medium.com",
              icon: "brand-medium",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "animekai",
              url: "https://animekai.to/",
              icon: "hexagon-letter-k",
              icon_color: palette.peach,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "yts.mx",
              url: "https://yts.rs/",
              icon: "movie",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },

  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
