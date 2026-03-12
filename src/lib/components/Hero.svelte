<script>
  const sections = [
    { id: 'why', label: 'Why SB707 Matters' },
    { id: 'requirements', label: 'Seven Core Requirements' },
    { id: 'tech-stack', label: 'Tech Stack' },
    { id: 'pitfalls', label: 'Common Pitfalls' },
    { id: 'partner', label: 'Choose a Partner' },
    { id: 'contact', label: 'Get in Touch' }
  ];
  
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section class="relative bg-gradient-to-br from-[#114B5F] to-[#141E22] text-white min-h-screen flex items-center">
  <div class="max-w-6xl mx-auto px-6 py-20 w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Headline -->
      <div>
        <span class="inline-block bg-[#66CC33] text-[#141E22] text-sm font-semibold px-4 py-2 rounded-full mb-6">
          California Compliance Guide
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          SB707 Compliance for City Managers
        </h1>
        <p class="text-xl text-[#EAF8E2] mb-8">
          The most significant modernization of California's Brown Act since 1953. Everything you need to know before July 1, 2026.
        </p>
      </div>
      
      <!-- Right: Mosaic Menu -->
      <div class="grid grid-cols-2 gap-4">
        {#each sections as section, i}
          <button 
            on:click={() => scrollToSection(section.id)}
            class="group bg-white/10 hover:bg-[#66CC33] backdrop-blur-sm rounded-xl p-6 text-left transition-all duration-300 hover:scale-105"
            class:col-span-2={i === 0}
          >
            <span class="text-[#66CC33] group-hover:text-[#141E22] text-sm font-medium">0{i + 1}</span>
            <h3 class="text-lg font-semibold mt-2 group-hover:text-[#141E22]">{section.label}</h3>
            <span class="inline-block mt-3 text-sm text-[#EAF8E2]/70 group-hover:text-[#141E22]/70">
              Learn more →
            </span>
          </button>
        {/each}
      </div>
    </div>
  </div>
</section>