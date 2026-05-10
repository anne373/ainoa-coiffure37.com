export default function BlogLoading() {
  return (
    <main className="pt-28 pb-20 px-6 lg:px-8 max-w-[1280px] mx-auto">
      <div className="mb-12">
        <div className="animate-pulse bg-[#e2e2e2] rounded-full h-4 w-24 mb-3" />
        <div className="animate-pulse bg-[#e2e2e2] rounded-[16px] h-16 w-72" />
        <div className="animate-pulse bg-[#e2e2e2] rounded-[16px] h-6 w-96 mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-[40px] overflow-hidden animate-pulse">
            <div className="aspect-video bg-[#e2e2e2]" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-[#e2e2e2] rounded-full w-20" />
              <div className="h-6 bg-[#e2e2e2] rounded-[12px] w-full" />
              <div className="h-4 bg-[#e2e2e2] rounded-[12px] w-full" />
              <div className="h-4 bg-[#e2e2e2] rounded-[12px] w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
