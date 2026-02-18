<template>
  <section ref="target" class="relative min-h-screen pt-32 pb-16 flex items-center bg-[#FDFDFD] overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-[0.05]" 
         style="background-image: radial-gradient(#163020 1px, transparent 1px); background-size: 30px 30px;">
    </div>

    <div class="container mx-auto px-6 relative z-10 transition-opacity duration-500"
         :class="isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'">
      
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        <div class="w-full lg:w-3/5 text-center lg:text-left z-20">
          <div :class="isVisible ? 'animate-fade-in-down' : ''" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs font-bold text-emerald-800 uppercase tracking-widest">NusaCode Digital Studio</span>
          </div>

          <h1 :class="isVisible ? 'animate-reveal' : 'opacity-0'" class="text-5xl md:text-7xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8">
            UMKM GO DIGITAL <br />
            <span class="text-emerald-600">TANPA RIBET.</span>
          </h1>

          <p :class="isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'" class="text-xl text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
            Kami mengubah bisnis lokal menjadi brand ikonik. Website cepat, desain berkelas, dan strategi yang bikin jualanmu makin melesat.
          </p>

          <div :class="isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'" class="flex flex-wrap items-center justify-center lg:justify-start gap-5">
            <a :href="whatsappLink" target="_blank" class="px-10 py-4 bg-[#41644A] text-white rounded-full font-bold shadow-2xl shadow-emerald-900/20 hover:scale-105 transition-all">
              Mulai Konsultasi
            </a>

            <RouterLink 
              to="/portofolio" 
              class="px-10 py-4 border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 transition-all text-center"
              title="Lihat Portofolio Website dan Layanan Digital Marketing NusaCode">
              Lihat Portofolio & Layanan
            </RouterLink>

          </div>
        </div>

        <div class="w-full lg:w-2/5 relative h-[500px] flex items-center justify-center">
          <div :class="isVisible ? 'animate-float' : ''" class="relative z-10">
            <img src="/src/assets/image/logo/main/business.svg" alt="NusaCode" class="w-[350px] md:w-[550px] h-auto drop-shadow-[0_35px_35px_rgba(65,100,74,0.3)]" />
          </div>

          <div :class="isVisible ? 'animate-bounce-slow' : 'opacity-0'" class="absolute top-10 right-0 md:-right-10 bg-white shadow-xl rounded-2xl p-4 border border-slate-50 z-20">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full border-4 border-emerald-500 flex items-center justify-center text-xs font-bold text-emerald-600">99</div>
              <p class="text-[10px] font-bold text-slate-400 uppercase">Page Speed</p>
            </div>
          </div>

          <div :class="isVisible ? 'animate-bounce-slow-reverse' : 'opacity-0'" class="absolute bottom-10 left-0 md:-left-12 bg-emerald-900 text-white shadow-2xl rounded-2xl p-5 z-20">
            <p class="text-[10px] font-medium opacity-60 uppercase">Conversion Rate</p>
            <span class="text-2xl font-black">+142%</span>
          </div>

          <div class="absolute w-[150%] h-[150%] bg-emerald-100/30 rounded-full blur-[100px] -z-10"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigation = [
  {
    name: 'Portofolio',
    to: '/portofolio'
  }
];


const target = ref(null);
const isVisible = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      } else {
        isVisible.value = false;
      }
    });
  }, { 
    threshold: 0.1, 
    rootMargin: '50px' 
  });

  if (target.value) observer.observe(target.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'       
  });
};

const whatsappNumber = "6285780042435";
const whatsappMessage = encodeURIComponent("Halo NusaCode, saya ingin konsultasi.");
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
</script>

<style scoped>
@keyframes reveal {
  from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-20px) rotate(2deg); }
}
@keyframes bounceSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
@keyframes bounceSlowReverse {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(15px); }
}

.animate-reveal { animation: reveal 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
.animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
.animate-fade-in-down { animation: fadeInDown 0.8s ease-out forwards; }
.animate-float { animation: float 6s infinite ease-in-out; }
.animate-bounce-slow { animation: bounceSlow 4s infinite ease-in-out; }
.animate-bounce-slow-reverse { animation: bounceSlowReverse 5s infinite ease-in-out; }

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
</style>