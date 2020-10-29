<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";

@Component({
  name: "SortIcon",
  components: {}
})
export default class SortIcon extends mixins() {
  /**
   * Which direction the sort is. `asc` or `desc` are the available options.
   */
  @Prop({ default: false })
  order!: boolean;
}
</script>

<template>
  <span>({{ order ? order : "sortable" }})</span>
</template>
