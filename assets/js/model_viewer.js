const modelViewer = document.querySelector("model-viewer");

window.switchSrc = (element, name) => {
  const base = "https://github.com/HaydenRuffo/Portfolio-Models/raw/main/" + name + ".gltf";
  modelViewer.src = base;
  modelViewer.poster = 'https://modelviewer.dev/assets/ShopifyModels/Mixer.webp';
  const slides = document.querySelectorAll(".slide");
  slides.forEach((element) => {element.classList.remove("selected");});
  element.classList.add("selected");
};

document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
  // Keep slider interactions from affecting the XR scene.
  ev.preventDefault();
});
