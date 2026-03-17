<script>
  import { Antenna, Phone, ClipboardList, Accessibility, Archive, ChartBar } from '@lucide/svelte';
</script>

<section id="tech-stack" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#141E22] mb-8 sm:mb-12">Suggested Tech Stack for Compliance</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      <div class="bg-[#EAF8E2] rounded-xl p-6">
        <div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4">
          <Antenna class="w-6 h-6 text-[#66CC33]" strokeWidth={2} />
        </div>
        <h3 class="font-bold text-[#141E22] mb-2">Multistreaming Platform</h3>
        <p class="text-sm text-[#141E22]/70">Enables two-way participation, captions, and redundancy across YouTube, Facebook, and municipal sites. Ensures accessibility and resilience.</p>
      </div>
      
      <div class="bg-[#EAF8E2] rounded-xl p-6">
        <div class="w-12 h-12 bg-[#66CC33]/20 rounded-full flex items-center justify-center mb-4">
          <Phone class="w-5 h-5 text-[#66CC33]" />
        </div>
        <h3 class="font-bold text-[#141E22] mb-2">Telephony Integration</h3>
        <p class="text-sm text-[#141E22]/70">Dedicated dial-in line with auto-connect to live meetings, ensuring residents without internet can still participate.</p>
      </div>
      
      <div class="bg-[#EAF8E2] rounded-xl p-6">
        <div class="w-14 h-14 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4">
          <ClipboardList class="w-7 h-7 text-[#66CC33]" strokeWidth={2.5} />
        </div>
        <h3 class="font-bold text-[#141E22] mb-2">Agenda Management</h3>
        <p class="text-sm text-[#141E22]/70">Integrates with translation workflows and meeting webpages, streamlining clerk operations.</p>
      </div>
      
      <div class="bg-[#EAF8E2] rounded-xl p-6">
        <div class="w-12 h-12 bg-[#66CC33]/20 rounded-full flex items-center justify-center mb-4">
          <Accessibility class="w-5 h-5 text-[#66CC33]" />
        </div>
        <h3 class="font-bold text-[#141E22] mb-2">Accessibility Tools</h3>
        <p class="text-sm text-[#141E22]/70">Automated captioning, WCAG-compliant webpage templates, and screen-reader compatibility to meet ADA standards.</p>
      </div>
      
      <div class="bg-[#EAF8E2] rounded-xl p-6">
        <div class="w-12 h-12 bg-[#66CC33]/20 rounded-lg flex items-center justify-center mb-4">
          <Archive class="w-6 h-6 text-[#66CC33]" strokeWidth={2} />
        </div>
        <h3 class="font-bold text-[#141E22] mb-2">Archiving & Records</h3>
        <p class="text-sm text-[#141E22]/70">Ensures livestreams and metadata are preserved for FOIA and public records compliance.</p>
      </div>
      
      <div class="bg-[#EAF8E2] rounded-xl p-6">
        <div class="w-14 h-14 bg-[#66CC33]/20 rounded-full flex items-center justify-center mb-4">
          <ChartBar class="w-7 h-7 text-[#66CC33]" strokeWidth={2} />
        </div>
        <h3 class="font-bold text-[#141E22] mb-2">Analytics Dashboard</h3>
        <p class="text-sm text-[#141E22]/70">Tracks participation, language requests, and disruption incidents for reporting to council and continuous improvement.</p>
      </div>
    </div>
  </div>
</section>