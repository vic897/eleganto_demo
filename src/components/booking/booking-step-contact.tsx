import { AlertCircle, User, Phone, Mail } from "lucide-react";

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
  const nameError = name === "" ? "Full name is required" : "";
  const phoneError = phone === "" ? "Phone number is required" : "";
  const emailError = email === "" ? "Email address is required" : "";

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-[#c88f8f]">
          <User className="size-3.5" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">
            Step 3 · Client Details
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-normal tracking-tight text-[#fbf8f5]">
          Contact Information
        </h2>
        <p className="text-xs sm:text-sm text-[#b5a8a3] font-light">
          We treat your details with absolute discretion. Our atelier concierge
          will contact you to confirm timing and consultation specifics.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="flex items-center justify-between text-xs uppercase tracking-[0.18em] font-medium text-[#fbf8f5]"
          >
            <span>Full Name</span>
            <span className="text-[#c88f8f] font-normal">* Required</span>
          </label>
          <div className="relative">
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="e.g. Elena Rostova"
              className={`w-full min-h-[48px] rounded-[2px] border bg-[#120a0d] px-4 py-3 text-sm text-[#fbf8f5] outline-none transition-all placeholder:text-white/30 focus-visible:border-[#d7be9f] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d7be9f] ${
                nameError ? "border-[#88222b]" : "border-white/10 hover:border-white/20"
              }`}
              aria-describedby={nameError ? "name-error" : undefined}
              aria-invalid={!!nameError}
            />
            <User className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#a89a95] pointer-events-none" />
          </div>
          {nameError && (
            <p
              id="name-error"
              className="flex items-center gap-1.5 text-xs text-[#c88f8f]"
              role="alert"
            >
              <AlertCircle className="size-3.5" strokeWidth={1.5} />
              {nameError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="flex items-center justify-between text-xs uppercase tracking-[0.18em] font-medium text-[#fbf8f5]"
          >
            <span>Phone / WhatsApp</span>
            <span className="text-[#c88f8f] font-normal">* Required</span>
          </label>
          <div className="relative">
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => onPhoneChange(e.target.value)}
              placeholder="+1 (555) 000-0000"
              className={`w-full min-h-[48px] rounded-[2px] border bg-[#120a0d] px-4 py-3 text-sm text-[#fbf8f5] outline-none transition-all placeholder:text-white/30 focus-visible:border-[#d7be9f] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d7be9f] ${
                phoneError ? "border-[#88222b]" : "border-white/10 hover:border-white/20"
              }`}
              aria-describedby={phoneError ? "phone-error" : undefined}
              aria-invalid={!!phoneError}
            />
            <Phone className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#a89a95] pointer-events-none" />
          </div>
          {phoneError && (
            <p
              id="phone-error"
              className="flex items-center gap-1.5 text-xs text-[#c88f8f]"
              role="alert"
            >
              <AlertCircle className="size-3.5" strokeWidth={1.5} />
              {phoneError}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="flex items-center justify-between text-xs uppercase tracking-[0.18em] font-medium text-[#fbf8f5]"
          >
            <span>Email Address</span>
            <span className="text-[#c88f8f] font-normal">* Required</span>
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="elena@luxury.com"
              className={`w-full min-h-[48px] rounded-[2px] border bg-[#120a0d] px-4 py-3 text-sm text-[#fbf8f5] outline-none transition-all placeholder:text-white/30 focus-visible:border-[#d7be9f] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#d7be9f] ${
                emailError ? "border-[#88222b]" : "border-white/10 hover:border-white/20"
              }`}
              aria-describedby={emailError ? "email-error" : undefined}
              aria-invalid={!!emailError}
            />
            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-[#a89a95] pointer-events-none" />
          </div>
          {emailError && (
            <p
              id="email-error"
              className="flex items-center gap-1.5 text-xs text-[#c88f8f]"
              role="alert"
            >
              <AlertCircle className="size-3.5" strokeWidth={1.5} />
              {emailError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
