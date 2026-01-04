import { useQuery } from "@tanstack/react-query";

interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
  };
}

interface PexelsResponse {
  photos: PexelsPhoto[];
  page: number;
  per_page: number;
  total_results: number;
}

const PEXELS_API_URL = "https://api.pexels.com/v1/search";

export const usePexelsImages = (query: string, perPage: number = 40) => {
  return useQuery<PexelsPhoto[]>({
    queryKey: ["pexels", query, perPage],
    queryFn: async () => {
      const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

      const headers: HeadersInit = {};
      if (apiKey && apiKey !== "YOUR_API_KEY_HERE") {
        headers["Authorization"] = apiKey;
      }

      const response = await fetch(
        `${PEXELS_API_URL}?query=${encodeURIComponent(query)}&per_page=${perPage}&orientation=square`,
        { headers },
      );

      if (!response.ok) {
        throw new Error(`Pexels API error: ${response.status}`);
      }

      const data: PexelsResponse = await response.json();
      return data.photos || [];
    },
    staleTime: 1000 * 60 * 60, // Cache for 1 hour
    retry: 2,
  });
};
