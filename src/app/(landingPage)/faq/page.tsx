import { FAQSection } from "../components/faq/faq-section";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
       <div className="min-h-screen bg-background">
     
      <FAQSection />
    </div>
      <Footer />
    </div>
  )
}

