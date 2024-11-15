<script>
  let imageSrc = "../voice.png"; // Initial image source
  let videoElement; // Reference to the video element
  let isPlaying = false; // Flag to track if the video is playing

  function toggleVideo() {
    if (isPlaying) {
      videoElement.pause();
      imageSrc = "../voice.png"; // Change image to mute
    } else {
      videoElement.play();
      imageSrc = "../mute.png"; // Change image to unmute
    }
    isPlaying = !isPlaying; // Toggle the play state
  }
</script>

<div class="relative w-full min-h-screen">
  <div
    class="fixed inset-0 bg-cover bg-center blur-sm"
    style="background-image: url('../back.jpg');"
  ></div>

  <div class="fixed inset-0 bg-black opacity-85"></div>

  <div class="relative z-10 flex flex-col items-center text-white h-screen">
    <div class="flex justify-center my-2">
      <img src="../logo.png" alt="Logo" class="h-32 w-36" />
    </div>

    <div
      class="text-4xl font-medium text-black font-poiret bg-white opacity-35 w-full text-center p-1"
    >
      "Discover Your Movie Taste!"
    </div>

    <div class="bg-black w-1/3 h-full">
      <div class="">
        <video
          bind:this={videoElement}
          data-v-27edef16=""
          data-test="video-content"
          preload="auto"
          src="https://cdn.dribbble.com/userupload/12266285/file/original-3b009b0c0dccfa3891b49158bb3dbd81.mp4"
          playsinline="true"
          loop="loop"
          draggable="false"
          class="w-full h-full object-cover"
        ></video>
      </div>

      <div class="w-full">
        <img
          src={imageSrc}
          alt=""
          class="filter invert brightness-0 h-24 w-24 mx-auto cursor-pointer"
          on:click={toggleVideo}
        />
      </div>
    </div>
  </div>
</div>
