<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date('date-time') }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
              @click="openMenu = !openMenu"
              ref="dropdown"
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul
              @click="openMenu = !openMenu"
              v-if="openMenu"
              id='dropdown'
              class='dropdown-content dropdown-content_open'>
            <li>
              <router-link tag="a" to="/profile" href="#" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a @click.prevent="logout" href="#" class="black-text">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000)
  },
  data() {
    return {
      openMenu: false,
      date: new Date(),
      interval: null
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/login?messagi=logout');
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>


<style>
  .dropdown-content_open {
    display: block !important;
    opacity: 1 !important;
    right: 0;
    left: auto !important;
  }
</style>
