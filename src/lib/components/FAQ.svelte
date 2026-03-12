<section class="py-20 px-6 bg-slate-50">
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
    
    <div class="space-y-4">
      {#each faqs as faq, i}
        <div class="bg-white rounded-lg shadow-sm">
          <button 
            class="w-full px-6 py-4 text-left flex justify-between items-center font-medium text-slate-900"
            on:click={() => faq.open = !faq.open}
          >
            {faq.question}
            <span class="text-slate-400 transform transition" class:rotate-180={faq.open}>▼</span>
          </button>
          {#if faq.open}
            <div class="px-6 pb-4 text-slate-600">
              {faq.answer}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<script>
  let faqs = [
    { question: "[PASTE: FAQ question 1]", answer: "[PASTE: Answer 1]", open: false },
    { question: "[PASTE: FAQ question 2]", answer: "[PASTE: Answer 2]", open: false },
    { question: "[PASTE: FAQ question 3]", answer: "[PASTE: Answer 3]", open: false },
    { question: "What is the compliance deadline?", answer: "[PASTE: Deadline details]", open: false },
    { question: "What are the penalties for non-compliance?", answer: "[PASTE: Penalty information]", open: false }
  ];
</script>