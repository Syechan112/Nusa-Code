<template>
  <section class="relative pt-32 pb-20 bg-white overflow-hidden">
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '32px 32px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div 
        ref="headerRef"
        class="max-w-3xl mb-24 transition-all duration-[1000ms] ease-in-out"
        :class="headerVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-sm'"
      >
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 inline-flex items-center gap-3">
          <span class="w-8 h-[1px] bg-emerald-600"></span> 03. Galeri Karya (Preview)
        </h2>
        <h3 class="text-5xl md:text-7xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
          BUKTI NYATA <br />
          <span class="text-slate-400 italic font-medium tracking-normal text-4xl md:text-6xl">TRANSFORMASI DIGITAL</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div 
          v-for="(item, index) in portfolioItems" 
          :key="index"
          :ref="el => { if (el) itemRefs[index] = el }"
          class="group relative transition-all duration-[1000ms] ease-in-out"
          :class="[
            visibleStates[index] 
              ? 'opacity-100 translate-y-0 scale-100 blur-0' 
              : 'opacity-0 translate-y-20 scale-95 blur-sm'
          ]"
        >
          <div class="relative aspect-[19/9] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl transition-all duration-700 group-hover:shadow-emerald-500/10 group-hover:-translate-y-2">
            <div class="absolute inset-0 overflow-hidden">
              <img 
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            <div class="hidden lg:flex absolute inset-0 bg-slate-900/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex-col justify-end translate-y-4 group-hover:translate-y-0">
              <div class="mb-6">
                <p class="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">[ Result // {{ item.result }} ]</p>
                <p class="text-white text-sm font-medium leading-relaxed italic">"{{ item.testimonial }}"</p>
              </div>
              <a :href="item.url" target="_blank" class="block w-full py-4 border border-emerald-500 text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em] text-center hover:bg-emerald-500 hover:text-white transition-all">
                Visit Live Website
              </a>
            </div>
          </div>

          <div class="mt-4 lg:hidden">
            <button 
              @click="handleMobileClick(item.url, index)"
              class="flex items-center justify-center w-full py-4 transition-all duration-500 uppercase tracking-widest text-[10px] font-black gap-2 border shadow-sm"
              :class="[
                clickedIndex === index 
                  ? 'bg-emerald-600 text-white border-emerald-600' 
                  : 'bg-white text-slate-900 border-slate-200'
              ]"
            >
              <span v-if="clickedIndex === index">Processing...</span>
              <span v-else>Lihat Proyek</span>
              <span :class="clickedIndex === index ? 'text-white' : 'text-emerald-600'">→</span>
            </button>
          </div>

          <div class="mt-6 flex justify-between items-start">
            <div>
              <h4 class="text-xl font-black text-slate-900 uppercase tracking-tight">{{ item.title }}</h4>
              <p class="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">{{ item.category }}</p>
            </div>
            <div class="h-8 w-[1px] bg-slate-200"></div>
            <div class="text-right">
              <span class="text-[10px] font-black text-emerald-600 block leading-none">LAUNCHED</span>
              <span class="text-xs font-bold text-slate-400">{{ item.year }}</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref="ctaRef"
        class="mt-32 text-center border-t border-slate-100 pt-20 transition-all duration-1000"
        :class="ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <p class="text-slate-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-6">Siap Menjadi Bagian Dari Galeri Kami?</p>
        <a 
          :href="waLink"
          target="_blank"
          class="inline-block px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-[0.3em] text-xs hover:bg-emerald-600 transition-all shadow-xl"
        >
          Mulai Diskusi Proyek
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue';

