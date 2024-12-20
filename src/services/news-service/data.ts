export const BIAS_TO_COLOR = {
  "center-left": "var(--news-bias-left-center)",
  "center-right": "var(--news-bias-right-center)",
  left: "var(--news-bias-left)",
  right: "var(--news-bias-right)",
  center: "var(--news-bias-center)",
};

export type BiasRating = {
  name: string;
  bias: "left" | "center-left" | "center" | "center-right" | "right";
  reliability: number; // 1-10 scale
  description: string;
};

export const newsBiasData: Record<string, BiasRating> = {
  "nytimes.com": {
    name: "The New York Times",
    bias: "center-left",
    reliability: 8,
    description: "Generally factual reporting with slight liberal bias",
  },
  "foxnews.com": {
    name: "Fox News",
    bias: "right",
    reliability: 6,
    description: "Right-leaning coverage with mixed factual reporting",
  },
  "reuters.com": {
    name: "Reuters",
    bias: "center",
    reliability: 9,
    description: "Highly factual reporting with minimal bias",
  },
  "cnn.com": {
    name: "CNN",
    bias: "center-left",
    reliability: 7,
    description:
      "News coverage with a liberal perspective and generally reliable reporting",
  },
  "bbc.com": {
    name: "BBC",
    bias: "center",
    reliability: 9,
    description: "International news with high reliability and minimal bias",
  },
  "wsj.com": {
    name: "The Wall Street Journal",
    bias: "center-right",
    reliability: 8,
    description: "Business-focused news with a conservative editorial stance",
  },
  "theguardian.com": {
    name: "The Guardian",
    bias: "left",
    reliability: 7,
    description:
      "Progressive news outlet with reliable reporting and liberal bias",
  },
  "breitbart.com": {
    name: "Breitbart News",
    bias: "right",
    reliability: 4,
    description:
      "Right-wing news outlet with mixed reliability and strong conservative bias",
  },
  "huffpost.com": {
    name: "HuffPost",
    bias: "left",
    reliability: 6,
    description: "Liberal news and opinion with variable factual accuracy",
  },
  "npr.org": {
    name: "NPR",
    bias: "center-left",
    reliability: 9,
    description:
      "Nonprofit media organization with high reliability and slight liberal bias",
  },
  "usatoday.com": {
    name: "USA Today",
    bias: "center",
    reliability: 8,
    description: "National news with minimal bias and reliable reporting",
  },
  "aljazeera.com": {
    name: "Al Jazeera",
    bias: "center-left",
    reliability: 7,
    description:
      "International news with slight liberal bias and generally reliable reporting",
  },
  "thehill.com": {
    name: "The Hill",
    bias: "center",
    reliability: 7,
    description:
      "Political news with balanced coverage and moderate reliability",
  },
  "theintercept.com": {
    name: "The Intercept",
    bias: "left",
    reliability: 6,
    description:
      "Investigative journalism with progressive perspectives and variable reliability",
  },
  "apnews.com": {
    name: "Associated Press",
    bias: "center",
    reliability: 9,
    description: "Associated Press with high reliability and minimal bias",
  },
  "buzzfeednews.com": {
    name: "BuzzFeed News",
    bias: "left",
    reliability: 6,
    description: "Digital media with liberal bias and variable reliability",
  },
  "oann.com": {
    name: "One America News Network",
    bias: "right",
    reliability: 4,
    description:
      "Right-wing news with low reliability and strong conservative bias",
  },
  "newsmax.com": {
    name: "Newsmax",
    bias: "right",
    reliability: 5,
    description: "Conservative news with mixed factual reporting",
  },
  "vox.com": {
    name: "Vox",
    bias: "left",
    reliability: 7,
    description:
      "Explanatory journalism with liberal bias and generally reliable reporting",
  },
  "economist.com": {
    name: "The Economist",
    bias: "center-right",
    reliability: 9,
    description:
      "International news with economic focus, high reliability, and slight conservative bias",
  },
  "washingtonpost.com": {
    name: "The Washington Post",
    bias: "center-left",
    reliability: 8,
    description:
      "National news with liberal editorial stance and reliable reporting",
  },
  "latimes.com": {
    name: "Los Angeles Times",
    bias: "center-left",
    reliability: 8,
    description:
      "Regional news with slight liberal bias and reliable reporting",
  },
  "nypost.com": {
    name: "New York Post",
    bias: "right",
    reliability: 6,
    description:
      "Tabloid-style news with conservative bias and mixed reliability",
  },
  "rt.com": {
    name: "RT (Russia Today)",
    bias: "right",
    reliability: 4,
    description:
      "Russian state-funded media with low reliability and strong conservative bias",
  },
  "abcnews.go.com": {
    name: "ABC News",
    bias: "center-left",
    reliability: 7,
    description:
      "Mainstream news with slight liberal bias and generally reliable reporting",
  },
  "cbsnews.com": {
    name: "CBS News",
    bias: "center-left",
    reliability: 7,
    description:
      "Mainstream news with slight liberal bias and generally reliable reporting",
  },
  "nbcnews.com": {
    name: "NBC News",
    bias: "center-left",
    reliability: 7,
    description:
      "Mainstream news with slight liberal bias and generally reliable reporting",
  },
  "forbes.com": {
    name: "Forbes",
    bias: "center-right",
    reliability: 7,
    description:
      "Business news with slight conservative bias and generally reliable reporting",
  },
  "thedailybeast.com": {
    name: "The Daily Beast",
    bias: "left",
    reliability: 6,
    description: "Liberal news and opinion with variable factual accuracy",
  },
  "motherjones.com": {
    name: "Mother Jones",
    bias: "left",
    reliability: 7,
    description:
      "Investigative journalism with progressive bias and generally reliable reporting",
  },
  "nationalreview.com": {
    name: "National Review",
    bias: "right",
    reliability: 7,
    description:
      "Conservative news and opinion with generally reliable reporting",
  },
  "theatlantic.com": {
    name: "The Atlantic",
    bias: "center-left",
    reliability: 8,
    description:
      "Cultural and political analysis with slight liberal bias and high reliability",
  },
  "wsws.org": {
    name: "World Socialist Web Site",
    bias: "left",
    reliability: 5,
    description:
      "Socialist perspective with strong left-wing bias and mixed reliability",
  },
  "democracynow.org": {
    name: "Democracy Now!",
    bias: "left",
    reliability: 7,
    description:
      "Progressive news with liberal bias and generally reliable reporting",
  },
  "theblaze.com": {
    name: "The Blaze",
    bias: "right",
    reliability: 5,
    description: "Conservative news and opinion with variable factual accuracy",
  },
  "infowars.com": {
    name: "Infowars",
    bias: "right",
    reliability: 2,
    description: "Content with far-right bias and low reliability",
  },
  "theepochtimes.com": {
    name: "The Epoch Times",
    bias: "right",
    reliability: 5,
    description:
      "Conservative news with mixed factual reporting and strong bias",
  },
  "newsweek.com": {
    name: "Newsweek",
    bias: "center",
    reliability: 7,
    description:
      "News magazine with balanced reporting and moderate reliability",
  },
  "foreignpolicy.com": {
    name: "Foreign Policy",
    bias: "center",
    reliability: 8,
    description:
      "International relations news with minimal bias and high reliability",
  },
  "newyorker.com": {
    name: "The New Yorker",
    bias: "left",
    reliability: 8,
    description:
      "Cultural and political commentary with liberal bias and high reliability",
  },
  "time.com": {
    name: "TIME",
    bias: "center",
    reliability: 8,
    description: "News magazine with balanced reporting and high reliability",
  },
  "politico.com": {
    name: "Politico",
    bias: "center-left",
    reliability: 7,
    description:
      "Political news with slight liberal bias and generally reliable reporting",
  },
  "slate.com": {
    name: "Slate",
    bias: "left",
    reliability: 7,
    description: "Liberal news and opinion with generally reliable reporting",
  },
  "thedailycaller.com": {
    name: "The Daily Caller",
    bias: "right",
    reliability: 6,
    description: "Conservative news and opinion with mixed factual reporting",
  },
  "reason.com": {
    name: "Reason",
    bias: "center-right",
    reliability: 7,
    description:
      "Libertarian perspective with conservative lean and generally reliable reporting",
  },
  "drudgereport.com": {
    name: "Drudge Report",
    bias: "right",
    reliability: 5,
    description: "Conservative news aggregation with variable reliability",
  },
  "pjmedia.com": {
    name: "PJ Media",
    bias: "right",
    reliability: 5,
    description:
      "Conservative news and commentary with variable factual accuracy",
  },
  "theamericanconservative.com": {
    name: "The American Conservative",
    bias: "right",
    reliability: 7,
    description:
      "Conservative news and analysis with generally reliable reporting",
  },
  "jacobinmag.com": {
    name: "Jacobin",
    bias: "left",
    reliability: 7,
    description:
      "Socialist magazine with strong left-wing bias and generally reliable reporting",
  },
  "mediabiasfactcheck.com": {
    name: "Media Bias/Fact Check",
    bias: "center",
    reliability: 8,
    description:
      "Media bias and fact-checking website with minimal bias and high reliability",
  },
  "factcheck.org": {
    name: "FactCheck.org",
    bias: "center",
    reliability: 9,
    description:
      "Nonpartisan fact-checking with high reliability and minimal bias",
  },
  "snopes.com": {
    name: "Snopes",
    bias: "center",
    reliability: 8,
    description:
      "Fact-checking website with minimal bias and generally reliable reporting",
  },
  "politifact.com": {
    name: "PolitiFact",
    bias: "center",
    reliability: 8,
    description: "Fact-checking website with minimal bias and high reliability",
  },
  "bloomberg.com": {
    name: "Bloomberg",
    bias: "center",
    reliability: 8,
    description: "Financial news with minimal bias and high reliability",
  },
  "marketwatch.com": {
    name: "MarketWatch",
    bias: "center",
    reliability: 8,
    description: "Financial news with minimal bias and high reliability",
  },
  "axios.com": {
    name: "Axios",
    bias: "center-left",
    reliability: 7,
    description:
      "News outlet with slight liberal bias and generally reliable reporting",
  },
  "propublica.org": {
    name: "ProPublica",
    bias: "center-left",
    reliability: 9,
    description:
      "Investigative journalism with slight liberal bias and high reliability",
  },
  "nationalgeographic.com": {
    name: "National Geographic",
    bias: "center",
    reliability: 9,
    description:
      "Science and exploration news with minimal bias and high reliability",
  },
  "scientificamerican.com": {
    name: "Scientific American",
    bias: "center-left",
    reliability: 8,
    description: "Science news with slight liberal bias and high reliability",
  },
  "dailymail.co.uk": {
    name: "Daily Mail",
    bias: "right",
    reliability: 5,
    description: "Tabloid news with conservative bias and mixed reliability",
  },
  "thetimes.co.uk": {
    name: "The Times",
    bias: "center-right",
    reliability: 8,
    description: "UK news with slight conservative bias and reliable reporting",
  },
  "telegraph.co.uk": {
    name: "The Telegraph",
    bias: "right",
    reliability: 7,
    description:
      "UK news with conservative bias and generally reliable reporting",
  },
  "mirror.co.uk": {
    name: "Daily Mirror",
    bias: "left",
    reliability: 5,
    description: "Tabloid news with liberal bias and mixed reliability",
  },
  "thesun.co.uk": {
    name: "The Sun",
    bias: "right",
    reliability: 4,
    description: "Tabloid news with conservative bias and low reliability",
  },
  "ft.com": {
    name: "Financial Times",
    bias: "center-right",
    reliability: 9,
    description:
      "Financial Times with high reliability and slight conservative bias",
  },
  "dw.com": {
    name: "Deutsche Welle",
    bias: "center",
    reliability: 8,
    description:
      "German international broadcaster with minimal bias and reliable reporting",
  },
  "france24.com": {
    name: "France 24",
    bias: "center",
    reliability: 8,
    description:
      "French international news with minimal bias and reliable reporting",
  },
  "globalnews.ca": {
    name: "Global News",
    bias: "center",
    reliability: 7,
    description:
      "Canadian news with minimal bias and generally reliable reporting",
  },
  "cbc.ca": {
    name: "CBC News",
    bias: "center-left",
    reliability: 8,
    description:
      "Canadian public broadcaster with slight liberal bias and reliable reporting",
  },
  "smh.com.au": {
    name: "The Sydney Morning Herald",
    bias: "center-left",
    reliability: 8,
    description:
      "Australian news with slight liberal bias and reliable reporting",
  },
  "abc.net.au": {
    name: "ABC (Australia)",
    bias: "center-left",
    reliability: 8,
    description:
      "Australian public broadcaster with slight liberal bias and reliable reporting",
  },
  "timesofindia.indiatimes.com": {
    name: "The Times of India",
    bias: "center",
    reliability: 7,
    description: "Indian news with minimal bias and moderate reliability",
  },
  // Add more news sources as needed
};

