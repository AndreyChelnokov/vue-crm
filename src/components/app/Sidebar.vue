<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
      v-for="link in links"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
      :key="link.url"
    >
      <a :href="link.url" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>


  </ul>
</template>


<script>
export default {
  props: ['value'],
  name: 'Sidebar',
  data: () => {
    return {
      links: [
        {title: 'Счет', url: '/', exact: true},
        {title: 'История', url: '/histore'},
        {title: 'Планирование', url: '/planning'},
        {title: 'Новая запись', url: '/record'},
        {title: 'Категории', url: '/categories'}
      ]
    }
  }
}
</script>
