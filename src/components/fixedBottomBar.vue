<template>
  <div class="fixed-bottom-bar-components">
      <div>
          <ul :dir="$store.state.isRTL ? 'rtl' : 'ltr'" :style="{'text-align':$store.state.isRTL ? 'right':'left'}">
              <li><font-awesome-icon icon="user-secret" /> hello </li>
              <li><font-awesome-icon icon="user-secret" /> hello </li>
              <li><font-awesome-icon icon="user-secret" /> hello</li>
              <li><font-awesome-icon icon="user-secret" /> hello</li>
              <li><font-awesome-icon icon="user-secret" /> hello</li>
              <li><font-awesome-icon icon="user-secret" /> hello</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.fixed-bottom-bar-components{
    position: fixed;
    bottom: 0;
    background: #333;
    color: #fff;
    width: 100%;
}
.fixed-bottom-bar-components ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: 0 56px;
    display: flex;
    flex-wrap: wrap;
}
.fixed-bottom-bar-components ul > li {
 
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    flex: 1;
    text-align: center;
}
.fixed-bottom-bar-components ul > li:hover{
    background: #195bff;
    transition: all .5s ease !important;
}
















@media (max-width: 575px) {
    .fixed-bottom-bar-components ul {
        margin: 0;
    }
    .vs-navbar__right{
        overflow: hidden;
}

.vs-navbar__left{
           overflow: hidden;


}
}

@media (min-width: 576px) and (max-width: 767.98px) {
    .vs-navbar__right{
        overflow: hidden;
    }

    .vs-navbar__left{
            overflow: hidden;
    }
  .fixed-bottom-bar-components ul {
        margin: 0;
    }
    
}

@media (min-width: 768px) and (max-width: 991.98px) {
    .vs-navbar__right{
        overflow: hidden;
    }

    .vs-navbar__left{
            overflow: hidden;
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  
}

@media (min-width: 992px) and (max-width: 1199.98px) {

}
</style>