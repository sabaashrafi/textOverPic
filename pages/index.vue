<template>
  <div>
    <v-row>
      <v-col cols="4">
        <v-card class="pa-10">
          <h2 class="primary--text mb-3">Enter your photo and text</h2>
          <!-- form  -->
          <v-form v-model="valid">
            <v-text-field
              v-model="form.image_url"
              name="photoUrl"
              outlined
              label="enter photo url"
            ></v-text-field>
            <v-textarea
              v-model="form.text"
              name="text"
              label="your text"
              outlined
            ></v-textarea>
            <v-color-picker v-model="colors" mode="hexa"></v-color-picker>
            <v-btn @click="getPhoto" color="primary" class="mb-3" block
              >Fetch Image</v-btn
            >
          </v-form>
          <!-- End form -->
        </v-card>
      </v-col>
      <v-col cols="8">
        <!-- show current image -->
        <v-card height="400" class="pa-10 d-flex justify-center align-center">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
            v-if="loading"
          ></v-progress-circular>
          <v-img
            contain
            class="cyan darken-4"
            height="320"
            v-if="!loading"
            :src="currentImage"
          />
        </v-card>
        <!-- show all images -->
        <v-card class="pa-5 mt-4 d-flex">
          <v-img
            class="ma-1 rounded cyan darken-4"
            v-for="image in images"
            :key="image"
            :src="image"
            width="200"
            @click="currentImage = image"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      colors: null,
      valid: null,
      currentImage: "",
      loading: false
    };
  },
  computed: {
    //check images list
    images() {
      return this.$store.getters.getImages;
    }
  },
  methods: {
    //get photo and set to current image
    async getPhoto() {
      this.loading = true;
      this.form.overlay_color = this.colors.hex;
      await this.$main.getPhoto(this.form).then(res => {
        this.loading = false;
        this.currentImage = res.request.responseURL;
        this.$store.commit("setImages", this.currentImage);
      });
    }
  }
};
</script>

<style lang="scss"></style>
