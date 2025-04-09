import Image from "next/image";
import HorizontalImageScroller from './components/horizontalImageScroller';
import ProfileCard from './components/profileCard';

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid grid-rows-[auto_1fr_auto] justify-items-center font-[family-name:var(--font-geist-sans)] px-4 sm:px-0">
      <main className="flex flex-col items-center w-full max-w-3xl gap-10 pt-10 text-center">
        <div className="w-full opacity-50">
          <HorizontalImageScroller />
        </div>

        <Image
          src="/logo_ucu.svg"
          alt="UCU logo"
          width={180}
          height={38}
          priority
        />

        <p className="text-lg font-[family-name:var(--font-geist-mono)]">
          UCU Evento
        </p>

        <div className="lalista w-full">
          <ol className="list-inside list-decimal text-sm text-left sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2 px-4 sm:px-0">
            <li>Una cosa increíble</li>
            <li>Tremendo y eso, viene el fantasma de Steve Jobs</li>
            <li>En realidad no, es lo que es</li>
          </ol>
        </div>

        <h2 className="text-4xl font-bold">¿Quién viene?</h2>

        <div className="w-full flex justify-center">
          <ProfileCard
            name="Ildefonso"
            shortDescription="Marketinero"
            description="El más grande profesional del marketing, una verdadera máquina de marketinear cosas marketineables. La leyenda del marketing realmente. La cabra."
            image="https://i.pravatar.cc/300"
          />
        </div>
      </main>
    </div>
  );
}

