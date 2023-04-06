import { useState } from "react";
import { POLYGON_BASE_URL } from "../api/config";

export default function usePolygon() {
  const [cachedTicker, setCache] = useState<any>(null);
  const getTicker = async (ticker: string) => {
    const results = fetch(
      `${POLYGON_BASE_URL}&apiKey=${"WBNJNYKI1meVw_TKpyFZQkxldexorOtp"}`,
      {
        method: "GET",
      }
    );

    setCache(
      await Promise.resolve(results).then((response) =>
        response.json().then((r) => r)
      )
    );
    return null;
  };

  return [cachedTicker, getTicker];
}
