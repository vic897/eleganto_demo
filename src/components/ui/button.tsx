import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[2px] border border-transparent bg-clip-padding text-xs font-medium uppercase tracking-[0.2em] whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-[#d7be9f] active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border border-[#d7be9f]/30 bg-[#6e1a2d] text-[#fbf8f5] hover:bg-[#89273c] hover:border-[#d7be9f]/60 shadow-[0_2px_12px_rgba(110,26,45,0.4)]",
        outline:
          "border border-white/15 bg-white/5 text-[#fbf8f5] hover:bg-white/10 hover:text-[#c88f8f]",
        secondary:
          "border border-white/10 bg-[#1c1618] text-[#fbf8f5] hover:bg-[#251d20]",
        ghost:
          "hover:bg-white/5 hover:text-[#c88f8f]",
        destructive:
          "border border-[#88222b]/50 bg-[#88222b]/20 text-[#fbf8f5] hover:bg-[#88222b]/40",
        link: "text-[#d7be9f] underline-offset-4 hover:underline",
      },
      size: {
        default:
          "min-h-11 h-11 gap-1.5 px-6 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "min-h-11 h-11 gap-1 px-3 text-[10px] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "min-h-11 h-11 gap-1 px-4 text-[11px] has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "min-h-12 h-12 gap-2 px-8 text-xs tracking-[0.24em] has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-11 min-h-11 min-w-11",
        "icon-xs":
          "size-11 min-h-11 min-w-11 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-11 min-h-11 min-w-11",
        "icon-lg": "size-12 min-h-12 min-w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
