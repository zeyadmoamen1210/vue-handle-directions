<template>
  <div class="sidebar-component">
      <vs-sidebar
        :dir="$store.state.isRTL ? 'rtl' : 'ltr'"
        :right="$store.state.isRTL"
        :left="!$store.state.isRTL"
        hover-expand
        reduce
        color="#ffc107"
        v-model="active"
        open
        >
        <template #logo>
          <!-- ...img logo -->
          <img src="../assets/logo.png" alt="">
        </template>
        <vs-sidebar-item id="home">
          <template #icon>
            <font-awesome-icon icon="user-secret" />
          </template>
          Home
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
             <font-awesome-icon icon="user-secret" />
          </template>
          Market Overview
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
             <font-awesome-icon icon="user-secret" />
          </template>
          Music
        </vs-sidebar-item>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                <font-awesome-icon icon="user-secret" />
              </template>
              Social media
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="Instagram">
            <template #icon>
               <font-awesome-icon icon="user-secret" />
            </template>
            Instagram
          </vs-sidebar-item>
          <vs-sidebar-item id="twitter">
            <template #icon>
              <font-awesome-icon icon="user-secret" />
            </template>
            Twitter
          </vs-sidebar-item>
          <vs-sidebar-item id="Facebook">
            <template #icon>
               <font-awesome-icon icon="user-secret" />
            </template>
            Facebook
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                 <font-awesome-icon icon="user-secret" />
              </template>
              Coding
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="github">
            <template #icon>
               <font-awesome-icon icon="user-secret" />
            </template>
            Github
          </vs-sidebar-item>
          <vs-sidebar-item id="codepen">
            <template #icon>
               <font-awesome-icon icon="user-secret" />
            </template>
            Codepen
          </vs-sidebar-item>
          <vs-sidebar-item id="discord">
            <template #icon>
              <font-awesome-icon icon="user-secret" />
            </template>
            Discord
          </vs-sidebar-item>
          <vs-sidebar-item id="Javascript">
            <template #icon>
               <font-awesome-icon icon="user-secret" />
            </template>
            Javascript
          </vs-sidebar-item>
          <vs-sidebar-item id="git">
            <template #icon>
               <font-awesome-icon icon="user-secret" />
            </template>
            Git
          </vs-sidebar-item>
        </vs-sidebar-group>
        <vs-sidebar-item id="donate">
          <template #icon>
             <font-awesome-icon icon="user-secret" />
          </template>
          Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
          <template #icon>
             <font-awesome-icon icon="user-secret" />
          </template>
          Drink
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
          <template #icon>
             <font-awesome-icon icon="user-secret" />
          </template>
          Shopping
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <font-awesome-icon icon="user-secret" />
          </template>
          Chat
        </vs-sidebar-item>
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
               <font-awesome-icon icon="user-secret" />

              <template #badge>
                28
              </template>
            </vs-avatar>

            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
  </div>
</template>

<script>
export default {
    data:() => ({
      active: 'home',
    })
}
</script>

<style>
.vs-sidebar-content{
    border-radius: 0 !important;
}
.vs-sidebar__item.hasIcon:hover{
    outline: none !important;
}
.vs-sidebar__item__icon{
    outline: none !important;
}
</style>