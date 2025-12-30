export function Performance() {
  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Live Energy</h2>
          <p className="text-lg text-gray-400">Experience the high-octane performance of Dastak Band.</p>
        </div>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/xa-xoNXNcLk"
            title="Dastak Band Live Performance"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
