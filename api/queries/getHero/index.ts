import { HeroResult } from '../../../interfaces/hero';

export const getHero = async (): Promise<{ hero: HeroResult }> => {
  const heroElmResult: HeroResult = {
    advertisement_Title: 'Welcome to Eurobank ATM',
    advertisement_Body: '',
    advertisement_Slogan: '',
    advertisement_Eyebrow: '',
    advertisement_Logo:
      'https://www.eurobank.gr/-/media/eurobank/logo/eurobank_svg.svg?iar=0&hash=AFECAAF98ECF72F4B9668773B96256D5',
    advertisement_Image:
      'https://www.atcom.gr/files/productions/Eurobank_ATM/Eurobank_ATMs_1920x1080_01.jpg',
    advertisement_Background:
      'https://www.atcom.gr/files/productions/Eurobank_ATM/Eurobank_ATMs_1920x1080_01.jpg',
  };

  return {
    hero: heroElmResult,
  };
};
