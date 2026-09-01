import { SITE } from "./site";

export type IntakeValues = {
  owner: string;
  shop: string;
  url: string;
  category: string;
  area: string;
  email: string;
  phone: string;
  blocker: string;
};

export const emptyIntake = (): IntakeValues => ({
  owner: "",
  shop: "",
  url: "",
  category: "",
  area: "",
  email: "",
  phone: "",
  blocker: "",
});

export function composeIntakeMailto(values: IntakeValues): string {
  const body = [
    `Owner name: ${values.owner}`,
    `Shop name: ${values.shop}`,
    `Public page URL: ${values.url}`,
    `Service category: ${values.category}`,
    `Service area: ${values.area}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `One blocker: ${values.blocker}`,
  ].join("\n");

  const shop = values.shop.trim() || "shop";
  return (
    `mailto:${SITE.email}` +
    `?subject=${encodeURIComponent(`Public page look — ${shop}`)}` +
    `&body=${encodeURIComponent(body)}`
  );
}
