export interface HeroResult {
  advertisement_Title: string;
  advertisement_Body: string;
  advertisement_Slogan: string;
  advertisement_Eyebrow: string;
  advertisement_Logo: string;
  advertisement_Image: string;
  advertisement_Background: string;
}

export interface HeroResponse {
  data: {
    allM_Content_Advertisement: {
      results: HeroResult[];
    };
  };
}