// TODO: Combine this with above to just use one list
export const newsSites = [
  "nytimes.com",
  "foxnews.com",
  "reuters.com",
  "cnn.com",
  "bbc.com",
  "wsj.com",
  "theguardian.com",
  "breitbart.com",
  "huffpost.com",
  "npr.org",
  "usatoday.com",
  "aljazeera.com",
  "thehill.com",
  "theintercept.com",
  "apnews.com",
  "buzzfeednews.com",
  "oann.com",
  "newsmax.com",
  "vox.com",
  "economist.com",
  "washingtonpost.com",
  "latimes.com",
  "nypost.com",
  "rt.com",
  "abcnews.go.com",
  "cbsnews.com",
  "nbcnews.com",
  "forbes.com",
  "thedailybeast.com",
  "motherjones.com",
  "nationalreview.com",
  "theatlantic.com",
  "wsws.org",
  "democracynow.org",
  "theblaze.com",
  "infowars.com",
  "theepochtimes.com",
  "newsweek.com",
  "foreignpolicy.com",
  "newyorker.com",
  "time.com",
  "politico.com",
  "slate.com",
  "thedailycaller.com",
  "reason.com",
  "drudgereport.com",
  "pjmedia.com",
  "theamericanconservative.com",
  "jacobinmag.com",
  "mediabiasfactcheck.com",
  "factcheck.org",
  "snopes.com",
  "politifact.com",
  "bloomberg.com",
  "marketwatch.com",
  "axios.com",
  "propublica.org",
  "nationalgeographic.com",
  "scientificamerican.com",
  "dailymail.co.uk",
  "thetimes.co.uk",
  "telegraph.co.uk",
  "mirror.co.uk",
  "thesun.co.uk",
  "ft.com",
  "dw.com",
  "france24.com",
  "globalnews.ca",
  "cbc.ca",
  "smh.com.au",
  "abc.net.au",
  "timesofindia.indiatimes.com",
];
