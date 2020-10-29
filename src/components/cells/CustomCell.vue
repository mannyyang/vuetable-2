<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import VuetableFieldMixin from "../../components/VuetableFieldMixin.vue";

@Component({
  name: "CustomCell",
  components: {},
  mixins: [VuetableFieldMixin]
})
export default class CustomCell extends mixins() {
  /**
   * Indicate whether Field Component should render the "header" or "data"
   * template section.
   */
  @Prop({ default: false })
  isHeader!: boolean;

  /**
   * The title option from field definition object is passed via title prop.
   * You can simply use title prop to render column title if there is no
   * special need other than display the column title.
   */
  @Prop({ default: "" })
  title!: string;

  @Prop({ default: () => null })
  rowData!: string;

  @Prop({ default: -1 })
  rowIndex!: number;

  /**
   * The field definition object of this field. Remember that you can use
   * field definition object to hold additional data, parameters, or results.
   */
  @Prop({ default: () => null })
  rowField!: object;

  /**
   * The click event needs to be bound on the header to have it bubble up for
   * sorting purposes.
   */
  onHeaderClick(event: unknown) {
    this.$emit("click", event);
  }
}
</script>

<template>
  <th v-if="isHeader" scope="col" @click="onHeaderClick" v-html="title"></th>
  <td v-else>{{ rowData.name }}</td>
</template>
