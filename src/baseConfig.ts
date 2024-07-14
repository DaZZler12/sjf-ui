export const mainUrl = window.location.origin.includes("localhost")
  ? "http://localhost:8080/api"
  : window.location.origin + "/api";

// websocket urls
export const wsUrl = window.location.origin.includes("localhost")
  ? "ws://localhost:8080/api"
  : window.location.origin + "/api";
