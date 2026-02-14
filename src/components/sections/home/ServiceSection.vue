<template>
  <section ref="serviceTarget" class="relative py-24 bg-white overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-[0.02]" 
         style="background-image: linear-gradient(#163020 1px, transparent 1px), linear-gradient(90deg, #163020 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center max-w-2xl mx-auto mb-20" :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'">
        <h3 class="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Layanan Kami</h3>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
          Solusi Digital <span class="text-emerald-600">Tepat Sasaran.</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="group p-8 rounded-[2rem] bg-[#FDFDFD] border border-slate-100 hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500"
          :class="isVisible ? `animate-fade-in-up delay-${(index + 1) * 100}` : 'opacity-0'"
        >
          <div class="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-all duration-500 group-hover:rotate-12">
            <img :src="service.icon" :alt="service.title" class="w-7 h-7 transition-all duration-500 group-hover:brightness-0 group-hover:invert" />
          </div>

          <h4 class="text-xl font-bold text-slate-900 mb-3">{{ service.title }}</h4>
          <p class="text-slate-500 text-sm leading-relaxed">
            {{ service.desc }}
          </p>
        </div>
      </div>

      <div class="flex justify-center" :class="isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'">
        <RouterLink :to="{ path: '/layanan', query: { scrollTo: 'price' } }" class="group relative inline-flex items-center gap-3 py-4 px-10 bg-slate-900 text-white rounded-full font-bold overflow-hidden transition-all hover:bg-emerald-700 hover:pr-12">
          <span>{{ navigation[0].title }}</span>
          <svg class="w-5 h-5 transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import iconWeb from '@/assets/icons/web.svg';
import iconDesign from '@/assets/icons/design.svg';
import iconSeo from '@/assets/icons/seo.svg';
import iconMaintenance from '@/assets/icons/maintenance.svg';

const navigation = [
  { title: 'Lihat Semua Layanan', link: '/layanan' },
];

const services = [
  { 
    title: 'Website Jualan (Landing Page)', 
    desc: 'Bukan sekadar hiasan. Kami buatkan halaman penawaran yang menghipnotis pengunjung untuk segera klik tombol beli atau WhatsApp.', 
    icon: iconWeb 
  },
  { 
    title: 'Brand UMKM Profesional', 
    desc: 'Ubah kesan "bisnis rumahan" jadi "brand berkelas". Website Company Profile yang bikin calon pelanggan makin percaya dan loyal.', 
    icon: iconDesign 
  },
  { 
    title: 'Muncul di Pencarian Google', 
    desc: 'Kami bantu toko Anda ditemukan calon pembeli yang sedang mencari jasa/produk Anda di Google. SEO lokal khusus untuk UMKM.', 
    icon: iconSeo 
  },
  { 
    title: 'Website Terima Beres', 
    desc: 'Anda fokus jualan, biar kami yang urus hosting, domain, dan teknisnya. Website aman, cepat, dan selalu bisa diakses pelanggan.', 
    icon: iconMaintenance 
  }
];

const serviceTarget = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  }, { threshold: 0.1 });
  if (serviceTarget.value) observer.observe(serviceTarget.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

/* Staggered Delays */
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }


.group:hover img {
  filter: brightness(0) invert(1);
}
</style>