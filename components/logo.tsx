export function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const dimensions = {
    small: { width: 32, height: 32, text: "text-lg" },
    default: { width: 40, height: 40, text: "text-xl" },
    large: { width: 60, height: 60, text: "text-3xl" },
  }

  const { width, height } = dimensions[size]

  return (
    <div className="flex items-center gap-3">
      <div className={`relative photo-border`} style={{ width, height }}>
        {/* Vintage polaroid-style background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 rounded-sm" />
        <div className="absolute inset-1 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-sm opacity-80" />
        {/* Book icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width={width * 0.5}
            height={height * 0.5}
            viewBox="0 0 24 24"
            fill="none"
            className="text-gray-700 drop-shadow-sm"
          >
            <path
              d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8 7h8M8 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}
