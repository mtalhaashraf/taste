<script>
  import { goto } from "$app/navigation";
</script>

<div class="relative w-full min-h-screen">
  <!-- Background Image (fixed position) -->
  <div
    class="fixed inset-0 bg-cover bg-center"
    style="background-image: url('../auth-background.png');"
  ></div>

  <div
    class="w-1/3 h-screen relative mx-20 md:mx-28 lg:mx-36 2xl:mx-52 gap-2 xl:gap-8 font-poiret flex flex-col justify-center items-center"
  >
    <p class="text-5xl xl:text-7xl text-black">
      Sign <span class="text-white">Up</span>
    </p>
    <!-- firstname, lastname -->
    <div
      class="w-full flex flex-col xl:flex-row items-end lg:gap-4 grid-flow-row"
    >
      <div class="flex flex-col gap-2 w-full">
        <label for="fname" class="text-white font-thin text-2xl xl:text-4xl"
          >First Name</label
        >
        <input
          type="text"
          class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
        />
      </div>
      <div class="h-11 w-[0.5px] bg-white hidden md:block"></div>
      <div class="flex flex-col gap-2 w-full">
        <label for="lname" class="text-white font-thin text-2xl xl:text-4xl"
          >Last Name</label
        >
        <input
          type="text"
          class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
        />
      </div>
    </div>
    <!-- email -->
    <div class="flex flex-col w-full gap-2">
      <label for="email" class="text-white font-thin text-2xl xl:text-4xl"
        >E-mail</label
      >
      <input
        type="text"
        class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
      />
    </div>
    <!-- password -->
    <div class="flex flex-col w-full gap-2">
      <label for="password" class="text-white font-thin text-2xl xl:text-4xl"
        >Password</label
      >
      <input
        type="password"
        class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
      />
    </div>
    <!-- submit buttonL -->
    <div class="flex flex-row gap-4 w-full justify-center items-center">
      <button
        type="button"
        class="p-2 w-1/3 xl:p-3 text-white text-xl xl:text-3xl rounded-2xl bg-[#3B3D37]/65 hover:bg-[#3B3D37]/80"
        >Submit</button
      >
      <p class="text-black text-3xl xl:text-5xl">OR</p>
      <button
        type="button"
        on:click={() => goto("/signin")}
        class="p-2 w-1/3 xl:p-3 text-white text-xl xl:text-3xl rounded-2xl bg-[#3B3D37]/65 hover:bg-[#3B3D37]/80"
        >Sign In</button
      >
    </div>
  </div>
</div>
