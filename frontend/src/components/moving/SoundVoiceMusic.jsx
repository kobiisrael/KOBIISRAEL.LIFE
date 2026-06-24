import { Link } from "react-router-dom";
import { AudioLines } from "lucide-react";
import { SOUND_VOICE_MUSIC } from "@/data/site";
import { MOVING } from "@/constants/testIds";

export default function SoundVoiceMusic() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface/40">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <div className="overline">Sound · Voice · Music</div>
          <h2
            data-testid={MOVING.soundHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Sound, Voice and Music
          </h2>
          <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
            {SOUND_VOICE_MUSIC.artist_note}
          </p>

          <Link
            to="/projects/music-sound-works"
            data-testid={MOVING.soundCta}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.26em]"
          >
            Explore Sound Works →
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ki-muted">
            Releases, links and credits to be confirmed by artist
          </p>
        </div>

        <div className="lg:col-span-7">
          {/* Static audio waveform placeholder — no autoplay */}
          <div className="relative aspect-[16/7] w-full overflow-hidden bg-ki-elevated border border-ki-border flex items-center justify-center">
            <AudioLines size={56} className="text-ki-fg/30" strokeWidth={1} />
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ki-fg/70 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-ki-gold" />
              Embedded Player · Placeholder
            </div>
            <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/60">
              <span>No autoplay</span>
              <span>Streaming link to be confirmed</span>
            </div>
          </div>

          <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ki-border border border-ki-border">
            {[
              ["Music project title", SOUND_VOICE_MUSIC.project_title],
              ["Sound work", SOUND_VOICE_MUSIC.sound_work],
              ["Voice-over text", SOUND_VOICE_MUSIC.voice_over],
              ["Video soundtrack", SOUND_VOICE_MUSIC.soundtrack],
              ["Streaming link", SOUND_VOICE_MUSIC.streaming_link],
              ["Related visual project", SOUND_VOICE_MUSIC.related_visual],
            ].map(([label, value]) => (
              <div key={label} className="bg-ki-surface p-5">
                <dt className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-ki-fg/85 leading-snug">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
