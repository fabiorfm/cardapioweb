<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Suptec</q-toolbar-title>

        <div>DivRede</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Componentes de Informação</q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Chamados',
    caption: 'Todos os Chamados',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Serviços Realizados',
    caption: 'Quantidade de Serviços Realizados ',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Serviços em Abertos',
    caption: 'Quantidade de Serviços em Abertos',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Total de Serviços do Mês',
    caption: 'Listagem de serviços realizados por cada mês',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Pendencias de Retorno',
    caption: 'Serviços iniciados, mas com pendencias de conclusão',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Técnicos',
    caption: 'técnicos por serviços realizados',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Máteriais',
    caption: 'Estoque e que precisam ser comprados',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
