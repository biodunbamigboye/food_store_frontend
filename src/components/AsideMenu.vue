<script setup>
import "@appwrite.io/pink"; 
import "@appwrite.io/pink-icons";


// const toggleSidebar = () => {
//   isSidebarOpen.value = !isSidebarOpen.value;
// };
</script>

<template>
  <section class="sidebar-wrapper">
    <button
      class="menu-button"
      @click="toggleSidebar"
      style="background-color: var(--color-neutral-0)"
    >
      <span class="icon-menu" style="font-size: 30px"></span>
    </button>
    <div class="side-nav sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
      <Profile />
      <div class="side-nav-main">
        <section class="drop-section">
          <ul class="drop-list">
            <li class="drop-list-item">
              <router-link to="/dashboard" class="drop-button" exact>
                <span class="icon-home" aria-hidden="true"></span>
                <span class="text">Dashboard</span>
              </router-link>
            </li>
            <li class="drop-list-item">
              <router-link to="/company" class="drop-button">
                <span class="icon-document" aria-hidden="true"></span>
                <span class="text">Company</span>
              </router-link>
            </li>
            <li class="drop-list-item">
              <router-link to="/users" class="drop-button">
                <span class="icon-user-group" aria-hidden="true"></span>
                <span class="text">Users</span>
              </router-link>
            </li>
            <li class="drop-list-item">
              <router-link to="/stocks" class="drop-button">
                <span class="icon-briefcase" aria-hidden="true"></span>
                <span class="text">Stock</span>
              </router-link>
            </li>
            <li class="drop-list-item">
              <router-link to="/stock-cycle" class="drop-button">
                <span class="icon-chart-bar" aria-hidden="true"></span>
                <span class="text">Stock Cycle</span>
              </router-link>
            </li>
            <li class="drop-list-item">
              <router-link to="/sales" class="drop-button">
                <span class="icon-chart-bar" aria-hidden="true"></span>
                <span class="text">Sales</span>
              </router-link>
            </li>
          </ul>
        </section>
        <footer class="side-nav-bottom" style="padding-top: 230px">
        <section class="drop-section">
          <button class="drop-button" @click="logOut" type="button">
            <span class="icon-logout-left" aria-hidden="true"></span>
            <span class="text">Logout</span>
          </button>
        </section>
      </footer>
      </div>
      
    </div>
  </section>
</template>

<style>
.sidebar-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  flex: 0 0 auto;
  width: 250px;
}

.sidebar {
  position: fixed;
  flex: 0 0 auto;
  width: 250px;
  flex: 1; /* Allow the sidebar to expand to fill the available height */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
  transition: width 0.3s ease; /* Add a smooth transition for width changes */
}

.sidebar-open {
  width: 250px; /* Set the width to its original value when open */
}

.menu-button {
  display: none; /* Hide the button by default */
}

@media (max-width: 768px) {
  .sidebar-wrapper .sidebar {
    width: 0; /* Set the width to zero when closed on mobile screens */
  }

  .sidebar-wrapper .sidebar-open {
    width: 250px;
    z-index: 999;
  }

  .sidebar-wrapper .menu-button {
    display: block;
  }
}

@media (min-width: 769px) {
  .sidebar-wrapper .menu-button {
    display: none;
  }
}
</style>