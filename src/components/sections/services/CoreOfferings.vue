<template>
  <section ref="targetSection" id="section-price" class="relative py-32 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.08] pointer-events-none" 
         :style="{ backgroundImage: 'radial-gradient(#000 0.8px, transparent 0.8px)', backgroundSize: '24px 24px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="max-w-3xl mb-20">
        <h2 class="text-xs font-black uppercase tracking-[0.4em] text-emerald-600 mb-4 inline-flex items-center gap-3">
          // Skema Investasi
        </h2>
        <h3 class="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tighter uppercase">
          SOLUSI TEPAT <br />
          <span class="text-slate-400 text-3xl md:text-5xl italic font-medium tracking-normal">SESUAI SKALA BISNIS ANDA</span>
        </h3>
        <p class="mt-6 text-slate-500 font-medium max-w-xl">
          Harga bersifat estimasi awal. Finalisasi biaya ditentukan oleh <span class="font-bold">tingkat kompleksitas fitur</span> dan integrasi sistem yang Anda butuhkan.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div 
          v-for="(plan, index) in plans" 
          :key="index"
          class="group relative transition-all duration-700 transform"
          :class="[isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20']"
          :style="{ transitionDelay: `${index * 150}ms` }"
        >
          <div v-if="plan.discountBadge" class="absolute -top-4 -right-2 z-30 bg-red-500 text-white text-[9px] font-black px-3 py-1 uppercase tracking-tighter shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform">
            Hemat {{ plan.discountBadge }}
          </div>

          <div 
            class="relative h-full p-10 bg-white border border-slate-200 transition-all duration-500 group-hover:border-emerald-500 flex flex-col"
            :class="{'shadow-[0_30px_60px_-15px_rgba(16,185,129,0.1)] border-emerald-500/50': plan.isFeatured}"
          >
            <div class="mb-8">
              <div class="inline-block px-3 py-1 bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
                {{ plan.type }}
              </div>
              <h4 class="text-2xl font-black text-slate-900 uppercase tracking-tight">{{ plan.name }}</h4>
              
              <div class="mt-6 flex flex-col gap-1">
                <div v-if="plan.originalPrice" class="flex items-center gap-2">
                  <span class="text-slate-300 text-[10px] font-black uppercase tracking-widest">Normal</span>
                  <span class="text-slate-300 text-sm font-bold line-through decoration-red-400/50 decoration-2 italic">
                    Rp {{ plan.originalPrice }} {{ plan.currencyDiscount }}
                  </span>
                </div>

                <div class="flex items-baseline gap-1">
                  <span class="text-slate-400 text-sm font-bold">Mulai</span>
                  <span class="text-5xl font-black text-slate-900 tracking-tighter group-hover:text-emerald-600 transition-colors">
                    Rp {{ plan.price }}
                  </span>
                  <span class="text-slate-400 text-sm font-bold uppercase">{{ plan.currency }}*</span>
                </div>
              </div>
            </div>

            <ul class="space-y-4 mb-12 flex-grow">
              <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-3 text-sm font-medium text-slate-600">
                <svg class="w-4 h-4 text-emerald-500 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feat }}</span>
              </li>
            </ul>

            <button 
              @click="sendWhatsApp(plan.name)"
              class="block w-full py-5 text-center text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 bg-slate-900 text-white hover:bg-emerald-600 shadow-lg cursor-pointer"
            >
              Ambil Promo Sekarang
            </button>
          </div>
        </div>
      </div>

<div class="mt-12 md:mt-20 bg-white">
  <div class="max-w-5xl mx-auto px-4 md:px-6">
    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-12 shadow-sm">
      
      <div class="text-center mb-8 md:mb-12">
        <h4 class="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight">
          Punya Kebutuhan <br class="md:hidden" /> Khusus?
        </h4>
        <p class="text-slate-500 text-xs md:text-base mt-3 md:mt-4 max-w-xl mx-auto font-medium leading-relaxed">
          Isi detail di bawah. Kami akan menyiapkan penawaran kustom yang dikirim langsung ke WhatsApp Anda.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

        <div class="flex flex-col gap-1.5">
          <label class="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Nama Client</label>
          <input 
            v-model="formCustom.nama"
            type="text"
            placeholder="Nama Lengkap"
            class="w-full px-4 md:px-5 py-3.5 md:py-4 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Jenis Bisnis</label>
          <input 
            v-model="formCustom.bisnis"
            type="text"
            placeholder="Contoh: Retail / Jasa"
            class="w-full px-4 md:px-5 py-3.5 md:py-4 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium"
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Estimasi Budget</label>
          <div class="relative">
            <select 
              v-model="formCustom.budget"
              class="w-full px-4 md:px-5 py-3.5 md:py-4 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium appearance-none"
            >
              <option>Di bawah 1 Juta</option>
              <option>1 - 5 Juta</option>
              <option>Di atas 5 Juta</option>
            </select>
            <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </div>

        <div class="md:col-span-3 flex flex-col gap-1.5">
          <label class="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Detail Kebutuhan</label>
          <textarea 
            v-model="formCustom.fitur"
            placeholder="Sebutkan fitur khusus (misal: fitur reservasi, payment gateway, dll)"
            rows="4"
            class="w-full px-4 md:px-5 py-3.5 md:py-4 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all font-medium resize-none"
          ></textarea>
        </div>

        <button 
          @click="sendCustomRequest"
          class="md:col-span-3 w-full py-4 md:py-5 bg-slate-900 text-white font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-xl hover:bg-emerald-600 transition-all duration-500 shadow-xl flex items-center justify-center gap-3 active:scale-[0.98]"
        >
          <span>Kirim Request Ke WhatsApp</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

      </div>
    </div>
  </div>
