import { aiService } from "../../services/ai-service";
import { newsBiasData, BiasRating } from "./news-bias-list";
import { NEWS_BIAS_PROMPT } from "../../services/ai-service/prompts";

export const NewsBiasService = {
  isNewsSource(domain: string): boolean {
    return Object.keys(newsBiasData).some((news) => domain.includes(news));
  },

  getBiasRating(domain: string): BiasRating | null {
    const newsSource = Object.keys(newsBiasData).find((news) =>
      domain.includes(news)
    );
    return newsSource ? newsBiasData[newsSource] : null;
  },
  getAIBiasRating(pageContent: string, domain: string): Promise<string> {
    const start = Math.max(0, Math.floor((pageContent.length - 2000) / 2));
    const end = start + 2000;
    const contentSlice = pageContent.slice(start, end);

    const prompt = `
    Here is the page content that you will use to determine the bias of the news source:
    ----------------------------
    "${contentSlice}"
    ----------------------------

    Please attempt to give it a bias rating based on the content.
    `;

    return aiService.prompt(
      prompt,
      NEWS_BIAS_PROMPT + `\n\nThe domain of the page is ${domain}`
    );
  },
};
