<script>
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
</script>

<section id="pitfalls" class="py-20 px-6 bg-[#EAF8E2]">
  <div class="max-w-4xl mx-auto">
    <span class="text-[#66CC33] font-semibold text-sm tracking-wide uppercase">Section Four</span>
    <h2 class="text-3xl md:text-4xl font-bold text-[#141E22] mt-2 mb-12">Common Pitfalls to Avoid</h2>
    
    <div class="space-y-6">
      {#each pitfalls as pitfall, i}
        <div class="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
          <div class="flex items-start gap-4">
            <span class="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">!</span>
            <div>
              <h3 class="font-bold text-[#141E22] text-lg mb-2">{pitfall.title}</h3>
              <p class="text-[#141E22]/70">{pitfall.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>