<template>
  <button class="btn btn-primary btn-sm" @click="selected">
    {{ codeCountry }}
  </button>
</template>

<script>
export default {
  props: {
    codeCountry: String,
  },

  emits: ["selected"],

  methods: {
    selected() {
      this.$emit("selected", this.codeCountry);
    },
  },
};
</script>

<style scoped>
.btn-sm {
  margin-right: 10px;
}
</style>
