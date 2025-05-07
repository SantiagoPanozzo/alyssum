import Image from "next/image";
import HorizontalImageScroller from './components/horizontalImageScroller';
import ProfileCarousel from './components/profileCarousel';

export default function Home() {
  return (
    <div className="min-h-screen w-screen grid grid-rows-[auto_1fr_auto] justify-items-center font-[family-name:var(--font-geist-sans)] px-4 sm:px-0">
      <main className="flex flex-col items-center w-full max-w-3xl gap-10 pt-10 text-center">

        <Image
          src="/ucx.png"
          alt="UCU logo"
          width={300}
          height={150}
          priority
        />

        <h1 className="text-6xl font-[family-name:var(--font-geist-mono)]">
          UCX
        </h1>

        <div className="lalista w-full">
          <ol className="list-inside list-decimal text-sm text-left sm:text-left font-[family-name:var(--font-geist-mono)] space-y-2 px-4 sm:px-0">
            <h3>Un evento en el que se congregan grandes eminencias del marketing de servicios.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </ol>
        </div>

        <h2 className="text-4xl font-bold">¿Quién viene?</h2>

        <div className="w-full flex justify-center">
          <ProfileCarousel />
        </div>

        <h2 className="text-4xl font-bold">Patrocinan:</h2>
        <div className="w-full opacity-50">
          <HorizontalImageScroller />
        </div>
      </main>
    </div>
  );
}

