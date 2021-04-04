<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-asset-table v-if="!isLoading" v-bind:assets="assets" />
  </div>
</template>

<script>
import API from "@/api.js";
import PxAssetTable from "@/components/PxAssetTable";
export default {
  name: "Home",
  components: {
    PxAssetTable,
  },

  data() {
    return {
      assets: [],
      isLoading: false,
    };
  },

  created() {
    this.isLoading = true;
    API.getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
