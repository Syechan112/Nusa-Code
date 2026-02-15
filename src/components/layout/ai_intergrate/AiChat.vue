<template>
  <div
    class="fixed z-[90] flex flex-col items-end pointer-events-none
           bottom-11 right-24 
           md:bottom-10 md:right-13">

    <!-- Modal Konfirmasi Clear -->
    <div v-if="isClearModalOpen" class="fixed inset-0 z-[110] flex items-center justify-center p-4">
      
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isClearModalOpen" 
             @click="isClearModalOpen = false" 
             class="absolute inset-0 bg-slate-950/40 backdrop-blur-md pointer-events-auto">
        </div>
      </transition>

      <transition
        enter-active-class="transition duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        enter-from-class="opacity-0 scale-50 translate-y-10"
        enter-to-class="opacity-100 scale-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isClearModalOpen" 
             class="relative bg-white p-8 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] max-w-sm w-full pointer-events-auto border border-white/20">
          
          <div class="w-16 h-16 bg-red-50 rounded-3xl flex items-center justify-center mb-6 mx-auto transition-transform hover:rotate-12">
            <svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
          </div>

          <div class="text-center">
            <h3 class="text-lg font-black uppercase tracking-tighter text-slate-900 mb-2">Hapus Memori?</h3>
            <p class="text-[11px] text-slate-500 leading-relaxed mb-8 font-medium">
              Tindakan ini akan menghapus jejak digital percakapan Anda secara permanen.
            </p>
          </div>

          <div class="flex flex-col gap-3">
            <button @click="confirmClearChat" 
                    class="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-red-500/30">
              Ya, Hapus Sekarang
            </button>
            <button @click="isClearModalOpen = false" 
                    class="w-full py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all">
              Batalkan
            </button>
          </div>
        </div>
      </transition>
    </div>

    <!-- Chat Window -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-10"
      enter-to-class="opacity-100 scale-100 translate-y-0"
    >
      <div v-if="isChatOpen" 
           :class="[
             'pointer-events-auto flex flex-col shadow-2xl overflow-hidden',
             'md:relative md:mb-4 md:mr-[-0.5px] md:w-[400px] md:h-[500px] md:rounded-4xl',
             'fixed inset-0 m-4 h-[calc(100vh-8rem)] my-auto max-h-[550px] rounded-4xl z-[100] md:inset-auto md:z-auto'
           ]">
        
        <div @click="isChatOpen = false" class="md:hidden absolute inset-0 -z-10 bg-slate-900/40 backdrop-blur-sm"></div>

        <!-- Header -->
        <div class="p-4 bg-slate-900 text-white flex justify-between items-center relative z-10">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-full overflow-hidden border border-slate-700">
              <img :src="saviraImg" alt="Savira" class="w-full h-full object-cover" />
            </div>
            <span class="text-[10px] font-black uppercase tracking-widest">Savira Assistant</span>
          </div>
          <div class="flex items-center gap-2">
            <button @click="isClearModalOpen = true" class="p-1.5 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button @click="isChatOpen = false" class="p-1 hover:bg-white/10 rounded-full text-white">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" stroke-width="2.5"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Chat Body -->
        <div ref="chatBox" class="flex-1 bg-white p-4 overflow-y-auto flex flex-col gap-3 relative z-10">
          <div v-for="(msg, index) in messages" :key="index" 
               :class="['max-w-[85%] px-4 py-2 rounded-2xl text-[11px] font-medium leading-relaxed', 
                       msg.role === 'user' ? 'bg-emerald-500 text-white self-end rounded-br-none shadow-sm' : 'bg-slate-100 text-slate-700 self-start rounded-bl-none']">
            {{ msg.text }}
          </div>
        </div>

        <!-- Input -->
        <form @submit.prevent="sendMessage" class="p-4 bg-white border-t border-slate-100 flex gap-2 relative z-10">
          <input v-model="userInput" type="text" placeholder="Tulis pesan..." class="flex-1 bg-slate-50 border-none rounded-xl px-4 py-2 text-xs focus:ring-1 focus:ring-emerald-500 outline-none">
          <button type="submit" class="bg-emerald-500 text-white p-2 rounded-xl hover:bg-emerald-600 transition-all">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2.5"/>
            </svg>
          </button>
        </form>
      </div>
    </transition>

    <!-- Floating Button -->
    <button @click="isChatOpen = !isChatOpen" class="flex items-center gap-2.5 p-1 pr-4 bg-white border border-slate-200 rounded-full shadow-lg pointer-events-auto transition-all duration-300 active:scale-95 hover:border-emerald-500 group">
      <div class="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden flex-shrink-0">
        <img :src="saviraImg" class="w-full h-full object-cover group-hover:scale-110 transition-transform" />
      </div>
      <span class="text-[10px] font-black text-slate-900 uppercase tracking-widest italic leading-none">Tanya <span class="text-emerald-500">Savira</span></span>
    </button>

  </div>
</template>

<script setup>
import { ref, nextTick, watch, onMounted } from 'vue';
import saviraImg from '@/assets/image/ai_image/savira.png';

const STORAGE_KEY = 'savira_chat_history';
const isChatOpen = ref(false);
const isClearModalOpen = ref(false);
const userInput = ref('');
const chatBox = ref(null);

const messages = ref([
  { role: 'assistant', text: 'Halo! Saya Savira. Ada yang bisa saya bantu hari ini?' }
]);

watch(messages, (newVal) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal));
}, { deep: true });

onMounted(() => {
  const savedHistory = localStorage.getItem(STORAGE_KEY);
  if (savedHistory) {
    try {
      messages.value = JSON.parse(savedHistory);
      scrollToBottom();
    } catch (e) { console.error(e); }
  }
});

const scrollToBottom = async () => {
  await nextTick();
  if (chatBox.value) chatBox.value.scrollTop = chatBox.value.scrollHeight;
};

// Clear chat
const confirmClearChat = () => {
  localStorage.removeItem(STORAGE_KEY);
  messages.value = [{ role: 'assistant', text: 'Halo! Saya Savira. Ada yang bisa saya bantu hari ini?' }];
  isClearModalOpen.value = false;
};

// Send message (production-ready API)
const sendMessage = async () => {
  if (!userInput.value.trim()) return;

  const input = userInput.value;
  messages.value.push({ role: 'user', text: input });
  userInput.value = '';
  scrollToBottom();

  try {
    // Ambil endpoint dari env, misal VITE_API_URL
    const apiUrl = import.meta.env.VITE_API_URL || '/api/chat';

    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    messages.value.push({
      role: 'assistant',
      text: data.reply || 'Terjadi kesalahan.'
    });

  } catch (err) {
    messages.value.push({
      role: 'assistant',
      text: 'Server sedang sibuk.'
    });
  }

  scrollToBottom();
};
</script>