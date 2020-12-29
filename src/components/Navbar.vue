<template>
  <div class="navbar-component">
      <div class="center examplex">
      <vs-navbar text-white color="primary" center-collapsed v-model="active">
        <template v-if="$store.state.isRTL" #left>
          <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
        </template>
        <template v-else #right>
          <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="">
        </template>

        <template v-if="$store.state.isRTL" #right>
           <vs-navbar-group>
          Ecosystem

          <template #items>
            <h5 class="title" style="color:#000">
              Social
            </h5>

            <vs-navbar-item :active="active == 'Github'" id="Github">
              Github
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Discord'" id="Discord">
              Discord
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
              Twitter
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Medium'" id="Medium">
              Medium
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
          <vs-navbar-group>
          Ecosystem

          <template #items>
            <h5 class="title" style="color:#000">
              Social
            </h5>

            <vs-navbar-item :active="active == 'Github'" id="Github">
              Github
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Discord'" id="Discord">
              Discord
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
              Twitter
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Medium'" id="Medium">
              Medium
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
           <vs-navbar-group>
          Ecosystem

          <template #items>
           <h5 class="title" style="color:#000">
              Social
            </h5>

            <vs-navbar-item :active="active == 'Github'" id="Github">
              Github
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Discord'" id="Discord">
              Discord
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
              Twitter
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Medium'" id="Medium">
              Medium
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
          <vs-navbar-item :active="active == 'warn'" id="warn">
            Warn
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'dark'" id="dark">
            Dark
          </vs-navbar-item>
          <vs-navbar-item :active="active == '#7d33ff'" id="#7d33ff">
            HEX
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'rgb(59,222,200)'" id="rgb(59,222,200)">
            RGB
          </vs-navbar-item>
        </template>






          <template v-else #left>
           <vs-navbar-group>
          Ecosystem

          <template #items>
            <h5 class="title" style="color:#000">
              Social
            </h5>

            <vs-navbar-item :active="active == 'Github'" id="Github">
              Github
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Discord'" id="Discord">
              Discord
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
              Twitter
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Medium'" id="Medium">
              Medium
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
          <vs-navbar-group>
          Ecosystem

          <template #items>
            <h5 class="title">
              Social
            </h5>

            <vs-navbar-item :active="active == 'Github'" id="Github">
              Github
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Discord'" id="Discord">
              Discord
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
              Twitter
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Medium'" id="Medium">
              Medium
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
           <vs-navbar-group>
          Ecosystem

          <template #items>
            <h5 class="title">
              Social
            </h5>

            <vs-navbar-item :active="active == 'Github'" id="Github">
              Github
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Discord'" id="Discord">
              Discord
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
              Twitter
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Medium'" id="Medium">
              Medium
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
          <vs-navbar-item :active="active == 'warn'" id="warn">
            Warn
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'dark'" id="dark">
            Dark
          </vs-navbar-item>
          <vs-navbar-item :active="active == '#7d33ff'" id="#7d33ff">
            HEX
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'rgb(59,222,200)'" id="rgb(59,222,200)">
            RGB
          </vs-navbar-item>
        </template>



      </vs-navbar>
      <div class="square">
        <div class="child">
          child 1
        </div>
        <div class="child">
          child 2
        </div>
        <div class="child">
          child 3
        </div>
      </div>
    </div>
  </div>
</template>
 


<script>
export default {
data:() => ({
      active: 'guide',
      active1: 1,
      active2: 1,
      active3: 1,
      active4: 1,
    })
}
</script>

<style>
.vs-navbar-content{
    border-radius: 0;
}
.vs-navbar__group__items{
    bottom: -11px !important;
}
.vs-navbar__group__items {
    bottom: 9px !important;
    background: #FFF;
}
.vs-navbar__group:hover .vs-navbar__group__items{
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1) !important;
    background: #FFF !important
}
.vs-navbar__group__items .vs-navbar__item{
    
    color: #000;
    text-align: center;
    border: 1px solid #868686;
    margin-bottom: 6px;
    padding: 8px;
    border-radius: 5px;

}

.vs-navbar__right{
        width: 90% !important;
    margin-right: 37px;
}

.vs-navbar__left{
    margin-left: 44px;

}


</style>