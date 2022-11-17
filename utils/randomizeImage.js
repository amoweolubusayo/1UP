let randomImages = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
  ];
  
  function randomizeImage() {
    let randomNum = Math.floor(Math.random() * randomImages.length);
    console.log("the random num", randomNum);
    console.log("the image returned", randomImages[randomNum]);
    return randomImages[randomNum];
  }
  
  export default randomizeImage;