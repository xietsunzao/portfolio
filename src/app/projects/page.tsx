import { Projects } from "@/components/Projects"
import { PageTransition } from "@/components/PageTransition"

export default function ProjectsPage() {
  return (
    <PageTransition direction="down">
      <main className="container mx-auto px-4">
        <Projects />
      </main>
    </PageTransition>
  )
} 