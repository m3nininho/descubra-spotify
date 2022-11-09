import "./style.css";

function Footer() {
  return /*html*/ `
    <div class="footer">
      <div class="box">
        <img src="./images/logo.png" alt="Logo do Spotify">
      </div>
      <div class="box">
        <nav>
        <p>Baixe o Spotify para:</p>
          <ul class="download-ul">
            <li><a href="https://apps.apple.com/app/spotify-music/id324684580">iPhone</a></li>

            <li><a href="https://apps.apple.com/app/spotify-music/id324684580">iPad</a></li>

            <li><a href="https://play.google.com/store/apps/details?id=com.spotify.music&pli=1">Android</a></li>

            <li><a href="https://www.spotify.com/br/download/linux/">Outros</a></li>
          </ul>
        </nav>
      </div>

      <div class="box-return">
        <p>
        Esta mensagem foi enviada para <a href="#">fulano@fulano.com.br</a> . Se não quiser receber estes e-mails do Spotify no futuro, você pode <span>editar seu perfil</span> ou <span>cancelar sua assinatura.</span>
        </p>
      </div>
      <div class="box-terms">
          <a href="https://www.spotify.com/br/legal/end-user-agreement/">Termos de Uso</a>
          <a href="https://www.spotify.com/br/legal/privacy-policy/">Politica de Privacidade</a>
          <a href="https://www.spotify.com/br/about-us/contact/">Fale conosco</a>
      </div>
      <p class="terms">Spotify AB, Regeringsgatan 19, 111 53, Stockholm, Sweden	</p>
    </div>
  `;
}

export default Footer;
