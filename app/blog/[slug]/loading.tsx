export default function ArticleLoading() {
  return (
    <main className="pt-28 pb-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
      <div className="max-w-3xl mx-auto animate-pulse">
        <div className="h-4 bg-[#e2e2e2] rounded-full w-32 mb-8" />
        <div className="h-4 bg-[#e2e2e2] rounded-full w-24 mb-4" />
        <div className="h-16 bg-[#e2e2e2] rounded-[16px] w-full mb-4" />
        <div className="h-6 bg-[#e2e2e2] rounded-[12px] w-full mb-2" />
        <div className="h-6 bg-[#e2e2e2] rounded-[12px] w-3/4 mb-6" />
        <div className="aspect-video bg-[#e2e2e2] rounded-[40px] mb-10" />
        <div className="space-y-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-4 bg-[#e2e2e2] rounded-[12px]" style={{ width: `${70 + Math.random() * 30}%` }} />
          ))}
        </div>
      </div>
    </main>
  )
}
