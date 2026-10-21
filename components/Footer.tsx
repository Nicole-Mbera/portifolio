export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#e5e7eb] bg-[#f8f9fc]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[#9ca3af]">
        <p>© 2026 Nicole Mbera Umurerwa. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/NicoleMbera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a6b45] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nicole-mbera-097458228/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a6b45] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://youmatter.rw"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a6b45] transition-colors"
          >
            YouMatter.rw
          </a>
        </div>
      </div>
    </footer>
  );
}
