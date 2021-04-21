<template>
  <div class="container">
    <h1>Новости</h1>
    <input
      type="text"
      class="form-control"
      placeholder="Введите идентификатор страны. Например RU"
      v-model="identificationCountry"
      @input="filteredCodesOfCountries"
      @keyup.enter="subscribeOnNews"
    />
    <div class="filter" v-if="identificationCountry.length">
      <FilterButton
        v-for="item in filteredCodes"
        :key="item.title"
        @selected="setSelectedFilter"
        :codeCountry="item"
      />
    </div>
    <button class="btn btn-primary" @click="subscribeOnNews">Загрузить</button>
    <hr />
    <div class="list-group">
      <ListItem v-for="item in news" :key="item" :news="item" />
    </div>
  </div>
</template>

<script>
import { getLatestNews } from "./api.js";
import ListItem from "./ListItem.vue";
import FilterButton from "./FilterButton.vue";
import { CODES_OF_COUNTRIES } from "./utils.js";

export default {
  name: "App",
  components: {
    ListItem,
    FilterButton,
  },

  data() {
    return {
      identificationCountry: "",
      news: [],
      filteredCodes: [],
    };
  },

  methods: {
    subscribeOnNews() {
      getLatestNews(this.identificationCountry).then(
        (res) => (this.news = res)
      );
      this.identificationCountry = "";
    },

    setSelectedFilter(id) {
      this.filteredCodes = [];
      this.identificationCountry = id;
    },

    filteredCodesOfCountries() {
      this.filteredCodes = CODES_OF_COUNTRIES.filter((code) =>
        code.includes(this.identificationCountry.toLowerCase())
      );
    },
  },
};
</script>

<style
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
>
.btn-primary {
  margin-top: 10px;
}
.filter {
  justify-content: start;
}
</style>
