import { AlertCircle } from "lucide-react";

interface BookingStepContactProps {
  name: string;
  phone: string;
  email: string;
  onNameChange: (name: string) => void;
  onPhoneChange: (phone: string) => void;
  onEmailChange: (email: string) => void;
}

export function BookingStepContact({
  name,
  phone,
  email,
  onNameChange,
  onPhoneChange,
  onEmailChange,
}: BookingStepContactProps) {
  const nameError = name === "" ? "Name is required" : "";
  const phoneError = phone === "" ? "Phone number is required" : "";
  const emailError = email === "" ? "Email is required" : "";
  const isValid = !nameError && !phoneError && !emailError;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-[24px] leading-[1.3] tracking-tight text-foreground lg:text-[32px]">
          Contact Information
        </h2>
        <p className="mt-2 text-base text-muted-foreground lg:text-lg">
          Provide your contact details so we can follow up on your enquiry.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Your name"
            className={`w-full min-h-[44px] rounded-[4px] border bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-border-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              nameError ? "border-destructive" : "border-border"
            }`}
            aria-describedby={nameError ? "name-error" : undefined}
            aria-invalid={!!nameError}
          />
          {nameError && (
            <p
              id="name-error"
              className="flex items-center gap-1 text-sm text-destructive"
              role="alert"
            >
              <AlertCircle className="size-4" strokeWidth={1.5} />
              {nameError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground"
          >
            Phone <span className="text-destructive">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="Your phone number"
            className={`w-full min-h-[44px] rounded-[4px] border bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-border-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              phoneError ? "border-destructive" : "border-border"
            }`}
            aria-describedby={phoneError ? "phone-error" : undefined}
            aria-invalid={!!phoneError}
          />
          {phoneError && (
            <p
              id="phone-error"
              className="flex items-center gap-1 text-sm text-destructive"
              role="alert"
            >
              <AlertCircle className="size-4" strokeWidth={1.5} />
              {phoneError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="your@email.com"
            className={`w-full min-h-[44px] rounded-[4px] border bg-surface px-4 py-3 text-base text-foreground outline-none transition-colors focus-visible:border-border-interactive focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              emailError ? "border-destructive" : "border-border"
            }`}
            aria-describedby={emailError ? "email-error" : undefined}
            aria-invalid={!!emailError}
          />
          {emailError && (
            <p
              id="email-error"
              className="flex items-center gap-1 text-sm text-destructive"
              role="alert"
            >
              <AlertCircle className="size-4" strokeWidth={1.5} />
              {emailError}
            </p>
          )}
        </div>
      </div>

    </div>
  );
}
