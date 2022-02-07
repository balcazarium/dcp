class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
    `
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
        <div class="container px-4">
            <a class="navbarbrand" href="/"><span class="logo-container"><img src="assets/img/logo_dcp.svg" alt="diseño publidad producción" class="img-fluid brand-logo"></span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavMenu" aria-controls="mainNavMenu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="mainNavMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active-menu-item"><a class="nav-link" id="nav-nosotros" href="index.html">Nosotros</a></li>
                    <li class="nav-item"><a class="nav-link" id="nav-infraestructura" href="infraestructura.html">Infraestructura</a></li>
                    <li class="nav-item dropdown" id="our-projects">
                        <a class="nav-link dropdown-toggle" id="sale-rates-viva" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Proyectos</a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="sale-rates-viva">
                            <li><a class="dropdown-item" href="proyectos-carton.html">Cartón</a></li>
                            <li><a class="dropdown-item" href="proyectos-multimaterial.html">Multimaterial</a></li>
                            <li><a class="dropdown-item" href="proyectos-innovacion.html">Innovación</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a class="nav-link" id="nav-contacto" href="contacto.html">Contacto</a></li>
                </ul>
                <ul id="topbar-social-links" class="social-links-list">
                    <li><a href="#"><img src="" alt="facebook"></a></li>
                    <li><a href="#"><img src="" alt="linkedin"></a></li>
                    <li><a href="#"><img src="" alt="instagram"></a></li>
                    <li><a href="#"><img src="" alt="youtube"></a></li>
                </ul>
            </div>
        </div>
    </nav>
            
    `
    }
}

//Footer

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
    `
    <!-- Footer-->
     <footer class="py-5 bg-green" id="dcp-footer-wrapper">
        <div class="container px-4">
            <div class="row flex-row align-items-center justify-content-between">
                <div class="col-lg-2 col-md-2 col-xs-12" id="col-logo-brand">
                    <a class="navbarbrand" href="/">
                        <span class="logo-container">
                            <img src="assets/img/logo_dcp-white.svg" alt="diseño publidad producción" class="img-fluid brand-logo">
                        </span>
                    </a>
                </div>
                <div class="col-lg-6 col-md-6 col-xs-12" id="col-nav-copyrights">
                    <p class="copyright m-0 text-white">&copy; Copyright 2022, Todos los derechos reservados. 52966, México, Cd. López Mateos</p>
                    <ul class="footer-nav">
                        <li><a href="aviso-de-privacidad.html">Aviso de privacidad</a></li>
                        <li><a href="#">Políticas</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-4 col-xs-12" id="col-contact-info">
                    <div class="footer-telephones">
                        <a href="tel:58258339">58258339</a>
                        <a href="tel:58258339">58258340</a>
                        <a href="tel:58258339">58258341</a>
                        <p>Ext. 122</p>
                    </div>
                    <ul id="footer-social-links" class="social-links-list">
                        <li><a href="#"><img src="" alt="facebook"></a></li>
                        <li><a href="#"><img src="" alt="linkedin"></a></li>
                        <li><a href="#"><img src="" alt="instagram"></a></li>
                        <li><a href="#"><img src="" alt="youtube"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    `

    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);