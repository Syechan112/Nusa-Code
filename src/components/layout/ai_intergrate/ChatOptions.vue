<script setup>
import { computed } from 'vue';
import contextData from '@/context/context.json';

const props = defineProps({
  nextId: { type: String, default: 'root' }
});

const emit = defineEmits(['select']);

const options = computed(() => {
  if (!props.nextId) return [];


  const staticTree = {
    'root': [
      { label: '🚀 LIHAT LAYANAN', text: 'Mau liat paket jasanya Kak', nextId: 'services' },
      { label: '💻 PROSES KERJA', text: 'Gimana cara kerjanya?', nextId: 'workflow' },
      { label: '💰 AMANKAN SLOT', text: 'Mau konsultasi WA sekarang', nextId: 'contact' }
    ],
    'workflow': [
      { label: '🏠 MENU UTAMA', text: 'Oke paham, balik ke menu awal', nextId: 'root' }
    ],
    'more_questions': [
      { label: '🔍 APA ITU SEO?', text: 'SEO itu apa sih Kak?', nextId: 'ask_seo' },
      { label: '⚡ KENAPA WEB HARUS CEPAT?', text: 'Web ngebut itu penting ya?', nextId: 'ask_speed' },
      { label: '🛡️ APAKAH WEB AMAN?', text: 'Gimana soal keamanan datanya?', nextId: 'ask_security' },
      { label: '⬅️ KEMBALI', text: 'Kembali ke menu sebelumnya', nextId: 'root' }
    ]
  };


  if (props.nextId === 'services') {
    const list = contextData.knowledge_base.service_catalog.map((s) => ({
      label: s.package.toUpperCase(),
      text: `Pilih paket ${s.package}`,
      nextId: `detail_${s.package.toLowerCase().replace(/\s+/g, '_')}`, 
      extraData: s
    }));
    return [...list, { label: '🏠 MENU UTAMA', text: 'Balik ke awal ya', nextId: 'root' }];
  }


  if (props.nextId.startsWith('detail_')) {
    const pkgName = props.nextId.replace('detail_', '');
    return [
      { label: '💎 APA SAJA YANG DIDAPAT?', text: 'Dapat apa aja di paket ini?', nextId: `benefits_${pkgName}` },
      { label: '🤔 TANYA LAINNYA', text: 'Mau tanya hal lain soal teknis', nextId: 'more_questions' },
      { label: '⬅️ KEMBALI', text: 'Lihat paket lain', nextId: 'services' }
    ];
  }


  if (props.nextId.startsWith('benefits_')) {
    const pkgId = props.nextId.replace('benefits_', '');
    const pkgNameForSearch = pkgId.replace(/_/g, ' ');
    

    const service = contextData.knowledge_base.service_catalog.find(
      s => s.package.toLowerCase().includes(pkgNameForSearch)
    );


    const featureButtons = service ? service.features.map(f => ({
      label: `APA ITU ${f.toUpperCase()}?`,
      text: `Savira, jelasin dong tentang ${f} itu apa?`,
      nextId: `explain_${f.toLowerCase().replace(/\s+/g, '_')}_${pkgId}`
    })) : [];

    return [
      ...featureButtons,
      { label: '✅ SAYA MAU PESAN', text: 'Booking sekarang!', nextId: 'contact' },
      { label: '⬅️ KEMBALI', text: 'Balik ke detail paket', nextId: `detail_${pkgId}` }
    ];
  }

  if (props.nextId.startsWith('explain_') || props.nextId.startsWith('ask_')) {
    

    let backLabel = '⬅️ KEMBALI';
    let backText = 'Mau nanya yang tadi lagi';
    let backId = 'root';

    if (props.nextId.startsWith('explain_')) {
    
      const parts = props.nextId.split('_');
      const pkgId = parts[parts.length - 1];
      backLabel = '⬅️ KEMBALI KE BENEFIT';
      backText = 'Lihat daftar fitur lagi';
      backId = `benefits_${pkgId}`;
    } 
    else if (props.nextId.startsWith('ask_')) {
    
      backLabel = '⬅️ TANYA LAINNYA';
      backText = 'Balik ke daftar pertanyaan umum';
      backId = 'more_questions';
    }

    return [
      { label: backLabel, text: backText, nextId: backId },
      { label: '💰 BOOKING SEKARANG', text: 'Amankan slot!', nextId: 'contact' },
      { label: '🏠 MENU UTAMA', text: 'Ke awal', nextId: 'root' }
    ];
  }

  return staticTree[props.nextId] || [];
});
</script>

<template>
  <div v-if="options.length" class="flex flex-wrap gap-2 mt-2 px-4">
    <button 
      v-for="option in options" 
      :key="option.label"
      @click="emit('select', option)"
      class="px-3 py-2 bg-white border border-emerald-500 text-emerald-600 rounded-xl text-[10px] font-bold hover:bg-emerald-50 transition-all active:scale-95 shadow-sm pointer-events-auto"
    >
      {{ option.label }}
    </button>
  </div>
</template>