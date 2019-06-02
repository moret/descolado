<template>
  <nav class="navigation-bar-container">
    <h3>granulados</h3>
    <NLink class="navigation-bar-link" to="/">home</NLink>
    <NLink class="navigation-bar-link" to="/forum">forum</NLink>
    <NLink class="navigation-bar-link" to="/lesson">lesson</NLink>
  </nav>
</template>

<style>
.navigation-bar-link {
  padding: 10% 5%;
}

.navigation-bar-container {
  display: flex;
  flex-flow: column;
  padding: 0 2%;
}
</style>
