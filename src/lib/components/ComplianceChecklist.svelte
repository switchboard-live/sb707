<section class="py-20 px-6 bg-slate-50">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-slate-900 mb-4">Compliance Checklist</h2>
    <p class="text-slate-600 mb-12 text-lg">
      Does your city meet these SB707 requirements?
    </p>
    
    <div class="bg-white rounded-xl shadow-sm p-8">
      <div class="space-y-4">
        {#each checklist as item, i}
          <label class="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 cursor-pointer transition">
            <input type="checkbox" class="w-6 h-6 mt-1 text-blue-600 rounded" bind:checked={item.checked}>
            <div>
              <p class="font-medium text-slate-900">{item.text}</p>
              <p class="text-sm text-slate-500 mt-1">{item.description}</p>
            </div>
          </label>
        {/each}
      </div>
      
      <div class="mt-8 pt-8 border-t border-slate-200">
        <p class="text-center text-slate-600">
          <span class="font-semibold text-slate-900">{checkedCount}</span> of <span class="font-semibold">{checklist.length}</span> requirements met
        </p>
        {#if checkedCount < checklist.length}
          <p class="text-center text-sm text-slate-500 mt-2">
            Download our guide to see how to meet the remaining requirements.
          </p>
        {/if}
      </div>
    </div>
  </div>
</section>

<script>
  let checklist = [
    { text: "Live captioning enabled", description: "Real-time captions for all public meetings", checked: false },
    { text: "Recording and archiving", description: "Automatic recording with searchable archives", checked: false },
    { text: "Public access to recordings", description: "24/7 access without login barriers", checked: false },
    { text: "Accessibility-compliant player", description: "WCAG 2.1 AA compliant video player", checked: false },
    { text: "Mobile-responsive access", description: "Works on all devices without app installation", checked: false }
  ];
  
  $: checkedCount = checklist.filter(i => i.checked).length;
</script>