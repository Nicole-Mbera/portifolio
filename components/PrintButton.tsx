"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-4 py-2 rounded-full bg-[#1a6b45] text-white text-sm font-semibold hover:bg-[#155538] transition-colors"
    >
      Download PDF
    </button>
  );
}
