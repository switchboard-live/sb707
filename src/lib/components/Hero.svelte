<script>
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="bg-white">
  <!-- Block grid - spec colors: #7DD321 bright green, #2E8B4F dark green, #1D4D6B dark blue, #E0E0E0 light grey -->
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
    <!-- Mobile: 1 col stack. Tablet: 2 cols. Desktop: 4x4 grid -->
    <div class="hero-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 min-h-0 lg:min-h-[480px]">
      <!-- [25%,25%] Logo r1 -->
      <a href="/" class="rounded-2xl bg-[#E0E0E0] p-4 sm:p-5 flex flex-col items-center justify-center min-h-[100px] lg:min-h-0">
        <img src="/icon.png" alt="Switchboard Live" class="h-10 w-auto mb-2 -mt-16" />
        <span class="text-[#1a1a1a] font-semibold text-lg">Switchboard Live</span>
      </a>
      <!-- [25%,50%] Why r1-2 -->
      <button
        onclick={() => scrollToSection('why')}
        class="rounded-2xl bg-[#2E8B4F] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity lg:row-span-2 relative min-h-[100px] sm:min-h-[120px] lg:min-h-0"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-lg pr-10 leading-snug">Why SB 707 Matters for City Managers</h3>
      </button>
      <!-- [25%,50%] Tech Stack r1-2 -->
      <button
        onclick={() => scrollToSection('tech-stack')}
        class="rounded-2xl bg-[#E0E0E0] p-4 sm:p-5 text-left text-[#1a1a1a] hover:bg-[#d5d5d5] transition-colors lg:row-span-2 relative min-h-[100px] sm:min-h-[120px] lg:min-h-0"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#1a1a1a] flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-lg pr-10 leading-snug">Suggested Tech Stack for Compliance</h3>
      </button>
      <!-- [25%,25%] Partner r1 -->
      <button
        onclick={() => scrollToSection('partner')}
        class="rounded-2xl bg-[#7DD321] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity relative min-h-[100px] sm:min-h-[120px] lg:min-h-0"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-lg pr-10 leading-snug">What to Look for in a Tech Partner</h3>
      </button>

      <!-- [25%,75%] Hero r2-4 col1 -->
      <button
        onclick={() => scrollToSection('why')}
        class="rounded-2xl bg-[#7DD321] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity lg:row-span-3 flex flex-col justify-between relative lg:col-start-1 lg:row-start-2 min-h-[140px] sm:min-h-[160px] lg:min-h-0"
      >
        <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight pr-12 lg:pr-14">
          SB 707 COMPLIANCE: A LEADERSHIP IMPERATIVE FOR CITY MANAGERS
        </h2>
        <span class="self-end w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7DD321] text-xl font-bold">→</span>
      </button>
      <!-- [25%,50%] 7 Core r3-4 col2 (below Why) -->
      <button
        onclick={() => scrollToSection('requirements')}
        class="rounded-2xl bg-[#E0E0E0] p-4 sm:p-5 text-left text-[#1a1a1a] hover:bg-[#d5d5d5] transition-colors lg:row-span-2 relative lg:col-start-2 lg:row-start-3 min-h-[100px] sm:min-h-[120px] lg:min-h-0"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#66CC33] flex items-center justify-center text-[#66CC33] text-xs font-bold">+</span>
        <h3 class="font-bold text-lg pr-10 leading-snug">The Seven Core Requirements for Compliance</h3>
      </button>
      <!-- [25%,50%] Pitfalls r3-4 col3 -->
      <button
        onclick={() => scrollToSection('pitfalls')}
        class="rounded-2xl bg-[#1D4D6B] p-4 sm:p-5 text-left text-white hover:opacity-95 transition-opacity lg:row-span-2 relative lg:col-start-3 lg:row-start-3 min-h-[100px] sm:min-h-[120px] lg:min-h-0"
      >
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">+</span>
        <h3 class="font-bold text-lg pr-10 leading-snug">Common Pitfalls to Avoid</h3>
      </button>
      <!-- [25%,75%] Photo r2-4 col4 -->
      <button
        onclick={() => scrollToSection('contact')}
        class="rounded-2xl relative overflow-hidden lg:row-span-3 lg:col-start-4 lg:row-start-2 min-h-[140px] sm:min-h-[160px] lg:min-h-0"
      >
        <img
          src="https://images.pexels.com/photos/7710141/pexels-photo-7710141.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Business meeting"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-x-0 bottom-0 top-1/2 bg-[#7DD321]/85"></div>
        <span class="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-[#66CC33] flex items-center justify-center text-[#66CC33] text-xs font-bold z-10">+</span>
        <div class="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 class="font-bold text-lg text-white leading-snug">Ready to lead your city into compliance?</h3>
        </div>
      </button>
    </div>
  </div>

  <!-- Content area: image + Why SB707 text -->
  <div id="why" class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
      <div class="aspect-4/3 bg-neutral-200 rounded-2xl overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6476577/pexels-photo-6476577.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Professional presenting"
          class="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-green-600 mb-6">Why SB707 Matters for City Managers</h2>
        <p class="text-lg text-[#1a1a1a]/85 leading-relaxed mb-6">
          <strong class="text-[#1a1a1a]"><a href="https://legiscan.com/CA/text/SB707/2025" class="text-green-600 underline">SB 707</a> is the most significant modernization of California's Ralph M. Brown Act since 1953.</strong> Beginning July 1, 2026, cities with populations over 30,000 (and certain counties and special districts) must adopt new accessibility and participation standards.
        </p>
        <p class="text-lg text-[#1a1a1a]/85 leading-relaxed">
          For City Managers, more than the technology aspect, this is a challenge of <strong>governance, risk management, and public trust</strong>. Non-compliance can invalidate council actions, expose your city to lawsuits, and trigger ADA enforcement from the Department of Justice.
        </p>
      </div>
    </div>
  </div>
</section>
