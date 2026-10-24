import Link from "next/link"

export default function NotFound(): React.JSX.Element {
  return (
    <main id="main-content" className="page-column">
      <div className="spine py-[clamp(64px,10vw,140px)]">
        <p className="mono-label">404</p>
        <h1 className="spine-node display-heading mt-2">This page doesn&apos;t exist.</h1>
        <div className="mt-8 flex flex-wrap gap-x-6">
          <Link href="/" className="pencil-link">
            Go to the home page
          </Link>
          <Link href="/projects" className="pencil-link">
            All projects
          </Link>
        </div>
      </div>
    </main>
  )
}
