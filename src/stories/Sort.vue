<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import Vuetable from "../components/Vuetable.vue";

@Component({
  name: "TableSort",
  components: {
    Vuetable
  }
})
export default class TableSort extends mixins() {
  @Prop({
    default: () => [
      {
        name: "name",
        title: "Name",
        sortField: "name"
      },
      {
        name: "email",
        title: "Email",
        sortField: "email"
      },
      {
        name: "phone",
        title: "Phone",
        sortField: "phone"
      }
    ]
  })
  fields!: string[];

  currPage = 1;
  sortOrder = [
    {
      sortField: "email",
      direction: "asc"
    }
  ];

  transform(data: unknown) {
    const temp = {
      // @ts-ignore
      data,
      pagination: {
        current_page: this.currPage,
        per_page: 5,
        total: 11,
        last_page: 3
      }
    };

    return temp;
  }

  goToPage(page: number) {
    console.log(page);
    // @ts-ignore
    this.$refs.table.gotoPage(page);
  }
}
</script>

<template>
  <div>
    <vuetable
      ref="table"
      api-url="https://my-json-server.typicode.com/mannyyang/vuetable-3/users"
      pagination-path="pagination"
      data-path="data"
      :per-page="5"
      :query-params="{
        page: '_page',
        perPage: '_limit',
        sort: '_sort',
        order: '_order'
      }"
      :fields="fields"
      :transform="transform"
      :initial-page="currPage"
      :sort-order="sortOrder"
    >
    </vuetable>
    <button class="ui right labeled icon button" @click="goToPage(1)">
      Previous
      <i class="left arrow icon"></i>
    </button>
    <button class="ui right labeled icon button" @click="goToPage(2)">
      <i class="right arrow icon"></i>
      Next
    </button>
  </div>
</template>
