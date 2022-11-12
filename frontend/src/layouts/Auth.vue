<template>
  <div>
    <!-- <navbar /> -->
    <main>
      <section class="relative w-full h-full py-40 min-h-screen">
        <div
          class="
            absolute
            top-0
            w-full
            h-full
            bg-blueGray-800 bg-no-repeat bg-full
          "
          :style="`background-image: url('${registerBg2}');`"
        ></div>
        <router-view />
        <footer-admin absolute />
      </section>
    </main>
  </div>
</template>
<script>
// import Navbar from '@/components/Navbars/AuthNavbar.vue'
import registerBg2 from '@/assets/img/register_bg_2.png'
import FooterAdmin from '@/components/Footers/FooterAdmin.vue'

export default {
  data() {
    return {
      registerBg2
    }
  },
  components: {
    // Navbar,
    FooterAdmin
  }
}
</script>
