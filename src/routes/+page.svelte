<script>
  import Hero from '$lib/components/Hero.svelte';
  import ProblemStatement from '$lib/components/ProblemStatement.svelte';
  import ComplianceChecklist from '$lib/components/ComplianceChecklist.svelte';
  import SolutionPreview from '$lib/components/SolutionPreview.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import DownloadSection from '$lib/components/DownloadSection.svelte';
  import ContactCTA from '$lib/components/ContactCTA.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<main class="min-h-screen bg-white">
  <Hero />
  <ProblemStatement />
  <ComplianceChecklist />
  <SolutionPreview />
  <FAQ />
  <DownloadSection />
  <ContactCTA />
  <Footer />
</main>