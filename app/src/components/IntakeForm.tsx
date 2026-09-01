import { useState, type FormEvent } from "react";
import { composeIntakeMailto, emptyIntake, type IntakeValues } from "../lib/intake";
import { SITE } from "../lib/site";

const fields: { key: keyof IntakeValues; label: string; type?: string; placeholder?: string; auto?: string; area?: boolean }[] = [
  { key: "owner", label: "Owner name", auto: "name" },
  { key: "shop", label: "Shop name" },
  { key: "url", label: "Public page URL", type: "url", placeholder: "https://" },
  { key: "category", label: "Service category", placeholder: "e.g. fence, HVAC, electrical" },
  { key: "area", label: "Service area", placeholder: "region or counties you serve" },
  { key: "email", label: "Email", type: "email", auto: "email" },
  { key: "phone", label: "Phone", type: "tel", auto: "tel" },
  { key: "blocker", label: "One thing you think is blocking calls", area: true },
];

export function IntakeForm() {
  const [values, setValues] = useState(emptyIntake);
  const [composed, setComposed] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    window.location.href = composeIntakeMailto(values);
    setComposed(true);
  }

  return (
    <form className="intake" onSubmit={onSubmit} noValidate={false}>
      {fields.map((field) => (
        <label key={field.key} className={field.area ? "span-2" : undefined}>
          {field.label}
          {field.area ? (
            <textarea
              name={field.key}
              required
              value={values[field.key]}
              onChange={(e) => setValues((v) => ({ ...v, [field.key]: e.target.value }))}
            />
          ) : (
            <input
              name={field.key}
              type={field.type ?? "text"}
              required
              autoComplete={field.auto}
              placeholder={field.placeholder}
              value={values[field.key]}
              onChange={(e) => setValues((v) => ({ ...v, [field.key]: e.target.value }))}
            />
          )}
        </label>
      ))}
      <div className="span-2 intake-actions">
        <button className="btn btn-solid" type="submit">
          Compose email with these details
        </button>
        {composed ? (
          <p className="intake-fallback" role="status">
            Your mail app should open. If it does not, write {SITE.email} yourself with the same details.
          </p>
        ) : (
          <p className="intake-fallback">
            Opens a message to {SITE.email}. Nothing is stored on this page.
          </p>
        )}
      </div>
    </form>
  );
}
