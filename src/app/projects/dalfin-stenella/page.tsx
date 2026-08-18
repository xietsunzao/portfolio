import { DalfinStenellaArchitecture } from "@/components/DalfinStenellaArchitecture"
import { DalfinStenellaBeforeAfter } from "@/components/DalfinStenellaBeforeAfter"
import { DalfinStenellaTechStack } from "@/components/DalfinStenellaTechStack"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dalfin Stenella Intelligent Care — Case Study",
  description:
    "How the Stenella Care platform delivers real-time ICU patient monitoring to hospitals with an on-premises deployment, license-gated offline resilience, and integration with a hospital's own SIMRS.",
}

export default function DalfinStenellaCaseStudy() {
  return (
    <main id="main-content" className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" size="sm" className="-ml-3 mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to projects
          </Link>
        </Button>

        <p className="text-sm font-medium text-brand">Case study</p>
        <h1 className="text-balance mt-2 text-3xl font-bold tracking-tighter sm:text-5xl">
          Dalfin Stenella Intelligent Care
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Real-time ICU patient monitoring for hospitals, deployed on-premises and built to
          integrate with the hospital&apos;s own SIMRS.
        </p>

        <section className="mt-16 space-y-4">
          <h2 className="text-2xl font-semibold">The problem</h2>
          <p className="text-muted-foreground">
            Before this system, ICU nurses monitored patients the way most hospitals still do:
            walk to each bedside, read the numbers off the patient monitor or ventilator, and write
            them down on a paper chart, roughly once an hour. That works, but it means a
            deterioration between rounds can go unnoticed, transcription errors happen, and nobody
            has a continuous history to spot a trend before it becomes an emergency. On top of that,
            hospital IT environments are the opposite of a clean cloud deployment target: unreliable
            local networks, strict requirements to keep patient data on-premises, and non-technical
            hospital IT staff who need to install and license the system themselves, per hospital,
            without an engineer on site.
          </p>
        </section>
      </div>

      <section className="mx-auto mt-8 max-w-5xl space-y-4">
        <div className="rounded-lg border border-border bg-card p-4 sm:p-8">
          <DalfinStenellaBeforeAfter />
        </div>
      </section>

      <div className="mx-auto max-w-3xl">
        <section className="mt-12 space-y-4">
          <h2 className="text-2xl font-semibold">The solution</h2>
          <p className="text-muted-foreground">
            I designed and built the on-premises deployment architecture: a Docker Compose bundle
            (NestJS backend, React dashboard, FastAPI telemetry service) installed at each hospital
            through a cross-platform desktop installer. Medical devices stream vitals through a
            message broker into a time-series database, and out to the dashboard live over
            WebSocket. Licensing is enforced through contract validation against a cloud API, with
            a 30-day offline grace period so a hospital keeps running through a network outage
            instead of losing monitoring. Stenella&apos;s own scope stops at the ICU device
            dashboard: it exposes patient vitals through FHIR-compliant APIs so a hospital can
            integrate them into its own SIMRS (Sistem Informasi Manajemen Rumah Sakit), rather
            than syncing directly with a national health platform.
          </p>
        </section>
      </div>

      <section className="mx-auto mt-12 max-w-5xl space-y-4">
        <h2 className="text-2xl font-semibold">Architecture</h2>
        <p className="text-muted-foreground">
          Simplified view of the deployment: on-premises services at the hospital, talking to a
          small set of cloud services for licensing, and exporting data to the hospital&apos;s
          own SIMRS.
        </p>
        <div className="rounded-lg border border-border bg-card p-4 sm:p-8">
          <DalfinStenellaArchitecture />
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl space-y-4">
        <h2 className="text-2xl font-semibold">Tech stack</h2>
        <p className="text-muted-foreground">
          Why this combination, specifically for an on-premises hospital deployment.
        </p>
        <DalfinStenellaTechStack />
      </section>
    </main>
  )
}
