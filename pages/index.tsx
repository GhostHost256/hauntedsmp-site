import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4">
      <Image
        src="/logo.png"
        alt="HauntedSMP Logo"
        width={256}
        height={256}
        className="mb-8 drop-shadow-[0_0_1rem_#f97316] animate-pulse"
      />
      <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-4 flicker">
        A haunted experience is brewing...
      </h1>
      <p className="text-lg text-orange-300">Coming Soon to Java & Bedrock</p>
    </div>
  );
}
