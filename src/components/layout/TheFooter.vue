<template>
  <footer ref="footerRef" class="bg-[#FDFDFD] pt-32 pb-12 border-t border-slate-100 overflow-hidden">
    <div class="container mx-auto px-6">
      
      <div 
        class="mb-24 transition-all duration-1000 transform"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
      >
        <h2 class="hidden lg:block text-[12vw] md:text-[10vw] font-black text-slate-900 tracking-tighter leading-none select-none opacity-[0.03] absolute left-0 -top-10 w-full text-center pointer-events-none">
          NUSACODE.
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
          <div class="md:col-span-4">
            <h3 class="text-2xl font-black text-slate-900 mb-6">NUSA<span class="text-emerald-600">CODE.</span></h3>
            <p class="text-slate-500 leading-relaxed mb-8 max-w-xs">
              Membangun infrastruktur digital yang tidak hanya berfungsi, tapi juga menghasilkan profit.
            </p>
            <div class="flex gap-4">
            <a v-for="social in socials" 
              :key="social.name" 
              :href="social.link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-500 shadow-sm">
              
              <svg class="w-5 h-5 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path :d="social.svgPath" />
              </svg>
            </a>
            </div>
          </div>

          <div class="md:col-span-4 md:col-start-6">
            <span class="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] block mb-8">Kontak Kami</span>
            <div class="space-y-6">
              <div>
                <p class="text-[10px] text-slate-400 uppercase font-bold mb-1">Email Business</p>
                <a href="mailto:nusantaracodeindonesia@gmail.com" class="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">nusantaracodeindonesia@gmail.com</a>
              </div>
              <div>
                <p class="text-[10px] text-slate-400 uppercase font-bold mb-1">Fast Response</p>
                <a href="https://wa.me/6208979673149" class="text-xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">+62 897 9673 149</a>
              </div>
            </div>
          </div>

          <div class="md:col-span-3">
            <span class="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] block mb-8">Markas</span>
            <p class="text-slate-900 font-bold leading-relaxed">
              Motel Panimbang Jaya,<br>
              Lantai 2, Room Unit 4.<br>
              Pandeglang, Banten, Indonesia.
            </p>
          </div>
        </div>
      </div>

      <div 
        class="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-700 delay-500"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
      >
        <div class="flex gap-8 text-[9px] font-black text-slate-400 uppercase tracking-widest">
          <a href="#" class="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-slate-900 transition-colors">Terms</a>
          <a href="#" class="hover:text-slate-900 transition-colors">Cookies</a>
        </div>
        <p class="text-slate-400 text-[9px] md:text-left text-center font-black uppercase tracking-[0.2em]">
          © 2026 NUSACODE AGENCY. Dibuat dengan presisi di Indonesia.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const footerRef = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible.value = entry.isIntersecting;
    });
  }, { threshold: 0.1 });

  if (footerRef.value) observer.observe(footerRef.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const socials = [
  { name: 'Instagram', link: 'https://www.instagram.com/nusacode_id/', svgPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
];
</script>