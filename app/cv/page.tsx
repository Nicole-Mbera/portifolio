import type { Metadata } from "next";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "CV — Nicole Mbera Umurerwa",
};

export default function CVPage() {
  return (
    <>
      {/* Print button — hidden in print */}
      <div className="no-print fixed top-4 right-4 z-50 flex gap-3">
        <a
          href="/"
          className="px-4 py-2 rounded-full border border-[#e5e7eb] bg-white text-[#374151] text-sm font-medium hover:bg-[#f3f4f6] transition-colors"
        >
          ← Back
        </a>
        <PrintButton />
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          @page { margin: 1.2cm 1.5cm; }
        }
      `}</style>

      <main className="max-w-3xl mx-auto px-8 py-16 print:py-0 print:px-0 font-sans text-[#111827]">

        {/* Header */}
        <header className="border-b-2 border-[#1a6b45] pb-6 mb-8">
          <h1 className="text-4xl font-black text-[#111827] tracking-tight">
            Nicole Mbera Umurerwa
          </h1>
          <p className="text-[#1a6b45] font-semibold mt-1 text-sm">
            ML Student &amp; Founder
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-sm text-[#6b7280]">
            <a href="mailto:mberanicole@gmail.com" className="hover:text-[#1a6b45]">
              mberanicole@gmail.com
            </a>
            <a href="https://github.com/NicoleMbera" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a6b45]">
              github.com/NicoleMbera
            </a>
            <a href="https://www.linkedin.com/in/nicole-mbera-097458228/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a6b45]">
              LinkedIn
            </a>
            <a href="https://youmatter.rw" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a6b45]">
              youmatter.rw
            </a>
          </div>
        </header>

        {/* Summary */}
        <Section title="Summary">
          <p className="text-sm text-[#374151] leading-relaxed">
            Machine learning student with a background in general medicine, building at the
            intersection of AI and healthcare. Focused on medical imaging, clinical NLP, and
            AI agent behavior. Founder of YouMatter.rw, a teletherapy platform addressing
            mental health stigma in Rwanda.
          </p>
        </Section>

        {/* Education */}
        <Section title="Education">
          <Entry
            title="Machine Learning"
            subtitle="Currently enrolled"
            period=""
            detail="Prior background in General Medicine."
          />
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <Entry
            title="R&D Intern"
            subtitle="Floramigo.ai"
            period="Early 2026"
            detail="Investigated sycophancy (overagreeableness) and conversational context loss in CBT-based AI therapy agents. Experimented with retrieval-augmented generation (RAG), system prompting, and a three-agent architecture to address these behavioral issues, improving therapeutic consistency and groundedness."
          />
          <Entry
            title="Facilitator"
            subtitle="First LEGO League"
            period="2025"
            detail="Introduced young students to foundational robotics and programming concepts using block-based Python. Guided teams through engineering challenges that built problem-solving skills and early STEM engagement."
          />
        </Section>

        {/* Ventures */}
        <Section title="Ventures">
          <Entry
            title="Founder & CEO"
            subtitle="YouMatter.rw"
            period="Present"
            detail="Founded and lead a teletherapy platform connecting users in Rwanda with certified therapists. The platform addresses mental health stigma through private, accessible, and culturally aware digital care. youmatter.rw"
          />
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Entry
            title="Cardiac Arrhythmia Classifier"
            subtitle="ECG Segment Classification"
            period=""
            detail="Deep learning model that classifies arrhythmia types from ECG time-series segments. Covers signal preprocessing, feature extraction, and classification with a focus on clinical interpretability. Python, TensorFlow, NumPy, Pandas."
            link="https://github.com/NicoleMbera/ecg-arrythmia-classification"
          />
          <Entry
            title="Malaria Cell Classifier"
            subtitle="Convolutional Neural Network"
            period=""
            detail="Inception-based custom CNN classifying microscopy images as infected or uninfected, achieving high accuracy on the NIH malaria dataset. Python, TensorFlow."
            link="https://www.kaggle.com/code/nicoleumurerwambera/inception-custom-cnn-nicole-v2"
          />
          <Entry
            title="Chest X-Ray Interpretation"
            subtitle="Medical Imaging"
            period=""
            detail="CNN pipeline for detecting pathologies in chest X-ray images, with handling of class imbalance common in medical datasets. Python, TensorFlow."
          />
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            {[
              { cat: "Machine Learning & AI", skills: "Python, TensorFlow, Pandas, NumPy, R" },
              { cat: "Web Development", skills: "JavaScript, React, Node.js, HTML, CSS" },
              { cat: "Data & Cloud", skills: "SQL, AWS, S3, DynamoDB (learning)" },
              { cat: "Tools & Systems", skills: "Git, Bash" },
            ].map((g) => (
              <div key={g.cat}>
                <p className="font-semibold text-[#1a6b45] text-xs uppercase tracking-wide mb-0.5">{g.cat}</p>
                <p className="text-[#374151]">{g.skills}</p>
              </div>
            ))}
          </div>
        </Section>

      </main>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="text-xs font-black text-[#1a6b45] uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
        {title}
        <span className="flex-1 h-px bg-[#e5e7eb]" />
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function Entry({
  title,
  subtitle,
  period,
  detail,
  link,
}: {
  title: string;
  subtitle: string;
  period: string;
  detail: string;
  link?: string;
}) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-bold text-[#111827] text-sm">{title}</p>
          <p className="text-[#1a6b45] text-sm font-medium">
            {subtitle}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-[#6b7280] text-xs hover:text-[#1a6b45] no-underline"
              >
                ↗
              </a>
            )}
          </p>
        </div>
        {period && (
          <p className="text-xs text-[#9ca3af] whitespace-nowrap flex-shrink-0">{period}</p>
        )}
      </div>
      <p className="text-sm text-[#6b7280] leading-relaxed mt-1">{detail}</p>
    </div>
  );
}
