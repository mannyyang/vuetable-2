// TODO: create typescript version
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class MyMixin extends Vue {
  myMixinValue = "Fetch my mixin";
}

// export default {
//   props: {
//     rowData: {
//       type: Object,
//       default: null
//     },
//     rowIndex: {
//       type: Number
//     },
//     rowField: {
//       type: Object
//     },
//     isHeader: {
//       type: Boolean,
//       default: false
//     },
//     title: {
//       type: String,
//       default: ""
//     },
//     vuetable: {
//       type: Object,
//       default: null
//     }
//   }
// };
