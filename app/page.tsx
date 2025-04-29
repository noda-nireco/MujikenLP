import Header from "@/components/header"
import Hero from "@/components/hero"
import Overview from "@/components/overview"
import Features from "@/components/features"
import CaseStudies from "@/components/case-studies"
import Specifications from "@/components/specifications"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Features />
        <CaseStudies />
        <Specifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
