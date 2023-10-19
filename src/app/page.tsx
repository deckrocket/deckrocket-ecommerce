import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>This is Main Page!</h1>
      <Link href="/testpage">Go to Test Page</Link>
    </>
  )
}
