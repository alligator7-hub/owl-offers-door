export const SITE = {
  name: "Owl Offers",
  email: "owloffersofficial@gmail.com",
  canonical: "https://alligator7-hub.github.io/owl-offers-door",
  h1: "The shop looks ready. The homeowner actually calls.",
  signature: "Alex Anderson · Owl Offers",
} as const;

export const routerBasename = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base || "/";
};
