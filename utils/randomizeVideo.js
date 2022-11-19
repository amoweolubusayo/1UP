let randomVideos = [
    'https://bafybeid226zkwaggve7zzbnyo6jveiqdqxvatcppcjrjvkyvnoefrxvu4m.ipfs.nftstorage.link',
    'https://bafybeigz2luetrn2wjomdph2eksd6lixiimkxp5joyz3gmzyqigcgueo2y.ipfs.nftstorage.link',
    'https://bafybeiai3lx2v67nz5nyavs27qrpkx5q7wqplwgiq63zvgq6cgqy7ndga4.ipfs.nftstorage.link'
  ];
  
  function randomizeVideo() {
    let randomNum = Math.floor(Math.random() * randomVideos.length);
    console.log("the random num", randomNum);
    console.log("the image returned", randomVideos[randomNum]);
    return randomVideos[randomNum];
  }
  
  export default randomizeVideo;