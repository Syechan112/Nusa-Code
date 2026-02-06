<template>
  <section ref="benefitSection" class="relative py-32 bg-white overflow-hidden border-t border-slate-100">
    <div class="absolute inset-0 opacity-[0.03] pointer-events-none" 
         :style="{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }">
    </div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="max-w-3xl mb-16">
        <div class="inline-block px-3 py-1 bg-emerald-400 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Standard Deliverables // 2024
        </div>
        <h3 class="text-5xl md:text-7xl font-black text-slate-900 leading-[0.8] tracking-tighter uppercase mb-8">
          APA YANG <br/> <span class="text-emerald-500 italic">ANDA DAPATKAN.</span>
        </h3>
        <p class="text-slate-500 font-medium leading-relaxed border-l-2 border-emerald-500 pl-6 max-w-xl">
          Kami tidak menjual spek koding. Kami menyerahkan instrumen bisnis yang siap menghasilkan uang sejak hari pertama.
        </p>
      </div>

      <div 
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-grab active:cursor-grabbing"
        @dragover.prevent
        @drop="onDrop"
      >
        <div 
          v-for="(benefit, index) in benefitsList" 
          :key="benefit.id"
          draggable="true"
          @dragstart="onDragStart(index)"
          @dragenter="onDragEnter(index)"
          class="group relative bg-white border border-slate-200 p-8 transition-all duration-500 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10"
          :class="[
            isVisible ? 'animate-in' : 'animate-out'
          ]"
          :style="{ '--delay': `${index * 150}ms` }"
        >
          <div class="absolute top-4 right-4 flex flex-col gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
            <div v-for="i in 2" :key="i" class="flex gap-1">
               <div v-for="j in 3" :key="j" class="w-1 h-1 bg-slate-900 rounded-full"></div>
            </div>
          </div>

          <div class="mb-10 w-14 h-14 flex items-center justify-center bg-slate-900 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-7 h-7" v-html="benefit.svgIcon"></svg>
          </div>

          <div class="relative z-10">
            <h4 class="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 italic">
              {{ benefit.title }}
            </h4>
            <p class="text-slate-500 text-sm font-medium leading-relaxed group-hover:text-slate-700 transition-colors">
              {{ benefit.desc }}
            </p>
          </div>

          <div class="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-slate-100 group-hover:border-emerald-500 transition-colors"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const benefitSection = ref(null);
const draggingIndex = ref(null);
let observer = null;

const benefitsList = ref([
  { id: 1, title: "Website Siap Pakai", desc: "Terima kunci. Anda tidak perlu pusing koding, begitu online langsung bisa pamer ke calon pembeli.", svgIcon: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>' },
  { id: 2, title: "Tampilan Pro", desc: "Bisnis Anda kelihatan mahal di HP atau Laptop. Tidak ada lagi tampilan berantakan yang bikin malu.", svgIcon: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path>' },
  { id: 3, title: "Tombol WA Langsung", desc: "Pelanggan mau tanya? Klik satu tombol, mereka langsung chat ke HP Anda. Gak ribet catat nomor.", svgIcon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-12.7 8.38 8.38 0 0 1 3.8.9L21 3z"></path>' },
  { id: 4, title: "Domain & Hosting", desc: "Kami amankan alamat website (.com) dan rumah digital Anda. Anda tinggal terima beres setiap tahun.", svgIcon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3V5"></path>' },
  { id: 5, title: "Gampang Update", desc: "Mau ganti foto atau harga? Bisa sendiri semudah ganti status WA. Kami beri panduan simpelnya.", svgIcon: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>' },
  { id: 6, title: "Cepat Muncul di Google", desc: "Kami rapihkan strukturnya agar saat orang cari produk Anda, website Anda yang muncul duluan.", svgIcon: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>' }
]);

// Animation Observer Logic
onMounted(() => {
  observer = new IntersectionObserver(([entry]) => {
    // Reset dan Play ulang animasi setiap kali masuk/keluar view
    isVisible.value = entry.isIntersecting;
  }, { threshold: 0.1 });

  if (benefitSection.value) observer.observe(benefitSection.value);
});

onUnmounted(() => observer?.disconnect());

// Drag & Drop Logic
const onDragStart = (index) => { draggingIndex.value = index; };
const onDragEnter = (index) => {
  if (draggingIndex.value !== null && draggingIndex.value !== index) {
    const list = [...benefitsList.value];
    const draggedItem = list[draggingIndex.value];
    list.splice(draggingIndex.value, 1);
    list.splice(index, 0, draggedItem);
    draggingIndex.value = index;
    benefitsList.value = list;
  }
};
const onDrop = () => { draggingIndex.value = null; };
</script>

<style scoped>
/* Resetting Animation Styles */
.animate-in {
  animation: slideUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
  opacity: 0;
}

.animate-out {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.5s ease-in;
}

@keyframes slideUpIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.cursor-grab { cursor: grab; }
.cursor-grabbing { cursor: grabbing; }

/* Smooth move for list items when swapped */
.grid > div {
  will-change: transform, opacity;
}
</style>