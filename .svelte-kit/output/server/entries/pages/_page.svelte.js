import "clsx";
import { a1 as ensure_array_like, a2 as attr_class, e as escape_html } from "../../chunks/index.js";
function Hero($$renderer) {
  const sections = [
    { id: "why", label: "Why SB707 Matters" },
    { id: "requirements", label: "Seven Core Requirements" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "pitfalls", label: "Common Pitfalls" },
    { id: "partner", label: "Choose a Partner" },
    { id: "contact", label: "Get in Touch" }
  ];
  $$renderer.push(`<section class="relative bg-gradient-to-br from-[#114B5F] to-[#141E22] text-white min-h-screen flex items-center"><div class="max-w-6xl mx-auto px-6 py-20 w-full"><div class="grid lg:grid-cols-2 gap-12 items-center"><div><span class="inline-block bg-[#66CC33] text-[#141E22] text-sm font-semibold px-4 py-2 rounded-full mb-6">California Compliance Guide</span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">SB707 Compliance for City Managers</h1> <p class="text-xl text-[#EAF8E2] mb-8">The most significant modernization of California's Brown Act since 1953. Everything you need to know before July 1, 2026.</p></div> <div class="grid grid-cols-2 gap-4"><!--[-->`);
  const each_array = ensure_array_like(sections);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let section = each_array[i];
    $$renderer.push(`<button${attr_class("group bg-white/10 hover:bg-[#66CC33] backdrop-blur-sm rounded-xl p-6 text-left transition-all duration-300 hover:scale-105", void 0, { "col-span-2": i === 0 })}><span class="text-[#66CC33] group-hover:text-[#141E22] text-sm font-medium">0${escape_html(i + 1)}</span> <h3 class="text-lg font-semibold mt-2 group-hover:text-[#141E22]">${escape_html(section.label)}</h3> <span class="inline-block mt-3 text-sm text-[#EAF8E2]/70 group-hover:text-[#141E22]/70">Learn more →</span></button>`);
  }
  $$renderer.push(`<!--]--></div></div></div></section>`);
}
function ProblemStatement($$renderer) {
  $$renderer.push(`<section id="why" class="py-20 px-6 bg-white"><div class="max-w-4xl mx-auto"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section One</span> <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-8">Why SB707 Matters For City Managers</h2> <div class="prose prose-lg text-[#141E22]/80 max-w-none"><p class="text-xl leading-relaxed mb-6"><strong class="text-[#141E22]">SB 707 is the most significant modernization of California's Ralph M. Brown Act since 1953.</strong> Beginning July 1, 2026, cities with populations over 30,000 (and certain counties and special districts) must adopt new accessibility and participation standards.</p> <p class="mb-6">For City Managers, more than the technology aspect, this is a challenge of <strong>governance, risk management, and public trust</strong>. Non-compliance can invalidate council actions, expose your city to lawsuits, and trigger ADA enforcement from the Department of Justice.</p> <div class="bg-[#EAF8E2] border-l-4 border-[#66CC33] p-6 my-8 rounded-r-lg"><p class="text-[#141E22] font-medium text-lg">Done right, SB 707 compliance transforms public meetings into accessible civic infrastructure that strengthens community engagement.</p></div></div></div></section>`);
}
function ComplianceChecklist($$renderer) {
  const requirements = [
    {
      title: "Two-way remote participation",
      shortDesc: "Video & phone access",
      fullDesc: "Every meeting must allow residents to both observe and participate remotely. This means adopting a platform that supports video participation and a dedicated phone line for those without internet access. It ensures equity across digital divides and guarantees all voices can be heard."
    },
    {
      title: "Comment parity",
      shortDesc: "Equal treatment for all",
      fullDesc: "Remote speakers must be treated the same as in-person speakers. If in-person comments are three minutes, remote comments must also be three minutes. City Managers must ensure policies prevent pre-registration barriers that disadvantage remote participants."
    },
    {
      title: "Real-time captions",
      shortDesc: "WCAG 2.1 AA compliant",
      fullDesc: "Automated captions must be visible during live meetings. This is not optional—it's a direct ADA compliance requirement. Captions must meet accessibility standards (WCAG 2.1 AA) and be available across devices to serve residents who are deaf or hard of hearing."
    },
    {
      title: "Language access",
      shortDesc: "Translation for 20%+ LEP",
      fullDesc: "Agendas and participation instructions must be translated into applicable languages where 20%+ of residents have limited English proficiency. Managers must oversee workflows to ensure translations are timely, accurate, and accessible, leveraging digital translation tools where appropriate."
    },
    {
      title: "Service disruption protocol",
      shortDesc: "Written policy required",
      fullDesc: "If livestream or phone access fails, meetings must recess for up to one hour while restoration is attempted. A written, council-adopted policy is required before July 1, 2026. This ensures transparency and protects the integrity of council actions."
    },
    {
      title: "Public meeting webpage",
      shortDesc: "One-click from homepage",
      fullDesc: "Cities must maintain a dedicated, accessible webpage with agendas, instructions, and participation links. It must be one click from the homepage and translated into applicable languages. This page becomes the central hub for residents seeking to engage."
    },
    {
      title: "Outreach to underrepresented",
      shortDesc: "Build inclusive participation",
      fullDesc: "Managers must ensure reasonable efforts to notify civic groups, ethnic media, and community organizations about meetings. This builds trust, demonstrates inclusivity, and ensures broader participation from historically underrepresented voices."
    }
  ];
  $$renderer.push(`<section id="requirements" class="py-20 px-6 bg-[#EAF8E2]"><div class="max-w-6xl mx-auto"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Two</span> <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-4">The Seven Core Requirements</h2> <p class="text-[#141E22]/70 text-lg mb-12">From a Manager's Lens — Click each block to learn more</p> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
  const each_array = ensure_array_like(requirements);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let req = each_array[i];
    $$renderer.push(`<button class="bg-white hover:shadow-lg rounded-xl p-6 text-left transition-all duration-300 border-2 border-transparent hover:border-[#66CC33]"><span class="text-[#66CC33] font-bold text-2xl">0${escape_html(i + 1)}</span> <h3 class="font-bold text-[#141E22] mt-3 mb-2">${escape_html(req.title)}</h3> <p class="text-sm text-[#141E22]/60">${escape_html(req.shortDesc)}</p> <span class="inline-block mt-4 text-[#66CC33] text-sm font-medium">Click for details →</span></button>`);
  }
  $$renderer.push(`<!--]--></div></div> `);
  {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></section>`);
}
function SolutionPreview($$renderer) {
  $$renderer.push(`<section id="tech-stack" class="py-20 px-6 bg-white"><div class="max-w-5xl mx-auto"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Three</span> <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-12">Suggested Tech Stack for Compliance</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">📡</span></div> <h3 class="font-bold text-[#141E22] mb-2">Multistreaming Platform</h3> <p class="text-sm text-[#141E22]/70">Enables two-way participation, captions, and redundancy across YouTube, Facebook, and municipal sites. Ensures accessibility and resilience.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">☎️</span></div> <h3 class="font-bold text-[#141E22] mb-2">Telephony Integration</h3> <p class="text-sm text-[#141E22]/70">Dedicated dial-in line with auto-connect to live meetings, ensuring residents without internet can still participate.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">📋</span></div> <h3 class="font-bold text-[#141E22] mb-2">Agenda Management</h3> <p class="text-sm text-[#141E22]/70">Integrates with translation workflows and meeting webpages, streamlining clerk operations.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">♿</span></div> <h3 class="font-bold text-[#141E22] mb-2">Accessibility Tools</h3> <p class="text-sm text-[#141E22]/70">Automated captioning, WCAG-compliant webpage templates, and screen-reader compatibility to meet ADA standards.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">🗄️</span></div> <h3 class="font-bold text-[#141E22] mb-2">Archiving &amp; Records</h3> <p class="text-sm text-[#141E22]/70">Ensures livestreams and metadata are preserved for FOIA and public records compliance.</p></div> <div class="bg-[#EAF8E2] rounded-xl p-6"><div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4"><span class="text-[#66CC33] text-2xl">📊</span></div> <h3 class="font-bold text-[#141E22] mb-2">Analytics Dashboard</h3> <p class="text-sm text-[#141E22]/70">Tracks participation, language requests, and disruption incidents for reporting to council and continuous improvement.</p></div></div></div></section>`);
}
function FAQ($$renderer) {
  const pitfalls = [
    {
      title: "Assuming Zoom/Webex is sufficient",
      description: "These platforms lack integrated compliance features like captioning and phone backup."
    },
    {
      title: "Forgetting the phone backup requirement",
      description: "Even perfect video streaming does not meet SB 707 without a dial-in option."
    },
    {
      title: "Delaying service disruption policy adoption",
      description: "Without a written, adopted policy, compliance fails even if technology works."
    },
    {
      title: "Treating SB 707 as an IT project only",
      description: "Compliance requires cross-departmental leadership—clerks, attorneys, IT, and communications must all be involved."
    }
  ];
  $$renderer.push(`<section id="pitfalls" class="py-20 px-6 bg-[#EAF8E2]"><div class="max-w-4xl mx-auto"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Four</span> <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-12">Common Pitfalls to Avoid</h2> <div class="space-y-6"><!--[-->`);
  const each_array = ensure_array_like(pitfalls);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let pitfall = each_array[i];
    $$renderer.push(`<div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500"><div class="flex items-start gap-4"><span class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</span> <div><h3 class="font-bold text-[#141E22] text-lg mb-2">${escape_html(pitfall.title)}</h3> <p class="text-[#141E22]/70">${escape_html(pitfall.description)}</p></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function DownloadSection($$renderer) {
  $$renderer.push(`<section id="partner" class="py-20 px-6 bg-gradient-to-br from-[#114B5F] to-[#141E22] text-white"><div class="max-w-4xl mx-auto text-center"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Five</span> <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6">What to Look for In a Tech Partner</h2> <p class="text-[#EAF8E2] text-lg mb-8 max-w-3xl mx-auto">Choosing the right technology is imperative to ensure your city has a system that is reliable, accessible, and future-proof. City Managers need partners who understand compliance requirements, accessibility standards, and the realities of running public meetings with diverse communities.</p> <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 text-left max-w-3xl mx-auto"><p class="text-[#EAF8E2] mb-6">Our <strong class="text-white">SB 707 Tech Partner Evaluation Guide</strong> outlines the six qualities every City Manager should demand from a vendor:</p> <div class="grid md:grid-cols-2 gap-4"><div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Compliance-first design</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Accessibility expertise</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Reliability and redundancy</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Ease of use for staff</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Audit and reporting tools</span></div> <div class="flex items-center gap-3"><span class="text-[#66CC33] text-xl">✓</span> <span class="text-[#EAF8E2]">Community engagement support</span></div></div></div> <button class="bg-[#66CC33] hover:bg-[#379D04] text-[#141E22] font-bold px-8 py-4 rounded-lg text-lg transition inline-flex items-center gap-2">Download the SB 707 Tech Partner Evaluation Guide <span>→</span></button></div></section>`);
}
function ContactCTA($$renderer) {
  $$renderer.push(`<section id="contact" class="py-20 px-6 bg-white"><div class="max-w-4xl mx-auto text-center"><span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Six</span> <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-4">Ready to lead your city into compliance?</h2> <p class="text-[#141E22]/80 text-lg mb-8 max-w-3xl mx-auto">Switchboard Live is helping public sector organizations and City Managers navigate SB 707 technology preparedness. We provide integrated livestreaming systems designed to meet accessibility, language, and participation requirements—helping cities modernize their civic infrastructure while reducing risk.</p> <p class="text-[#141E22]/70 mb-8">Our platform makes it easy for government teams to connect with constituents across multiple channels and we're ready to assist City Managers in building connected, resilient systems that will be fully prepared by the <strong class="text-[#141E22]">July 1, 2026</strong> deadline.</p> <a href="https://switchboard.live/contact" class="inline-flex items-center gap-2 bg-[#66CC33] hover:bg-[#379D04] text-[#141E22] font-bold px-8 py-4 rounded-lg text-lg transition">GET IN TOUCH <span>→</span></a> <p class="text-sm text-[#141E22]/60 mt-4">Talk with our team about how we can help your city meet SB 707 requirements and strengthen public trust.</p></div></section>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="bg-[#141E22] text-[#EAF8E2]/70 py-12 px-6"><div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"><div class="flex items-center gap-4"><span class="text-[#EAF8E2] font-semibold">Powered by</span> <a href="https://switchboard.live" target="_blank" class="hover:opacity-80 transition"><img src="/logo.png" alt="Switchboard Live" class="h-8 w-auto"/></a></div> <div class="flex gap-6 text-sm"><a href="https://switchboard.live/privacy" class="hover:text-[#66CC33] transition">Privacy</a> <a href="https://switchboard.live/terms" class="hover:text-[#66CC33] transition">Terms</a> <a href="https://switchboard.live/contact" class="hover:text-[#66CC33] transition">Contact</a></div> <p class="text-sm">© 2025 Switchboard Live. All rights reserved.</p></div></footer>`);
}
function _page($$renderer) {
  $$renderer.push(`<main class="min-h-screen bg-white">`);
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  ProblemStatement($$renderer);
  $$renderer.push(`<!----> `);
  ComplianceChecklist($$renderer);
  $$renderer.push(`<!----> `);
  SolutionPreview($$renderer);
  $$renderer.push(`<!----> `);
  FAQ($$renderer);
  $$renderer.push(`<!----> `);
  DownloadSection($$renderer);
  $$renderer.push(`<!----> `);
  ContactCTA($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