const portfolioItems = [
  {
    title: "Nexora AI",
    category: "AI Company Profile",
    year: "2026",
    focus: [
      "AI Branding Strategy",
      "Futuristic UI Design",
      "Technology Positioning",
      "Interactive Micro Animation"
    ],
    result: "Modern Branding | Multiple Page",
    testimonial: "Website AI yang profesional dan futuristik.",
    image: "assets/image/portofolio/nexora-ai.png",
    url: "https://nexoraaid.netlify.app"
  },
  {
    title: "Nexus Studio Agency",
    category: "Creative Agency",
    year: "2026",
    focus: [
      "Vue.js Development",
      "Creative Visual Direction",
      "Conversion-Oriented Layout",
      "Advanced UI Animation"
    ],
    result: "High Conversion | Multiple Page",
    testimonial: "Tampilan premium meningkatkan kepercayaan klien.",
    image: "assets/image/portofolio/nexus-studo.png",
    url: "https://nexus-studio-agency.netlify.app"
  },
  {
    title: "Call Clean",
    category: "Service Company",
    year: "2026",
    focus: [
      "Online Booking System",
      "Service Funnel Optimization",
      "Mobile First Experience",
      "Local SEO Strategy"
    ],
    result: "+60% Online Orders",
    testimonial: "Sistem booking sangat membantu operasional kami.",
    image: "assets/image/portofolio/call-clean.png",
    url: "https://call-clean.netlify.app"
  },
  {
    title: "Coffee Senja",
    category: "Cafe Landing Page",
    year: "2026",
    focus: [
      "Brand Identity Development",
      "Atmospheric Visual Design",
      "Local Business SEO",
      "Reservation Integration"
    ],
    result: "+45% Local Traffic",
    testimonial: "Reservasi meningkat drastis setelah website launch.",
    image: "assets/image/portofolio/coffe-senja.png",
    url: "https://coffe-senja.netlify.app"
  },
  {
    title: "Oakline Furniture",
    category: "Furniture Showcase",
    year: "2026",
    focus: [
      "Premium Product Showcase",
      "Minimalist UI System",
      "Catalog Architecture",
      "Performance Optimization"
    ],
    result: "Premium Look",
    testimonial: "Website elegan yang mencerminkan kualitas produk.",
    image: "assets/image/portofolio/oakline.png",
    url: "https://oakline-furniture.netlify.app"
  },
  {
    title: "Turbologix",
    category: "Logistic Company",
    year: "2026",
    focus: [
      "Logistic System Interface",
      "Real-Time Tracking UI",
      "Operational Dashboard",
      "Corporate Branding"
    ],
    result: "Operational Efficiency",
    testimonial: "Sistem tracking real-time sangat membantu pelanggan.",
    image: "assets/image/portofolio/turbo-logix.png",
    url: "https://turbologix.netlify.app"
  },
  {
    title: "Panimbang Motel",
    category: "Hospitality Website",
    year: "2026",
    focus: [
      "Direct Booking System",
      "Hospitality Experience Design",
      "Location & Maps Integration",
      "Trust-Building Layout"
    ],
    result: "+50% Direct Booking",
    testimonial: "Sekarang tamu lebih sering booking langsung lewat website.",
    image: "assets/image/portofolio/panimbang-motel.png",
    url: "https://panimbang-motel.netlify.app"
  }
];


// STATE MANAGEMENT
const clickedIndex = ref(null);
const headerVisible = ref(false);
const headerRef = ref(null);
const ctaVisible = ref(false);
const ctaRef = ref(null);
const itemRefs = ref([]);
const visibleStates = reactive(portfolioItems.map(() => false));

const handleMobileClick = (url, index) => {
  clickedIndex.value = index; 
  setTimeout(() => {
    window.open(url, '_blank');
    clickedIndex.value = null; 
  }, 2000);
};

const waLink = `https://wa.me/628979673149?text=${encodeURIComponent('Halo, saya tertarik dengan proyek portofolio Anda.')}`;

let observer = null;

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Logic for Portfolio Items
      const index = itemRefs.value.indexOf(entry.target);
      if (index !== -1) {
        visibleStates[index] = entry.isIntersecting;
      }
      
      // Logic for Header
      if (entry.target === headerRef.value) {
        headerVisible.value = entry.isIntersecting;
      }

      // Logic for CTA
      if (entry.target === ctaRef.value) {
        ctaVisible.value = entry.isIntersecting;
      }
    });
  }, observerOptions);

  // REGISTER OBSERVERS
  if (headerRef.value) observer.observe(headerRef.value);
  if (ctaRef.value) observer.observe(ctaRef.value);
  itemRefs.value.forEach((el) => { if (el) observer.observe(el); });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>