export function Stickers() {
  return (
    <>
      {/* Floating stickers */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDelay: "0s" }}>
        ⭐
      </div>
      <div className="absolute top-32 right-20 text-3xl animate-bounce" style={{ animationDelay: "1s" }}>
        🌈
      </div>
      <div className="absolute top-64 left-32 text-2xl animate-bounce" style={{ animationDelay: "2s" }}>
        📚
      </div>
      <div className="absolute top-20 right-40 text-3xl animate-bounce" style={{ animationDelay: "0.5s" }}>
        ✨
      </div>
      <div className="absolute top-80 right-10 text-2xl animate-bounce" style={{ animationDelay: "1.5s" }}>
        🎨
      </div>
      <div className="absolute top-96 left-20 text-3xl animate-bounce" style={{ animationDelay: "2.5s" }}>
        💝
      </div>
      <div className="absolute bottom-32 left-16 text-2xl animate-bounce" style={{ animationDelay: "3s" }}>
        🏆
      </div>
      <div className="absolute bottom-20 right-32 text-3xl animate-bounce" style={{ animationDelay: "0.8s" }}>
        🌟
      </div>
    </>
  )
}
