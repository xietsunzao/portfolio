import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm font-medium text-brand">404</p>
      <h1 className="text-balance text-3xl font-bold tracking-tighter sm:text-5xl">
        This page doesn&apos;t exist
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you&apos;re looking for was moved, renamed, or never existed.
      </p>
      <Button asChild className="mt-4">
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  )
}
