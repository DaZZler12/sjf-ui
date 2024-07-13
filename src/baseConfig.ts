export const mainUrl = window.location.origin.includes("localhost")
  ? "http://localhost:8080/api"
  : window.location.origin + "/api";
