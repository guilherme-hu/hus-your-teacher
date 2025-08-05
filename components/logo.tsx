import Image from 'next/image'


export function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const dimensions = {
    small: { width: 32, height: 32, text: "text-lg" },
    default: { width: 40, height: 40, text: "text-xl" },
    large: { width: 60, height: 60, text: "text-3xl" },
  }

  const { width, height } = dimensions[size]

  return (
    <div className="flex items-center gap-3">
      {/* Logo Image - simples, sem efeitos de polaroid */}
      <div className="relative" style={{ width, height }}>
        <Image
          src="/images/logo.jpg"
          alt="Hu's Your Teacher Logo"
          fill={true}
          sizes={`${Math.max(width, height)}px`}
          className="object-cover rounded-sm"
          priority
        />
      </div>
    </div>
  )
}