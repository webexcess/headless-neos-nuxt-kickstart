import Vue from 'vue'

Vue.mixin({
  methods: {
    getOption(optionName, node = null) {
      try {
        if (node === null) {
          node = this;
        }

        let options = JSON.parse(node.options);
        return options[optionName];
      } catch (e) {
        return null;
      }
    }
  }
})
