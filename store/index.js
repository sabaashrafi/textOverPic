export const state = () => ({
  images: []
});

export const mutations = {
  setImages: (state, image) => {
    state.images.push(image);
  }
};
export const getters = {
  getImages: state => state.images,
};
