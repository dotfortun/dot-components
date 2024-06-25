<script setup lang="ts">
import Credits from "./components/Credits.vue";
</script>

<template>
  <div class="container bg-slate-900">
    <Credits />
    <hr />
    <Credits eve-credits />
    <hr />
    <Credits :creators="[{ name: 'Name 1', href: 'A' }]" />
    <hr />
    <Credits
      :creators="[
        { name: 'Name 1', href: 'A' },
        { name: 'Name 2', href: 'B' },
      ]"
    />
    <hr />
    <Credits
      :creators="[
        { name: 'Name 1', href: 'A' },
        { name: 'Name 2', href: 'B' },
        { name: 'Name 3', href: 'C' },
      ]"
    />
    <hr />
    <Credits use-fa>
      <template #extra>
        Extra credits and thanks that don't have to have a set form.
      </template>
    </Credits>
    <hr />
    <Credits use-fa />
    <hr />
    <Credits use-fa eve-credits />
    <hr />
    <Credits use-fa :creators="[{ name: 'Name 1', href: 'A' }]" />
    <hr />
    <Credits
      use-fa
      :creators="[
        { name: 'Name 1', href: 'A' },
        { name: 'Name 2', href: 'B' },
      ]"
    />
    <hr />

    <Credits
      use-fa
      :creators="[
        { name: 'Name 1', href: 'A' },
        { name: 'Name 2', href: 'B' },
        { name: 'Name 3', href: 'C' },
      ]"
    />
    <hr />
    <Credits use-fa>
      <template #extra>
        Extra credits and thanks that don't have to have a set form.
      </template>
    </Credits>
  </div>
</template>

<style scoped></style>
