<template>
  <section ref="heroSection" class="relative min-h-screen flex items-center bg-white overflow-hidden pt-32 pb-16">
    <div class="absolute inset-0 opacity-[0.1] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }">
    </div>

    <div class="container mx-auto px-6 relative z-20">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        
        <div class="w-full lg:w-3/5 text-left relative">
          <div class="absolute -top-10 -left-4 text-[120px] font-black text-slate-50 opacity-[0.03] select-none">
            01
          </div>

          <div 
            class="transition-all duration-1000 ease-out transform relative z-10"
            :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10']"
          >
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-10 group cursor-default">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-emerald-600 transition-colors">
                Solution for Scale-Up UMKM
              </span>
            </div>

            <h1 class="text-6xl md:text-8xl lg:text-[100px] font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 uppercase">
              GO DIGITAL <br />
              <span class="relative inline-block">
                NAIK KELAS
                <span class="absolute bottom-2 left-0 w-full h-2 bg-emerald-400/20 -z-10"></span>
              </span> 
              <br />
              <span class="text-emerald-600 italic">SEKARANG.</span>
            </h1>

            <p class="text-lg md:text-xl text-slate-500 font-medium max-w-lg mb-12 leading-relaxed border-l-4 border-emerald-500 pl-6">
              Ubah pengunjung website menjadi pembeli setia. Kami bangun website 
              <span class="text-slate-900 font-bold underline decoration-emerald-500/30">Ringan & SEO Friendly</span> 
              yang dirancang khusus untuk meningkatkan omzet UMKM hingga 3x lipat.
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-6 mt-12">
              <button 
                @click="startConsultation"
                class="group relative w-full sm:w-auto px-12 py-6 bg-slate-900 text-white font-bold uppercase tracking-widest text-xs overflow-hidden transition-all hover:bg-emerald-600 shadow-xl shadow-slate-200"
              >
                <span class="relative z-10">Mulai Konsultasi</span>
              </button>
              
              <button 
                @click="scrollToSection"
                class="group flex items-center gap-4 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:text-emerald-600 transition-all duration-300"
              >
                <span class="w-8 h-[2px] bg-slate-200 group-hover:w-12 group-hover:bg-emerald-500 transition-all"></span>
                Lihat Paket Harga
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 translate-y-[1px] group-hover:translate-y-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <div class="w-full lg:w-2/5 relative group">
          <div 
            class="relative transition-all duration-1000 delay-300 transform bg-white rounded-2xl p-1 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-200"
            :class="[isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95']"
          >
            <div class="h-10 bg-slate-50 rounded-t-xl flex items-center justify-between px-4 border-b border-slate-100">
              <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-[#ff5f56]/80"></div>
                <div class="w-3 h-3 rounded-full bg-[#ffbd2e]/80"></div>
                <div class="w-3 h-3 rounded-full bg-[#27c93f]/80"></div>
              </div>
              <div class="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">clean-architecture.ts</div>
            </div>

            <div class="p-6 font-mono text-sm leading-relaxed min-h-[320px] bg-white rounded-b-xl">
              <div v-for="(line, index) in typedLines" :key="index" class="flex gap-4 mb-1">
                <span class="text-slate-300 text-right select-none w-4 text-xs font-bold">{{ index + 1 }}</span>
                <p class="text-slate-800 whitespace-pre-wrap font-medium" v-html="line.text"></p>
              </div>
              <div v-if="isTyping" class="flex gap-4">
                <span class="text-slate-300 text-right select-none w-4 text-xs font-bold">{{ typedLines.length + 1 }}</span>
                <span class="w-2 h-5 bg-emerald-500 animate-pulse"></span>
              </div>
            </div>
          </div>

          <div class="absolute -bottom-6 -left-3 bg-slate-900 text-white p-4 font-black rounded-lg shadow-2xl transition-transform group-hover:scale-105 duration-300">
            <div class="text-[10px] uppercase opacity-60 tracking-tighter mb-1">Performance</div>
            <div class="text-2xl italic text-emerald-400">99.9%</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const isTyping = ref(false);
const hasAnimated = ref(false);
const heroSection = ref(null);
const typedLines = ref([]);
let observer = null;

const codeSnippet = [
  { text: '<span class="text-pink-500">const</span> <span class="text-blue-400">BisnisAnda</span> = {', color: 'text-white' },
  { text: '  status: <span class="text-amber-300">"GoDigital"</span>,', color: 'text-white' },
  { text: '  googleRanking: <span class="text-amber-300">"Page-1"</span>,', color: 'text-white' },
  { text: '  visitorToBuyer: <span class="text-amber-300">"High"</span>,', color: 'text-white' },
  { text: '  supportUMKM: <span class="text-emerald-400">true</span>', color: 'text-white' },
  { text: '};', color: 'text-white' },
  { text: '<span class="text-blue-400">optimize</span>(BisnisAnda);', color: 'text-white' }
];

const phoneNumber = "6285780042435";
const customerMessage = `Halo, saya tertarik dengan Solusi Digital Premium untuk UMKM. 
Bisa bantu jelaskan lebih lanjut mengenai optimasi SEO dan pembuatan website clean code?`;


const startConsultation = () => {
  const encodedMessage = encodeURIComponent(customerMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};

const runTypewriter = async () => {
 
  if (isTyping.value || hasAnimated.value) return; 
  
  isTyping.value = true;
  hasAnimated.value = true;
  typedLines.value = [];
  
  for (const line of codeSnippet) {
    typedLines.value.push({ text: '', color: line.color });
    const currentLineIndex = typedLines.value.length - 1;
    await new Promise(resolve => setTimeout(resolve, 300));
    typedLines.value[currentLineIndex].text = line.text;
  }
  isTyping.value = false;
};

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      runTypewriter();
    }
  }, { threshold: 0.2 });

  if (heroSection.value) observer.observe(heroSection.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const scrollToSection = () => {
  const element = document.getElementById('section-price');
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'     
    });
  }
};
</script>

<style scoped>
@media (max-width: 1024px) {
  h1 {
    font-size: 3.5rem;
    line-height: 1;
  }
}
</style>