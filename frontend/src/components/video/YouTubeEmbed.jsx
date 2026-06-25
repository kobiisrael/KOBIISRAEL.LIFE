import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Extracts a YouTube video ID from a full URL, short URL, embed URL or raw ID.
 * Returns null if no valid 11-char ID can be found.
 */
export function getYouTubeId(input) {
  if (!input) return null;
  const v = String(input).trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(v)) return v;
  const m = v.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/,
  );
  return m ? m[1] : null;
}

/**
 * YouTubeEmbed — click-to-load YouTube embed.
 * - Renders a poster (custom URL or YouTube's `hqdefault.jpg`) until clicked.
 * - On click loads the privacy-enhanced youtube-nocookie.com iframe.
 * - `start` (seconds) optional. `title` used for the iframe a11y label.
 */
export default function YouTubeEmbed({
  videoId,
  url,
  title = "Video by Kobi Israel",
  poster,
  posterAlt = "Video poster",
  start,
}) {
  const [active, setActive] = useState(false);
  const id = videoId || getYouTubeId(url);
  if (!id) return null;

  const params = new URLSearchParams({ rel: "0", modestbranding: "1" });
  if (start) params.set("start", String(start));
  if (active) params.set("autoplay", "1");
  const embedSrc = `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
  const posterSrc = poster || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div
      className="relative aspect-video w-full overflow-hidden bg-ki-elevated border border-ki-border group"
      data-testid="youtube-embed"
    >
      {active ? (
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <button
          type="button"
          aria-label={`Play video: ${title}`}
          onClick={() => setActive(true)}
          data-testid="youtube-embed-play"
          className="absolute inset-0 w-full h-full group/play"
        >
          <img
            src={posterSrc}
            alt={posterAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover/play:opacity-100 transition-opacity"
            onError={(e) => {
              // Fallback to hqdefault if maxresdefault is missing
              const img = e.currentTarget;
              if (!img.dataset.fallback) {
                img.dataset.fallback = "1";
                img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/55 via-transparent to-ki-bg/20" />
          <span
            aria-hidden
            className="absolute inset-0 m-auto w-20 h-20 md:w-24 md:h-24 rounded-full border border-ki-fg/35 bg-ki-bg/40 backdrop-blur-sm flex items-center justify-center group-hover/play:border-ki-gold transition-colors"
          >
            <Play
              size={26}
              strokeWidth={1}
              className="text-ki-fg/90 ml-1 group-hover/play:text-ki-gold transition-colors"
            />
          </span>
          <span className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/75">
            <span>Watch · Click to play</span>
            <span>YouTube · No autoplay</span>
          </span>
        </button>
      )}
    </div>
  );
}
