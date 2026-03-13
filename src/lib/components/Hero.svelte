<script>
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="bg-white">
  <!-- Block grid - spec colors: #7DD321 bright green, #2E8B4F dark green, #1D4D6B dark blue, #E0E0E0 light grey -->
  <div class="max-w-6xl mx-auto px-8 py-10">
    <!-- 4x4 grid: each row=25%h. [25%h]=1r, [50%h]=2r, [75%h]=3r. No overlaps. -->
    <div class="grid grid-cols-4 gap-5 min-h-[480px]" style="grid-template-rows: repeat(4, minmax(0, 1fr));">
      <!-- [25%,25%] Logo r1 -->
      <a href="/" class="rounded-2xl bg-[#E0E0E0] p-5 flex flex-col items-center justify-center">
        <img src="/icon.png" alt="Switchboard Live" class="h-10 w-auto mb-2" />
        <span class="text-[#1a1a1a] font-semibold text-base">Switchboard Live</span>
      </a>
      <!-- [25%,50%] Why r1-2 -->
      <button
        onclick={() => scrollToSection('why')}
        class="rounded-2xl bg-[#2E8B4F] p-5 text-left text-white hover:opacity-95 transition-opacity row-span-2 relative"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-base pr-9 leading-snug">Why SB 707 Matters for City Managers</h3>
      </button>
      <!-- [25%,50%] Tech Stack r1-2 -->
      <button
        onclick={() => scrollToSection('tech-stack')}
        class="rounded-2xl bg-[#E0E0E0] p-5 text-left text-[#1a1a1a] hover:bg-[#d5d5d5] transition-colors row-span-2 relative"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-base pr-9 leading-snug">Suggested Tech Stack for Compliance</h3>
      </button>
      <!-- [25%,25%] Partner r1 -->
      <button
        onclick={() => scrollToSection('partner')}
        class="rounded-2xl bg-[#7DD321] p-5 text-left text-white hover:opacity-95 transition-opacity relative"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-base pr-9 leading-snug">What to Look for in a Tech Partner</h3>
      </button>

      <!-- [25%,75%] Hero r2-4 col1 -->
      <button
        onclick={() => scrollToSection('why')}
        class="rounded-2xl bg-[#7DD321] p-5 text-left text-white hover:opacity-95 transition-opacity row-span-3 flex flex-col justify-between relative col-start-1 row-start-2"
      >
        <h2 class="text-xl md:text-2xl font-bold leading-tight pr-12">
          SB 707 COMPLIANCE: A LEADERSHIP IMPERATIVE FOR CITY MANAGERS
        </h2>
        <span class="self-end w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7DD321] text-xl font-bold">→</span>
      </button>
      <!-- [25%,50%] 7 Core r3-4 col2 (below Why) -->
      <button
        onclick={() => scrollToSection('requirements')}
        class="rounded-2xl bg-[#E0E0E0] p-5 text-left text-[#1a1a1a] hover:bg-[#d5d5d5] transition-colors row-span-2 relative col-start-2 row-start-3"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#66CC33] flex items-center justify-center text-[#66CC33] text-xs font-bold">+</span>
        <h3 class="font-bold text-base pr-9 leading-snug">The Seven Core Requirements for Compliance</h3>
      </button>
      <!-- [25%,50%] Pitfalls r3-4 col3 -->
      <button
        onclick={() => scrollToSection('pitfalls')}
        class="rounded-2xl bg-[#1D4D6B] p-5 text-left text-white hover:opacity-95 transition-opacity row-span-2 relative col-start-3 row-start-3"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-base pr-9 leading-snug">Common Pitfalls to Avoid</h3>
      </button>
      <!-- [25%,75%] Photo r2-4 col4 -->
      <button
        onclick={() => scrollToSection('contact')}
        class="rounded-2xl relative overflow-hidden row-span-3 col-start-4 row-start-2"
      >
        <img
          src="https://images.pexels.com/photos/7710141/pexels-photo-7710141.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Business meeting"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-x-0 bottom-0 top-1/2 bg-[#7DD321]/85"></div>
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#66CC33] flex items-center justify-center text-[#66CC33] text-xs font-bold z-10">+</span>
        <div class="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 class="font-bold text-base text-white leading-snug">Ready to lead your city into compliance?</h3>
        </div>
      </button>
    </div>
  </div>

  <!-- Content area: image + Why SB707 text -->
  <div id="why" class="max-w-6xl mx-auto px-8 py-16 bg-white">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="aspect-4/3 bg-neutral-200 rounded-2xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6476577/pexels-photo-6476577.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Professional presenting"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-[#2E8B4F] mb-6">Why SB707 Matters for City Managers</h2>
        <p class="text-lg text-[#1a1a1a]/85 leading-relaxed mb-6">
          <strong class="text-[#1a1a1a]"><a href="https://legiscan.com/CA/text/SB707/2025" class="text-blue-500 underline">SB 707</a> is the most significant modernization of California's Ralph M. Brown Act since 1953.</strong> Beginning July 1, 2026, cities with populations over 30,000 (and certain counties and special districts) must adopt new accessibility and participation standards.
        </p>
        <p class="text-lg text-[#1a1a1a]/85 leading-relaxed">
          For City Managers, more than the technology aspect, this is a challenge of <strong>governance, risk management, and public trust</strong>. Non-compliance can invalidate council actions, expose your city to lawsuits, and trigger ADA enforcement from the Department of Justice.
        </p>
      </div>
    </div>
  </div>
</section>
