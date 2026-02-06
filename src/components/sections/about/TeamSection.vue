<template>
  <section ref="teamSection" class="relative py-32 bg-white overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div class="max-w-xl">
          <h2 class="text-xs font-black uppercase tracking-[0.5em] text-emerald-600 mb-4 italic">// Kolektif Kreatif</h2>
          <h3 class="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.85]">
            DI BALIK <br/> <span class="text-slate-400">SETIAP BARIS</span> KODE.
          </h3>
        </div>
        <div class="md:text-right">
          <p class="text-slate-500 font-medium max-w-xs ml-auto">
            Bukan sekadar pekerja remote, kami adalah partner strategis yang peduli pada pertumbuhan bisnis Anda.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div 
          v-for="(member, index) in team" 
          :key="index"
          class="group relative"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16']"
          :style="{ transitionDelay: `${index * 200}ms`, transitionDuration: '1000ms' }"
        >
          <div class="relative aspect-[3/4] overflow-hidden bg-slate-100 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
            <div class="absolute top-0 right-0 p-4">
              <span class="text-[10px] font-black uppercase tracking-widest text-white bg-slate-900 px-3 py-1 vertical-text">
                {{ member.role }}
              </span>
            </div>
          </div>

          <div class="relative">
            <h4 class="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2 italic">
              {{ member.name }}
            </h4>
            <p class="text-slate-600 leading-relaxed mb-4 text-sm lg:text-base">
              {{ member.bio }}
            </p>
            
            <div class="flex flex-wrap gap-2">
              <span v-for="tool in member.tools" :key="tool" 
                    class="text-[9px] font-bold text-slate-400 border border-slate-200 px-2 py-0.5 rounded uppercase">
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const teamSection = ref(null);
let observer = null;

const team = [
  {
    name: "Alex Pratama",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "Bertanggung jawab atas integritas kode dan performa sistem. Memastikan website Anda tidak hanya cantik, tapi juga cepat dan aman.",
    tools: ["Vue 3", "Node.js", "PostgreSQL"]
  },
  {
    name: "Siska Utami",
    role: "UI/UX Strategist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    bio: "Penerjemah kebutuhan bisnis ke dalam antarmuka yang intuitif. Fokusnya adalah menghilangkan friksi pada pengalaman pengguna.",
    tools: ["Figma", "Tailwind", "User Research"]
  },
  {
    name: "Budi Santoso",
    role: "SEO & Copywriter",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    bio: "Menyusun narasi yang menjual dan teknis SEO yang memastikan UMKM Anda muncul di radar calon pembeli potensial.",
    tools: ["Ahrefs", "Google Analytics", "SEM"]
  }
];

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.15 });

  if (teamSection.value) observer.observe(teamSection.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

/* Glassy effect on card info for modern feel */
.group:hover h4 {
  color: #10b981;
  transition: color 0.3s ease;
}
</style>