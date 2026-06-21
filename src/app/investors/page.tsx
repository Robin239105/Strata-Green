"use client";

import Link from "next/link";
import { TrendingUp, PieChart, CreditCard, Mail, Phone, Download, FileText, ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function InvestorsPage() {
  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen">
      
      {/* Page Header */}
      <PageHeader
        eyebrow="Investor Relations"
        title="Investing in a"
        titleAccent="Greener Horizon."
        subtitle="Sustainable growth, precision performance, and superior returns for the ESG-conscious investor."
        actions={[
          { label: "View Portfolio", href: "#performance", variant: "primary" },
          { label: "Annual Report", href: "#performance", variant: "ghost" },
        ]}
      />

      {/* Content Sections */}
      <main className="relative z-10">
        
        {/* Philosophy Section (Bento Style) */}
        <section className="max-w-container-max mx-auto px-6 md:px-margin-desktop py-20" id="philosophy">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Main Philosophy Card */}
            <div className="md:col-span-8 glass-card p-12 rounded-xl border border-outline-variant/20 shadow-sm ambient-glow flex flex-col justify-between">
              <div className="space-y-6">
                <span className="font-label-caps text-label-caps text-secondary font-bold uppercase tracking-[0.2em] block">
                  Our Commitment
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Investment Philosophy</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  At Strata Green, we merge the precision of industrial engineering with the foresight of ecological stewardship. Our philosophy is rooted in long-term stability—recognizing that the most resilient assets are those that work in harmony with the planet&apos;s natural systems.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-outline-variant/10">
                <div>
                  <div className="text-secondary font-headline-md text-3xl font-bold mb-1">12.4%</div>
                  <div className="font-label-caps text-[10px] text-on-surface-variant/60 font-bold tracking-wider">AVG ANNUAL RETURN</div>
                </div>
                <div>
                  <div className="text-secondary font-headline-md text-3xl font-bold mb-1">850MW</div>
                  <div className="font-label-caps text-[10px] text-on-surface-variant/60 font-bold tracking-wider">ACTIVE CAPACITY</div>
                </div>
                <div>
                  <div className="text-secondary font-headline-md text-3xl font-bold mb-1">2.4M</div>
                  <div className="font-label-caps text-[10px] text-on-surface-variant/60 font-bold tracking-wider">CO2 TONNES OFFSET</div>
                </div>
              </div>
            </div>

            {/* Secondary Detail Cards */}
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="bg-primary p-8 rounded-xl flex-1 flex flex-col justify-center text-white shadow-md">
                <div className="text-secondary-fixed text-4xl mb-4 font-mono font-bold">
                  {/* eco icon */}
                  🌱
                </div>
                <h3 className="font-headline-md text-xl font-bold text-white mb-2">ESG Core</h3>
                <p className="text-white/70 font-body-md text-sm leading-relaxed">
                  Environmental, Social, and Governance criteria integrated into every decision node.
                </p>
              </div>
              <div className="bg-surface-container-high border border-outline-variant/30 p-8 rounded-xl flex-1 flex flex-col justify-center shadow-sm">
                <div className="text-primary text-4xl mb-4 font-mono font-bold">
                  {/* analytics icon */}
                  📊
                </div>
                <h3 className="font-headline-md text-xl font-bold text-primary mb-2">Data Precision</h3>
                <p className="text-on-surface-variant font-body-md text-sm leading-relaxed">
                  Proprietary AI modeling ensures risk mitigation and performance optimization.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Financial Performance */}
        <section className="bg-surface-container-low/50 py-32 border-y border-outline-variant/20" id="performance">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl space-y-4">
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Financial Performance</h2>
                <p className="text-on-surface-variant">
                  Review our latest fiscal metrics and download comprehensive reports for institutional and private investors.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Metrics Card 1 */}
              <div className="bg-white p-8 rounded-xl border border-outline-variant/20 shadow-sm group hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[280px]">
                <div className="flex justify-between items-start">
                  <span className="font-technical-mono text-technical-mono text-secondary px-3 py-1 bg-secondary-container/20 rounded font-bold">FY 2023</span>
                  <TrendingUp className="text-outline-variant h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-1 font-bold">QUARTERLY REVENUE</h4>
                  <div className="font-headline-md text-3xl font-bold text-primary">$142.5M</div>
                </div>
                <div className="space-y-4">
                  <div className="horizontal-hairline"></div>
                  <a className="flex items-center gap-2 font-label-caps text-[11px] text-primary group-hover:text-secondary transition-colors font-bold" href="#">
                    <span>DOWNLOAD DATA</span>
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Metrics Card 2 */}
              <div className="bg-white p-8 rounded-xl border border-outline-variant/20 shadow-sm group hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[280px]">
                <div className="flex justify-between items-start">
                  <span className="font-technical-mono text-technical-mono text-secondary px-3 py-1 bg-secondary-container/20 rounded font-bold">PORTFOLIO</span>
                  <PieChart className="text-outline-variant h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-1 font-bold">ASSET APPRECIATION</h4>
                  <div className="font-headline-md text-3xl font-bold text-primary">+18.2%</div>
                </div>
                <div className="space-y-4">
                  <div className="horizontal-hairline"></div>
                  <a className="flex items-center gap-2 font-label-caps text-[11px] text-primary group-hover:text-secondary transition-colors font-bold" href="#">
                    <span>VIEW ASSET BREAKDOWN</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Metrics Card 3 */}
              <div className="bg-white p-8 rounded-xl border border-outline-variant/20 shadow-sm group hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between min-h-[280px]">
                <div className="flex justify-between items-start">
                  <span className="font-technical-mono text-technical-mono text-secondary px-3 py-1 bg-secondary-container/20 rounded font-bold">DIVIDENDS</span>
                  <CreditCard className="text-outline-variant h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-1 font-bold">YIELD PER SHARE</h4>
                  <div className="font-headline-md text-3xl font-bold text-primary">$2.45</div>
                </div>
                <div className="space-y-4">
                  <div className="horizontal-hairline"></div>
                  <a className="flex items-center gap-2 font-label-caps text-[11px] text-primary group-hover:text-secondary transition-colors font-bold" href="#">
                    <span>PAYMENT HISTORY</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Annual Report Download Area */}
            <div className="mt-16 bg-primary text-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-lg">
              <div className="p-12 md:w-2/3 space-y-6 flex flex-col justify-center">
                <h3 className="font-headline-md text-2xl font-bold">Latest Annual Report</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  Comprehensive analysis of our ESG initiatives, financial auditing, and strategic roadmap for the coming decade.
                </p>
                <button className="bg-secondary-fixed text-primary px-8 py-4 rounded font-label-caps text-label-caps hover:brightness-110 transition-all flex items-center gap-2 font-bold shadow-md shadow-secondary-fixed/15 border border-secondary-fixed w-fit cursor-pointer">
                  <span>DOWNLOAD FULL PDF (24MB)</span>
                  <Download className="h-4.5 w-4.5" />
                </button>
              </div>
              <div className="relative md:w-1/3 min-h-[300px] bg-primary-container">
                <img
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
                  alt="Annual Report mockup"
                  src="/images/investors-report.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-44 bg-white/10 backdrop-blur-md border border-white/20 rounded shadow-2xl flex items-center justify-center p-4">
                    <div className="text-center space-y-1">
                      <div className="text-white font-headline-md text-xs leading-none">STRATA</div>
                      <div className="text-secondary-fixed font-bold text-lg leading-none">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Investor Contact */}
        <section className="py-32 bg-white" id="contact">
          <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-8">
              <span className="font-label-caps text-label-caps text-secondary-fixed tracking-[0.3em] block font-bold">CONNECT</span>
              <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Direct Investor Inquiries</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Our dedicated Investor Relations team is available to assist institutional partners and shareholders with detailed data requests, site visit scheduling, and executive commentary.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-surface-container-low flex items-center justify-center text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps font-bold">EMAIL</h4>
                    <p className="text-on-surface-variant text-sm mt-0.5">ir@stratagreen.earth</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-surface-container-low flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps font-bold">OFFICE</h4>
                    <p className="text-on-surface-variant text-sm mt-0.5">+1 (555) 012-GREEN</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest border border-outline-variant/30 p-10 rounded-xl shadow-sm space-y-6">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border-b border-outline-variant/60 focus-within:border-secondary transition-colors py-2">
                    <label className="font-label-caps text-[10px] text-outline uppercase block mb-1 font-bold">Full Name</label>
                    <input className="w-full bg-transparent border-none focus:ring-0 p-0 font-technical-mono text-sm text-primary focus:outline-none" placeholder="John Doe" type="text" />
                  </div>
                  <div className="border-b border-outline-variant/60 focus-within:border-secondary transition-colors py-2">
                    <label className="font-label-caps text-[10px] text-outline uppercase block mb-1 font-bold">Company</label>
                    <input className="w-full bg-transparent border-none focus:ring-0 p-0 font-technical-mono text-sm text-primary focus:outline-none" placeholder="Institutional Capital" type="text" />
                  </div>
                </div>
                <div className="border-b border-outline-variant/60 focus-within:border-secondary transition-colors py-2">
                  <label className="font-label-caps text-[10px] text-outline uppercase block mb-1 font-bold">Email Address</label>
                  <input className="w-full bg-transparent border-none focus:ring-0 p-0 font-technical-mono text-sm text-primary focus:outline-none" placeholder="john@company.com" type="email" />
                </div>
                <div className="border-b border-outline-variant/60 focus-within:border-secondary transition-colors py-2">
                  <label className="font-label-caps text-[10px] text-outline uppercase block mb-1 font-bold">Message</label>
                  <textarea className="w-full bg-transparent border-none focus:ring-0 p-0 font-technical-mono text-sm text-primary resize-none focus:outline-none" placeholder="How can our IR team assist you today?" rows={4}></textarea>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded font-label-caps text-label-caps hover:bg-primary/90 transition-all font-bold cursor-pointer" type="submit">
                  SEND INQUIRY
                </button>
              </form>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
}
