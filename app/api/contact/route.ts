import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Using Formspree as a zero-config contact backend.
    // Replace FORMSPREE_ENDPOINT in .env.local:
    //   FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
    const endpoint = process.env.FORMSPREE_ENDPOINT;

    if (!endpoint) {
      // Dev fallback — log and succeed so the form works locally
      console.log("Contact form submission:", { name, email, message });
      return NextResponse.json({ ok: true });
    }

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
