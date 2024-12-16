import { About } from "@/components/About"
import { PageTransition } from "@/components/PageTransition"

export default function AboutPage() {
  return (
    <PageTransition direction="up">
      <main className="container mx-auto px-4">
        <About />
      </main>
    </PageTransition>
  )
} 