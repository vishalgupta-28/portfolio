import { unstable_cache } from "next/cache";

import type { Activity } from "@/components/contribution-graph";
import { GITHUB_USERNAME } from "@/config/site";

type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
      );

      if (!res.ok) {
        throw new Error(`GitHub contributions API returned ${res.status}`);
      }

      const data = (await res.json()) as GitHubContributionsResponse;
      return Array.isArray(data.contributions) ? data.contributions : [];
    } catch (error) {
      console.error("Failed to fetch GitHub contributions:", error);
      return [];
    }
  },
  ["github-contributions"],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
);
