import { Play } from "lucide-react";

type VideoCard = {
  title: string;
  label: string;
  accent: string;
  posterText: string;
};

const videos: VideoCard[] = [
  { title: "Kashish", label: "8 Band", accent: "#2cb7c7", posterText: "Video 01" },
  { title: "Alok", label: "7.5 Band", accent: "#7f7ae8", posterText: "Video 02" },
  { title: "Rudrakshi", label: "8 Band", accent: "#f4c16d", posterText: "Video 03" },
  { title: "Vanshika", label: "89 Score", accent: "#ea5b61", posterText: "Video 04" },
];

export function StudentSuccessVideosSection() {
  const renderVideoCard = (video: VideoCard) => (
    <article
      key={video.title}
      className="relative overflow-hidden rounded-[1.1rem] bg-white p-4 shadow-[0_12px_30px_-22px_rgba(0,0,0,0.18)] border border-black/5"
    >
      <div
        className="relative aspect-3/4 overflow-hidden rounded-[0.8rem]"
        style={{ background: `linear-gradient(180deg, ${video.accent}CC 0%, ${video.accent} 100%)` }}
      >
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <svg viewBox="0 0 200 300" className="h-full w-full">
            <circle cx="50" cy="44" r="42" fill="currentColor" />
            <path d="M18 78c24-26 56-38 82-38s58 12 82 38" fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
          </svg>
        </div>

        <div className="absolute left-4 top-4 text-white/95 text-lg font-semibold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
          {video.title}
          <div className="text-sm font-medium">{video.label}</div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <button
            type="button"
            className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm ring-1 ring-white/30 shadow-[0_18px_36px_-22px_rgba(0,0,0,0.35)] transition hover:scale-105"
            aria-label={`Play ${video.title} video`}
          >
            <Play className="h-8 w-8 fill-white text-white translate-x-0.5" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white text-center">
          <div className="text-xl font-bold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.18)]">
            {video.posterText}
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 pb-16 lg:pb-24 font-serif">
      <div className="mx-auto max-w-384">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[oklch(0.16_0.02_250)]">
          Join <span className="text-[#d90f40]">5K Students</span> who Turned Dreams into Achievements!
        </h2>

        <p className="mt-4 text-center text-sm sm:text-base lg:text-lg leading-relaxed text-[oklch(0.26_0.02_250)] max-w-5xl mx-auto font-medium">
          Join the ranks of over 5,000 satisfied students who have transformed their lives and achieved their English language goals with Apex Edge.
        </p>

        <div className="mt-12 sm:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {videos.map((video) => (
              <div key={video.title} className="w-[78vw] max-w-[18rem] shrink-0 snap-center">
                {renderVideoCard(video)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 hidden sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-7 items-stretch">
          {videos.map((video) => renderVideoCard(video))}
        </div>
      </div>
    </section>
  );
}
