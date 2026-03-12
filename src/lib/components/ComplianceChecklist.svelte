<script>
  let selectedRequirement = null;
  
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
</script>

<section id="requirements" class="py-20 px-6 bg-[#EAF8E2]">
  <div class="max-w-6xl mx-auto">
    <span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Two</span>
    <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-4">The Seven Core Requirements</h2>
    <p class="text-[#141E22]/70 text-lg mb-12">From a Manager's Lens — Click each block to learn more</p>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each requirements as req, i}
        <button 
          on:click={() => selectedRequirement = req}
          class="bg-white hover:shadow-lg rounded-xl p-6 text-left transition-all duration-300 border-2 border-transparent hover:border-[#66CC33]"
        >
          <span class="text-[#66CC33] font-bold text-2xl">0{i + 1}</span>
          <h3 class="font-bold text-[#141E22] mt-3 mb-2">{req.title}</h3>
          <p class="text-sm text-[#141E22]/60">{req.shortDesc}</p>
          <span class="inline-block mt-4 text-[#66CC33] text-sm font-medium">Click for details →</span>
        </button>
      {/each}
    </div>
  </div>
  
  <!-- Modal -->
  {#if selectedRequirement}
    <div class="fixed inset-0 bg-[#141E22]/80 z-50 flex items-center justify-center p-4" on:click={() => selectedRequirement = null}>
      <div class="bg-white rounded-2xl max-w-2xl w-full p-8" on:click|stopPropagation>
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-2xl font-bold text-[#141E22]">{selectedRequirement.title}</h3>
          <button on:click={() => selectedRequirement = null} class="text-[#141E22]/50 hover:text-[#141E22] text-2xl">×</button>
        </div>
        <p class="text-[#141E22]/80 text-lg leading-relaxed">{selectedRequirement.fullDesc}</p>
        <button 
          on:click={() => selectedRequirement = null}
          class="mt-6 bg-[#66CC33] hover:bg-[#379D04] text-[#141E22] font-bold px-6 py-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  {/if}
</section>