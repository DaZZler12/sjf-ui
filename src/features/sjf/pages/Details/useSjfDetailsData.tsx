// this is a custom hook that fetches the data for the SJF details page
// by the help of websockets and then this data will be used to render the
// details page.

import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { sjfUrls } from "../../urls/sjfUrls";
import { wsUrl } from "../../../../baseConfig";

const useSjfDetailsData = () => {
  const location = useLocation();
  const id = location.pathname.split("/").slice(-2, -1)[0];
  const [data, setData] = useState<any>(null); // can be used more specific type
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const wsPath = sjfUrls.sjf.v1.getV1WebSocket(id);
    const completeWSUrl = `${wsUrl}${wsPath}`;
    ws.current = new WebSocket(completeWSUrl);
    // ws.current.onopen = () => setIsLoading(false);

    ws.current.onmessage = (e) => {
      try {
        const messageData = JSON.parse(e.data);
        setData(messageData);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to parse WebSocket message.");
        console.error("Error parsing JSON:", error);
        setIsLoading(false);
      }
    };
    ws.current.onerror = (e) => {
      setError("WebSocket connection error.");
      console.error("WebSocket Error: ", e);
    };
    // ws.current.onclose = () => setIsLoading(false);

    return () => ws.current?.close();
  }, [id]);

  const transformedDuration = (duration: number) => {
    const totalSeconds = duration / 1000000000;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secondsWithDecimal = (totalSeconds % 60).toFixed(4); // Keeping 3 decimal places for milliseconds
    return `${hours}h ${minutes}m ${secondsWithDecimal}s`;
  };

  return { data, isLoading, error, transformedDuration };
};

export default useSjfDetailsData;
