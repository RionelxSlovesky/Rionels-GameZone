const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-5xl my-16">Gallery</h1>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        <img
          src="https://i.ibb.co/2Wy3JNn/thresh.jpg"
          alt=""
          className="inline-block max-h-72 hover:scale-110"
        />
        <img
          src="https://i.ibb.co/5B6pp7t/ps5.jpg"
          alt=""
          className="inline-block max-h-72 hover:scale-110"
        />
        <img
          src="https://i.ibb.co/DLBSXT9/xboxS.jpg"
          alt=""
          className="inline-block max-h-72 hover:scale-110"
        />
        <img
          src="https://i.ibb.co/LtxqzNX/blitzcrank.jpg"
          alt=""
          className="inline-block max-h-72 hover:scale-110"
        />
        <img
          src="https://i.ibb.co/wJC3h1B/lolmaptshirt.jpg"
          alt=""
          className="inline-block max-h-72 hover:scale-110"
        />
        <img
          src="https://i.ibb.co/8rpZyVH/pubgmug.jpg"
          alt=""
          className="inline-block max-h-72 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Gallery;
