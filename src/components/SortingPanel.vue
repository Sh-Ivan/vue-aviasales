<template>
  <div>
    <button
      v-for="(sortValue, sortName) in sortNameMap"
      :name="sortName"
      :key="sortName"
      :class="sorting === sortName ? 'selected' : ''"
      v-on:click="$emit('changeSorting', $event.target.name)"
    >
      {{ sortValue }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["sorting"],

  data() {
    return {
      sortNameMap: {
        cheapest: "Самый дешевый",
        fastest: "Самый быстрый",
        optimal: "Оптимальный",
      },
    };
  },
};
</script>

<style scoped>
div {
  height: 50px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
}

button {
  height: 100%;
  flex-basis: 33.33333%;
  padding: 0;
  background-color: #fff;
  border: 1px solid #dfe5ec;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: "#4a4a4a";
  background-color: "#fff";
  cursor: pointer;
}
button.selected {
  color: #fff;
  background-color: #2196f3;
}
button:first-child {
  border-radius: 5px 0 0 5px;
}
button:last-child {
  border-radius: 0 5px 5px 0;
}

button:active,
button:focus {
  outline: none;
}
</style>
