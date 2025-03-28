import "./Loader.scss";

const Loader =()=>{
    return(
        <div class="loader__modal">
        <div class="loader__container">
          <div class="spinner"></div>
          <div class="loader__text">
            <img src="/public/icon_sportsee.png" alt="diner" />
            Chargement...
          </div>
        </div>
      </div>
    )
}

export default Loader;