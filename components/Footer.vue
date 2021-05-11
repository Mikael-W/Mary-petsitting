<template>
  <footer>
      <ul class="infos">
          <li class="infos-li">Localisation</li>
          <li class="infos-li">Mail</li>
          <li class="infos-li">Telephone</li>
      </ul>
      <div class="copyright">© 2021 Mary - Au service de vos animaux. 
                            Tous droits réservés.
                            <a href="https://www.mikaelw.com" class="author-link">Design by MW</a>
                            </div>
      <div class="social-icons"></div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    position: relative;
    width: 100vw;
    background: #14110F;
}
.infos{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 20vh;
}
.infos-li{
    font-size: 2vw;
    color: white;
    padding: 2vh 0;
}
.copyright{
    position: absolute;
    bottom:1vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100vw;
    color: white;
    font-size: 1vw;
}
.author-link{
    text-decoration: none;
    color: white;
    cursor: pointer;
}
</style>