</div>

      <div class="mt-12 p-8 bg-emerald-50 border border-emerald-100 rounded-2xl flex flex-col md:flex-row items-center gap-8">
        <div class="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
          <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1.5m1.5-4h-1.5m1.5-4h-1.5M9 21h6a2 2 0 002-2V5a2 2 0 00-2-2H9a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="flex-grow">
          <h5 class="text-slate-900 font-black text-sm uppercase tracking-widest mb-1">Bagaimana kami menghitung biaya?</h5>
          <p class="text-slate-600 text-xs font-medium leading-relaxed">
            Biaya final bergantung pada <span class="font-bold">jumlah halaman</span>, <span class="font-bold">integrasi pihak ketiga</span> (Payment gateway, RajaOngkir), 
            serta <span class="font-bold">fitur khusus</span> seperti sistem booking atau keanggotaan. Kami menjamin transparansi harga sejak awal diskusi.
          </p>
        </div>
        <div class="text-emerald-700 font-mono text-[10px] font-black uppercase tracking-widest bg-white px-4 py-2 rounded-lg">
          Flexible_Pricing.sys
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isVisible = ref(false);
const targetSection = ref(null);
let observer = null;

const plans = [
  {
    type: "Single Page",
    name: "High-Conv Landing Page",
    price: "210",
    originalPrice: "500",
    discountBadge: "58%",
    currency: "Rb",
    currencyDiscount: "Rb",
    features: ["Fokus Konversi Penjualan", "Copywriting Persuasif", "Direct WhatsApp Chat", "Mobile-First Design", "2 Hari Pengerjaan", "Gratis Domain .biz"]
  },
  {
    type: "Multi Pages",
    name: "Corporate Profile",
    price: "900",
    originalPrice: "2.5",
    discountBadge: "Rp 1,6 Juta",
    currency: "Rb",
    currencyDiscount: "Jt",
    isFeatured: true,
    features: ["Struktur Menu Profesional", "Halaman Layanan & Galeri", "Optimalisasi SEO Lokal", "Integrasi Google Maps", "Blog Management", "Gratis Domain .biz"]
  },
  {
    type: "Full Store",
    name: "E-Commerce UMKM",
    price: "4.1",
    originalPrice: "5.5",
    discountBadge: "Limited Deal",
    currency: "jt",
    features: ["Katalog Produk Dinamis", "Sistem Keranjang Belanja", "Payment Gateway Ready", "Laporan Penjualan Dasar", "Gratis Domain .biz"]
  }
];

const phoneNumber = "628979673149";

const sendWhatsApp = (planName) => {
  const message = `Halo, saya ingin ambil PROMO paket ${planName}. Bisa bantu jelaskan detailnya?`;
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
};


const formCustom = ref({
  nama: '',
  bisnis: '',
  budget: 'Di bawah 1 Juta',
  fitur: ''
});

const sendCustomRequest = () => {
  
  const message = `*REQUEST WEBSITE KUSTOM*
-------------------------
*Nama:* ${formCustom.value.nama || '-'}
*Bisnis:* ${formCustom.value.bisnis || '-'}
*Budget:* ${formCustom.value.budget}
*Fitur:* ${formCustom.value.fitur || '-'}
-------------------------
_Mohon info estimasi waktu dan teknisnya._`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
};

onMounted(() => {
  
  observer = new IntersectionObserver(([entry]) => {
    
    
    if (!route.query.scrollTo) {
      isVisible.value = entry.isIntersecting;
    }
  }, { threshold: 0.1 });

  if (targetSection.value) observer.observe(targetSection.value);

  
  if (route.query.scrollTo === 'price') {
    
    isVisible.value = true; 

    setTimeout(() => {
      if (targetSection.value) {
        targetSection.value.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 300); 
  }
});

onUnmounted(() => observer?.disconnect());
</script>