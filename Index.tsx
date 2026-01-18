import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  AlertTriangle, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Upload,
  Cpu,
  Workflow,
  Building2,
  Landmark,
  Lock,
  Eye,
  Server,
  Users,
  Clock,
  TrendingUp
} from "lucide-react";
import Layout from "@/components/Layout";
import MetricsBar from "@/components/MetricsBar";
import SecurityBadges from "@/components/SecurityBadges";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              AI-Powered Document Automation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Process Documents in Minutes,{" "}
              <span className="text-primary">Not Days</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Eliminate manual data entry, reduce errors by 99%, and accelerate compliance workflows with intelligent document automation powered by AI and RPA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/demo">Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/integrations">
                  View Product
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Metrics Bar */}
      <MetricsBar />

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Document Chaos is Costing You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Manual document processing creates bottlenecks that slow down your entire operation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: FileText,
                title: "Document-Heavy Workflows",
                description: "Staff spend hours manually entering data from forms, invoices, and claims into multiple systems."
              },
              {
                icon: AlertTriangle,
                title: "Manual Errors",
                description: "Human data entry leads to costly mistakes—typos, missing fields, and incorrect classifications."
              },
              {
                icon: Shield,
                title: "Compliance Risks",
                description: "Inconsistent processes and poor audit trails expose your organization to regulatory penalties."
              },
              {
                icon: Clock,
                title: "Slow Processing",
                description: "Documents sit in queues for days, delaying critical decisions and frustrating customers."
              }
            ].map((problem, index) => (
              <div 
                key={index} 
                className="p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                AI Document Intelligence Meets RPA Automation
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                DocuAI combines advanced AI document understanding with robotic process automation to transform how you handle documents—from intake to action.
              </p>
              <ul className="space-y-4">
                {[
                  "Extract data from any document format with 99.7% accuracy",
                  "Automatically validate, classify, and route documents",
                  "Trigger downstream workflows in your existing systems",
                  "Maintain complete audit trails for compliance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">AI Processing Engine</p>
                    <p className="text-sm text-muted-foreground">Real-time document analysis</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-3 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-primary rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accuracy Rate</span>
                    <span className="font-semibold text-primary">99.7%</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold">40%</p>
                <p className="text-sm opacity-90">Faster Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Built for Enterprise Performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to deliver measurable business outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "99.7% Accuracy",
                description: "AI-powered extraction that outperforms manual data entry with built-in validation rules.",
                color: "text-primary"
              },
              {
                icon: Zap,
                title: "10x Faster",
                description: "Process thousands of documents per hour instead of dozens per day.",
                color: "text-primary"
              },
              {
                icon: Shield,
                title: "Always Compliant",
                description: "Automated audit trails, data retention policies, and regulatory reporting.",
                color: "text-primary"
              },
              {
                icon: TrendingUp,
                title: "Infinite Scale",
                description: "Handle volume spikes without adding headcount or infrastructure.",
                color: "text-primary"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your document workflows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Upload,
                title: "Upload or Connect",
                description: "Drop documents or connect to your email, cloud storage, or business systems. We handle PDFs, images, faxes, and more."
              },
              {
                step: "02",
                icon: Cpu,
                title: "AI Extracts & Validates",
                description: "Our AI reads, classifies, and extracts key data points. Built-in validation catches errors before they spread."
              },
              {
                step: "03",
                icon: Workflow,
                title: "Automate Actions",
                description: "Trigger RPA workflows to update systems, route approvals, and complete tasks—no manual intervention needed."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-8 border border-border h-full">
                  <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Purpose-Built for Regulated Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep expertise in the document workflows that matter most.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Healthcare */}
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">Healthcare</h3>
                  <p className="text-muted-foreground">HIPAA-compliant document automation</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "Claims processing & adjudication",
                  "Prior authorization automation",
                  "Patient intake & registration",
                  "Medical records extraction"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/solutions/healthcare">
                  Explore Healthcare Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* FinTech */}
            <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Landmark className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground">FinTech</h3>
                  <p className="text-muted-foreground">SOC 2 compliant financial processing</p>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {[
                  "KYC document verification",
                  "Loan application processing",
                  "Compliance reporting automation",
                  "Invoice & payment processing"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link to="/solutions/fintech">
                  Explore FinTech Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Your data security is our top priority. We meet the strictest compliance requirements.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Shield,
                title: "HIPAA Compliant",
                description: "Full compliance with healthcare data protection requirements."
              },
              {
                icon: Lock,
                title: "SOC 2 Type II",
                description: "Audited security controls for enterprise data handling."
              },
              {
                icon: Eye,
                title: "Complete Audit Trails",
                description: "Every action logged and traceable for regulatory review."
              },
              {
                icon: Server,
                title: "256-bit Encryption",
                description: "Data encrypted at rest and in transit, always protected."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-background/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-background" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-background/70 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <SecurityBadges variant="dark" />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of enterprises automating millions of documents.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "DocuAI reduced our claims processing time by 60% while eliminating data entry errors. The ROI was immediate.",
                author: "Sarah Chen",
                role: "VP of Operations",
                company: "Regional Health Network"
              },
              {
                quote: "We process 10x more loan applications with the same team. The accuracy and speed are game-changing.",
                author: "Michael Torres",
                role: "Chief Technology Officer",
                company: "Pacific Lending Partners"
              },
              {
                quote: "Compliance audits used to take weeks. With DocuAI's audit trails, we're ready in hours.",
                author: "Jennifer Walsh",
                role: "Chief Compliance Officer",
                company: "Midwest Insurance Group"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-muted rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <Users className="h-8 w-8 text-muted-foreground" />
            <span className="text-muted-foreground font-medium">500+ Enterprise Customers</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground font-medium">3M+ Documents Monthly</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground font-medium">99.9% Uptime SLA</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Transform Your Document Workflows?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              See how DocuAI can eliminate manual processing and accelerate your operations. Get a personalized demo with your actual documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/demo">Book Your Demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
