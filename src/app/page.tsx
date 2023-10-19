import Link from "next/link";
import Header from "./components/Header/Header";
export default function Home() {
  return (
    <>
      <Header hasSearchBar={true} />
      <h1>This is Main Page!</h1>
      <Link href="/testpage">Go to Test Page</Link>
    </>
  )
}
