<script setup lang="ts">
interface Creator {
  name: string;
  href: string;
}

const { creators, eveCredits, useFa } = defineProps<{
  creators?: Creator[];
  eveCredits?: boolean;
  useFa?: boolean;
}>();
</script>

<template>
  <footer class="credits--container">
    <div>
      <ul>
        <template v-if="creators && creators.length > 1">
          <li>
            Created by
            <a
              :href="creators[0].href"
              target="_blank"
              rel="noopener noreferrer"
              >{{ creators[0].name
              }}<i
                v-if="useFa"
                class="fa-solid fa-arrow-up-right-from-square"
              ></i
            ></a>
            <template v-for="creator of creators.slice(1, creators.length - 1)"
              >,
              <a :href="creator.href" target="_blank" rel="noopener noreferrer"
                >{{ creator.name }}
                <i
                  v-if="useFa"
                  class="fa-solid fa-arrow-up-right-from-square"
                ></i
              ></a> </template
            >, &
            <a
              :href="creators[creators.length - 1].href"
              target="_blank"
              rel="noopener noreferrer"
              >{{ creators[creators.length - 1].name
              }}<i
                v-if="useFa"
                class="fa-solid fa-arrow-up-right-from-square"
              ></i></a
            >.
          </li>
        </template>
        <template v-else-if="creators && creators.length === 1">
          <li>
            Created by
            <a
              :href="creators[0].href"
              target="_blank"
              rel="noopener noreferrer"
              >{{ creators[0].name
              }}<i
                v-if="useFa"
                class="fa-solid fa-arrow-up-right-from-square"
              ></i></a
            >.
          </li>
        </template>
        <template v-else>
          <li>
            Created by
            <a
              href="https://github.com/dotfortun"
              target="_blank"
              rel="noopener noreferrer"
              >Shane B.<i
                v-if="useFa"
                class="fa-solid fa-arrow-up-right-from-square"
              ></i
            ></a>
          </li>
        </template>
        <slot name="extra"></slot>
        <template v-if="eveCredits">
          <li>
            Donations to Peter Dostoevsky in Eve Online will be turned into
            lossmails.
          </li>
          <li>
            <a
              href="https://www.eveonline.com/signup?invc=5d52b821-87c0-4c81-bd0a-2cd88e9001b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Eve Online<i
                v-if="useFa"
                class="fa-solid fa-arrow-up-right-from-square"
              ></i>
            </a>
            or
            <a
              href="https://www.buymeacoffee.com/shanebelldev"
              target="_blank"
              rel="noopener noreferrer"
              >buy me a coffee<i
                v-if="useFa"
                class="fa-solid fa-arrow-up-right-from-square"
              ></i
            ></a>
          </li>
        </template>
        <template v-else>
          <li>
            If you like this, consider
            <a
              href="https://www.buymeacoffee.com/shanebelldev"
              target="_blank"
              rel="noopener noreferrer"
              >buying me a coffee<i
                v-if="useFa"
                class="fa-solid fa-arrow-up-right-from-square"
              ></i
            ></a>
          </li>
        </template>
      </ul>
    </div>

    <div>
      <a
        href="https://github.com/dotfortun/wormroller/labels/bug"
        target="_blank"
      >
        Found a bug? Tell us here!<i
          v-if="useFa"
          class="fa-solid fa-arrow-up-right-from-square"
        ></i>
      </a>
    </div>
  </footer>
</template>

<style scoped>
.credits--container {
  @apply flex-col max-sm:items-center;
  @apply container mb-5 mt-2 px-1 flex sm:flex-row sm:justify-between text-sm;
  @apply text-balance text-center sm:text-left;
}

.credits--container ul {
  @apply pl-0 flex flex-col items-center sm:items-start;
}

.credits--container ul li {
  @apply list-none;
}

.credits--container a {
  @apply hover:underline hover:underline-offset-2;
}

.credits--container i {
  @apply text-xs opacity-50 pl-[0.125rem];
}

.credits--container > div {
  @apply mt-2 sm:mt-0;
}
</style>