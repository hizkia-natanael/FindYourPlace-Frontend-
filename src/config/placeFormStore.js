import { create } from "zustand";

const usePlaceFormStore = create((set) => ({
  form: {
    name: "",
    description: "",
    address: "",
    googleMapsLink: "",
    image: "",
  },
  imgPreview: null,
  setFormData: (formType, formValue) =>
    set((state) => ({
      form: { ...state.form, [formType]: formValue },
    })),
  setImgPreview: (preview) =>
    set(() => ({
      imgPreview: preview,
    })),
  resetFormData: () =>
    set(() => ({
      form: {
        name: "",
        description: "",
        address: "",
        googleMapsLink: "",
        image: "",
      },
      imgPreview: null,
    })),
}));

export default usePlaceFormStore;
