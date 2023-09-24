import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center">
        <Image
          src="/logo.png"
          alt="LIC Logo"
          width={100}
          height={100}
          priority
          unoptimized
        />
    </main>
  )
}
