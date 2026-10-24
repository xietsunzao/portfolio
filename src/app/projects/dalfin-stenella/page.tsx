import { DalfinStenellaArchitecture } from "@/components/DalfinStenellaArchitecture"
import { DalfinStenellaBeforeAfter } from "@/components/DalfinStenellaBeforeAfter"
import { DalfinStenellaTechStack } from "@/components/DalfinStenellaTechStack"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dalfin Stenella Intelligent Care — Case Study",
  description:
    "How the Stenella Care platform delivers real-time ICU patient monitoring to hospitals with an on-premises deployment, license-gated offline resilience, and integration with a hospital's own SIMRS.",
}

const sectionSpacing = "pt-[clamp(48px,7vw,104px)]"
// Diagrams keep a minimum width and scroll sideways on phones instead of shrinking their labels.
const diagramFrame = "mt-8 overflow-x-auto border border-border p-4 sm:p-8"

export default function DalfinStenellaCaseStudy(): React.JSX.Element {
  return (
    <main id="main-content" className="page-column">
      <div className="spine pb-[clamp(56px,8vw,104px)] pt-[clamp(24px,4vw,56px)]">
        <Link href="/projects" className="nav-link">
          All projects
        </Link>
        <p className="mono-label mt-8">Case study · Dalfin HealthCare</p>
        <h1 className="spine-node display-heading mt-2">Dalfin Stenella Intelligent Care</h1>
        <p className="mt-6 max-w-[44ch] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.6] text-muted-foreground">
          Real-time ICU patient monitoring for hospitals, deployed on-premises and built to
          integrate with the hospital&apos;s own SIMRS.
        </p>

        <section className={sectionSpacing}>
          <h2 id="problem" className="spine-node section-heading">
            The problem
          </h2>
          <p className="max-w-[60ch] leading-[1.65]">
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
          <div
            role="region"
            aria-label="Before and after diagram"
            tabIndex={0}
            className={diagramFrame}
          >
            <div className="min-w-[640px]">
              <DalfinStenellaBeforeAfter />
            </div>
          </div>
        </section>

        <section className={sectionSpacing}>
          <h2 id="solution" className="spine-node section-heading">
            The solution
          </h2>
          <p className="max-w-[60ch] leading-[1.65]">
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

        <section className={sectionSpacing}>
          <h2 id="architecture" className="spine-node section-heading">
            Architecture
          </h2>
          <p className="max-w-[60ch] leading-[1.65]">
            Simplified view of the deployment: on-premises services at the hospital, talking to a
            small set of cloud services for licensing, and exporting data to the hospital&apos;s
            own SIMRS.
          </p>
          <div
            role="region"
            aria-label="Container diagram"
            tabIndex={0}
            className={diagramFrame}
          >
            <div className="min-w-[860px]">
              <DalfinStenellaArchitecture />
            </div>
          </div>
        </section>

        <section className={sectionSpacing}>
          <h2 id="tech-stack" className="spine-node section-heading">
            Tech stack
          </h2>
          <p className="mb-6 max-w-[60ch] leading-[1.65]">
            Why this combination, specifically for an on-premises hospital deployment.
          </p>
          <DalfinStenellaTechStack />
        </section>
      </div>
    </main>
  )
}
