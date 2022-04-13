import React from 'react'
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedinIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container">
            <div className="footer__logo">
                <img src="https://conselhodobrasil.org/wp-content/uploads/2020/07/ONG_CPB_branco-300x235.png" alt="logo" />

                <div className="footer__info">
                    <h1> Sobre Nós </h1>
                    <p> Conselho do Povo Brasileio </p>
                    <p> Contato: contato@conselhodobrasil.org ou <a href="mailto:contato@conselhodobrasil.org?subject=''" >Clique aqui</a> </p>
                </div>
            </div>

            <div className="footer__nav">
                <h2> Siga-Nos </h2>
                <ul>
                    <li><a href="https://www.facebook.com/conselhodobrasil" className="footer__icon icon__facebook"><FacebookIcon /></a></li>
                    <li><a href="https://www.instagram.com/conselhodobrasil" className="footer__icon icon__instagram"><InstagramIcon /></a></li>
                    <li><a href="https://www.twitter.com/conselhodobrasil" className="footer__icon icon__linkedin"><LinkedinIcon /></a></li>
                    <li><a href="https://www.youtube.com/channel/UC6XwSigFzs3GLNcawwVSi-w?view_as=subscriber" className="footer__icon icon__youtube"><YouTubeIcon /></a></li>
                </ul>
            </div>
        </div>
        <div className="footer__dev">
            <div className="footer__devCont">
                <div><p>© Site desenvolvido por voluntário da ONG.</p></div>
                <div className="footer__contact">
                    <p><a href="https://conselhodobrasil.org/grupocpb/"> Projeto Grupo CPB </a></p>
                    <p><a href="https://conselhodobrasil.org/contato/"> Contato </a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer