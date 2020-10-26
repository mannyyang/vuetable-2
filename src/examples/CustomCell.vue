<script>
import VuetableFieldMixin from "../components/VuetableFieldMixin";

export default {
  name: "CustomCell",

  components: {},

  mixins: [VuetableFieldMixin],

  props: {
    /**
     * Indicate whether Field Component should render the "header" or "data"
     * template section.
     */
    isHeader: {
      type: Boolean,
      default: false
    },
    /**
     * The title option from field definition object is passed via title prop.
     * You can simply use title prop to render column title if there is no
     * special need other than display the column title.
     */
    title: {
      type: String,
      default: ""
    },
    rowData: {
      type: Object,
      default: () => null
    },
    rowIndex: {
      type: Number,
      default: -1
    },
    /**
     * The field definition object of this field. Remember that you can use
     * field definition object to hold additional data, parameters, or results.
     */
    rowField: {
      type: Object,
      default: () => null
    }
  },

  methods: {
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<template>
  <th v-if="isHeader" scope="col" @click="onClick">{{ title }}</th>
  <td v-else>{{ rowData.name }}</td>
</template>
