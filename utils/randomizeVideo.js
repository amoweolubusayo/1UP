let randomVideos = [
  "f01ba6138lz6t3sj",
  "2b1dky4foaw3dppl",
  "8ec4t4oo5s6fbgyg",
  "2030de7o9s74y5m1",
  "bcf6z2ek2qblgjrr",
  "3695loircs9bh4u8",
];

let lastVideoIndex = -1;
function randomizeVideo() {
  let videoIndex = (lastVideoIndex + 1) % randomVideos.length; // get next index
  console.log("the video index", videoIndex);
  console.log("the video returned", randomVideos[videoIndex]);
  lastVideoIndex = videoIndex; // store last index for next call
  return randomVideos[videoIndex];
}

export default randomizeVideo;
