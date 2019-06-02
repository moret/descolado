<template>
  <section>
    <h2>forum</h2>
    <div id="forum-space">loading forum...</div>
  </section>
</template>

<script>
export default {
  mounted() {
    Forum.showForumScreen('forum-space');
  },
};
</script>
