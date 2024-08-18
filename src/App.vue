<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import { useGlobalProfileStore } from '@/stores/config'
import { ref } from 'vue'

const profile = useGlobalProfileStore()

const langList = ref(['zh', 'en', 'jp'])
const changeLang = (item: string) => {
  profile.loadLocaleMessages(item)
}
</script>

<template>
  <main>
    <header>
      <img alt="Vue logo" class="logo" src="/icon/logo.svg" width="125" height="125" />
      <div class="container mx-auto">
        <HelloWorld msg="You did it!" />
        <button class="btn">Button</button>
        <button class="btn btn-primary">{{ $t('message') }}</button>
        <div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn m-1">{{ profile.lang }}</div>
          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li v-for="item in langList" :key="item" @click="changeLang(item)">
              <a>{{ item }}</a>
            </li>
          </ul>
        </div>
        <h1>{{ $t('message') }}</h1>
      </div>
    </header>
  </main>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
