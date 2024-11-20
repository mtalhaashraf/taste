<script lang="ts">
  import { formSchema } from "./schema";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  export let data;

  let showPassword = false;

  const {
    errors,
    form: formData,
    validate,
    message,
  } = superForm(data.form, {
    validators: zodClient(formSchema),
  });

  function validateInput(field: any) {
    validate(field);
  }

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }

  $: if ($message) {
    if ($message.includes("successfully")) {
      onMount(() => {
        setTimeout(() => {
          goto("/");
        }, 2000);
      });
    } else {
      onMount(() => {
        setTimeout(() => {
          $message = null;
        }, 2000);
      });
    }
  }
</script>

<form method="POST" class="relative w-full min-h-screen">
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
    {#if $message}
      {#if $message?.includes("successfully")}
        <h3 class="text-green-500 text-2xl my-2">
          {$message}
        </h3>
      {:else}
        <h3 class="text-red-500 text-2xl my-2">{$message}</h3>
      {/if}
    {/if}
    <!-- firstname, lastname -->
    <div
      class="w-full flex flex-col xl:flex-row items-end lg:gap-4 grid-flow-row"
    >
      <div class="flex flex-col gap-2 w-full">
        <label for="firstname" class="text-white font-thin text-2xl xl:text-4xl"
          >First Name</label
        >
        <input
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Kalvin"
          class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
          bind:value={$formData.firstname}
          on:input={() => validateInput("firstname")}
        />
        {#if $errors.firstname}
          <p class="text-red-500">{$errors.firstname}</p>
        {/if}
      </div>
      <div class="h-11 w-[0.5px] bg-white hidden xl:block"></div>
      <div class="flex flex-col gap-2 w-full">
        <label for="lastname" class="text-white font-thin text-2xl xl:text-4xl"
          >Last Name</label
        >
        <input
          id="lastname"
          name="lastname"
          type="text"
          placeholder="candy"
          class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
          bind:value={$formData.lastname}
          on:input={() => validateInput("lastname")}
        />
        {#if $errors.lastname}
          <p class="text-red-500">{$errors.lastname}</p>
        {/if}
      </div>
    </div>

    <!-- email -->
    <div class="flex flex-col w-full gap-2">
      <label for="email" class="text-white font-thin text-2xl xl:text-4xl"
        >E-mail</label
      >
      <input
        id="email"
        name="email"
        type="email"
        placeholder="abc@example.com"
        class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
        bind:value={$formData.email}
        on:input={() => validateInput("email")}
      />
      {#if $errors.email}
        <p class="text-red-500">{$errors.email}</p>
      {/if}
    </div>

    <!-- password -->
    <div class="flex flex-col w-full gap-2">
      <label for="password" class="text-white font-thin text-2xl xl:text-4xl"
        >Password</label
      >
      <input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="••••••••"
        bind:value={$formData.password}
        on:input={() => validateInput("password")}
        class="bg-[#E0F2D8]/30 hover:bg-[#E0F2D8]/50 border-2 p-1 xl:p-2 border-black/50 hover:border-black rounded-xl"
      />
      <button
        type="button"
        class="absolute right-2 top-2 text-slate-500 text-sm"
        on:click={togglePasswordVisibility}
      >
        {#if showPassword}
          Hide
        {/if}
        {#if !showPassword}
          Show
        {/if}
      </button>
      {#if $errors.password}
        <p class="text-red-500">{$errors.password}</p>
      {/if}
    </div>

    <div class="flex flex-row gap-4 w-full justify-center items-center">
      <!-- submit buttonL -->
      <button
        type="submit"
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
</form>
