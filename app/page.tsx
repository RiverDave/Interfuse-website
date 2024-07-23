import Image from "next/image";
import Link from "next/link";

 // This component should contain the landing page
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Interfuse Language</h1>
      <Link href="/editor"> Editor </Link>
      <Link href="/docs"> Documentation </Link>
    </main>
  );
}
