<template>
  <div>
    <Header />
    <FiltersPanel :filters="filters" :setFilters="setFilters" />
    <MainPanel
      :sorting="sorting"
      :tickets="sortedTickets"
      :isLoading="isLoading"
      v-on:changeSorting="changeSorting"
    />
  </div>
</template>

<script>
import Header from "./components/Header";
import FiltersPanel from "./components/FiltersPanel";
import MainPanel from "./components/MainPanel";
import { addId } from "./utils/add-id";
import filterTickets from "./utils/filterTickets";
import sortTickets from "./utils/sortTickets";

export default {
  components: { Header, FiltersPanel, MainPanel },
  data() {
    return {
      searchId: null,
      tickets: [],
      filters: {
        all: false,
        direct: true,
        one: true,
        two: true,
        three: false,
      },
      sorting: "cheapest",
      isLoading: true,
      counterError: 0,
      url: "https://front-test.beta.aviasales.ru",
    };
  },
  created() {
    this.fetchSearchId(this.url);
  },

  computed: {
    filteredTickets: function() {
      return filterTickets(this.tickets, this.filters);
    },
    sortedTickets: function() {
      return sortTickets(this.filteredTickets, this.sorting);
    },
  },

  watch: {
    searchId: function() {
      this.fetchTickets(this.url, this.searchId);
    },
  },
  methods: {
    changeSorting: function(sorting) {
      this.sorting = sorting;
    },

    setFilters: function(filter) {
      if (filter === "all") {
        if (this.filters.all) {
          this.filters = {
            all: false,
            direct: false,
            one: false,
            two: false,
            three: false,
          };
        } else {
          this.filters = {
            all: true,
            direct: true,
            one: true,
            two: true,
            three: true,
          };
        }
      } else {
        this.filters[filter] = !this.filters[filter];
        this.filters.all = false;
      }
    },

    fetchSearchId: function(url) {
      fetch(url + "/search")
        .then((res) => res.json())
        .then((data) => {
          const id = data.searchId;
          if (id) {
            this.searchId = id;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    fetchTickets: function(url, searchId) {
      fetch(`${url}/tickets?searchId=${searchId}`)
        .then((res) => {
          if (res.status == 404) {
            throw new Error("Wrong search id");
          } else if (!res.ok) {
            throw new Error("Server problem");
          }
          return res.json();
        })
        .then((data) => {
          if (data) {
            const ticketsWithId = addId(data.tickets);
            this.counterError = 0;
            this.tickets.push(...ticketsWithId);
            if (this.isLoading) {
              this.isLoading = false;
            }
            if (!data.stop) {
              this.fetchTickets(url, searchId);
            } else {
              //console.log('stop');
            }
          }
        })
        .catch((error) => {
          this.counterError++;
          if (this.counterError > 5) return;
          if (error.message === "Server problem") {
            this.fetchTickets(url, searchId);
          }
          if (error.message === "Wrong search id") {
            this.fetchSearchId(url);
          }
        });
    },
  },
};
</script>

<style scoped>
div {
  width: 960px;
  height: 100%;
  margin: auto;
  overflow: auto;
  background-color: #f3f7fa;
  padding: 0 103px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 12px;
}
</style>
<style>
html,
body {
  margin: 0px;
}
* {
  box-sizing: border-box;
}
</style>
