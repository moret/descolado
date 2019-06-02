<template>
  <header class="header-bar-container">
    <img src="/brigadeiro-nuit.jpg" width=80 height=80 />
    <input type="text" placeholder="Busca" />
    <div id="unread-count-space">loading...</div>
    <button>logout</button>
  </header>
</template>

<script>
export default {
  mounted() {
    Forum.showUnreadCount('unread-count-space');
  },
};
</script>

<style>
.header-bar-container {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
}
</style>
