const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

imagemin(["./assets/images/*.{jpg,png,jpeg}"], {
  destination: "./assets/images/webp/",
  plugins: [
    imageminWebp({
      //   quality: 90
      //   ,
      //   resize: {
      //     width: 1000,
      //     height: 0
      //   }
    }),
  ],
}).then(() => {
  console.log("Images Converted Successfully!!!");
});
