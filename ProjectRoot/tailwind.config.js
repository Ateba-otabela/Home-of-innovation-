import backgroundImageUrl from "./src/assets/HeroImg.jpg";

export default {
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": `linear-gradient(to bottom, rgba(2, 62, 197, 0.8), rgba(2, 62, 197, 0.8)), url(${backgroundImageUrl})`,
      },
    },
  },
};
