import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center h-full">
        <Image
          src="/logo.png"
          alt="LIC Logo"
          width={200}
          height={200}
          priority
          unoptimized
        />
    </main>
  )
}
