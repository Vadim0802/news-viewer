<template>
  <div class="list-group-item">
    <div class="d-flex w-100 justify-content-between">
      <a
        :href="news.url"
        target="_blank"
        aria-current="true"
        class="text-decoration-none"
        :class="{ 'link-secondary': wasRead }"
      >
        <h5 class="mb-1">{{ news.title }}</h5>
      </a>
    </div>
    <p class="mb-1">{{ news.description }}</p>
    <button
      class="btn btn-primary"
      @click="showTextContent = !showTextContent"
      :class="{ 'btn-secondary': wasRead }"
    >
      {{ showTextContent ? "Закрыть статью" : "Открыть статью" }}
    </button>
    <button
      class="btn btn-primary"
      v-if="showTextContent"
      @click="wasRead = !wasRead"
    >
      Отметить как {{ wasRead ? "непрочитанное" : "прочитанное" }}
    </button>
    <div v-if="showTextContent">
      <p>{{ news.description.repeat(5) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      wasRead: false,
      showTextContent: false,
    };
  },
};
</script>

<style scoped>
.btn {
  margin-right: 10px;
}
</style>
