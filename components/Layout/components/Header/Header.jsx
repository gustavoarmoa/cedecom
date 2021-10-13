import React from "react";

export default function Header() {

  return (


    <header id="header" className="header header-box-shadow-on-scroll header-abs-top header-bg-transparent header-show-hide"
    data-hs-header-options='{
      "fixMoment": 1000,
      "fixEffect": "slide"
    }'>

      <div id="searchPushTop" className="search-push-top">
        <div className="container position-relative">
          <div className="search-push-top-content pt-3">

            <div className="search-push-top-close-btn">
              <div className="hs-unfold">
                <a className="js-hs-unfold-invoker btn btn-icon btn-xs btn-soft-secondary mt-2 mr-2" href="javascript:;"
                  data-hs-unfold-options='{
                    "target": "#searchPushTop",
                    "type": "jquery-slide",
                    "contentSelector": ".search-push-top"
                  }'>
                  <svg width="10" height="10" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
                  </svg>
                </a>
              </div>
            </div>


            <form className="input-group">
              <input type="search" className="form-control" placeholder="Buscar cursos ou material de suporte" aria-label="Buscar cursos ou material de suporte"/>
              <div className="input-group-append">
                <button type="button" className="btn btn-primary">Buscar</button>
              </div>
            </form>



            <div className="row d-none d-md-flex mt-7">
              <div className="col-sm-6">
                <span className="h5">Links rápidos</span>

                <div className="row">

                  <div className="col-6">
                    <div className="nav nav-sm nav-x-0 flex-column">
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Resultados
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Acesso Blackboard
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Area do aluno
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Serviços
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Re-matricula
                      </a>
                    </div>
                  </div>


                  <div className="col-6">
                    <div className="nav nav-sm nav-x-0 flex-column">
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Atualização de cadastro
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Solicitações
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Chamados
                      </a>
                      <a className="nav-link" href="#">
                        <i className="fas fa-angle-right mr-1"></i>
                        Suporte ao aluno
                      </a>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-sm-6">

                <div className="rounded search-push-top-banner">
                  <div className="d-flex">
                    <div className="search-push-top-banner-container" style={{width: '50' + '%'}}>
                      <img className="img-fluid search-push-top-banner-img" src="/assets/img/mockups/img3.png" alt="Image Description"/>
                      <img className="img-fluid search-push-top-banner-img" src="/assets/img/mockups/img2.png" alt="Image Description"/>
                    </div>

                    <div>
                      <div className="mb-5 al">
                        <span className="h4">Cursos Gratuitos</span>
                        <p>Faça seu curso de inglés a distância.</p>
                      </div>
                      <a className="btn btn-xs btn-success transition-3d-hover" href="javascript:;">Ver mais! <i className="fas fa-angle-right fa-sm ml-1"></i></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="header-section" >

      <div className="container header-hide-content pt-2" >
        <div className="d-flex align-items-center">

          <div className="hs-unfold">
            <a className="badge badge-success d-flex align-items-center" target="_blank" href="https://bit.ly/whatsappcedecon">
              <span className="d-none d-sm-inline-block"><i className="fab fa-whatsapp fa-lg"></i> WhatsApp</span>
            </a>
          </div>


          <div className="ml-auto">

            <div className="hs-unfold d-sm-none mr-2">
              <a className="js-hs-unfold-invoker dropdown-nav-link dropdown-toggle d-flex align-items-center" href="javascript:;"
                 data-hs-unfold-options='{
                  "target": "#jumpToDropdown",
                  "type": "css-animation",
                  "event": "hover",
                  "hideOnScroll": "true"
                 }'>
                Menu
              </a>

              <div id="jumpToDropdown" className="hs-unfold-content dropdown-menu">
                <a className="dropdown-item" href="#">Suporte</a>
                <a className="dropdown-item" href="#">Contato</a>
              </div>
            </div>



            <div className="nav nav-sm nav-y-0 d-none d-sm-flex ml-sm-auto">
              <a className="nav-link text-navy" target="_blank" href="https://bit.ly/como-ingresar">Como ingressar</a>
              <a className="nav-link text-navy" target="_blank" href="https://bit.ly/resultados-cruzeiro">Resultados</a>
              <a className="nav-link text-navy" target="_blank" href="http://bit.ly/bolsa-de-estudos-cruzeiro">Bolsas de estudos</a>
            </div>

          </div>

          <ul className="list-inline ml-2 mb-0">

            <li className="list-inline-item">
              <div className="hs-unfold">
                <a className="text-navy js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-secondary" 
                target="_blank"
                href="http://bit.ly/logincruzeiro">
                  <i className="fas fa-user fa-lg"></i>
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>



      <div id="logoAndNav" className="container">

        <nav className="js-mega-menu navbar navbar-expand-lg">

          <a className="navbar-brand" href="/" aria-label="Logo do Cedecon São Luis Cohamna">
            <img src="/assets/svg/logos/logo.svg" alt="Lodo do cedecon com estrelas"/>
          </a>



          <button type="button" className="navbar-toggler btn btn-icon btn-sm rounded-circle"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="navBar"
                  data-toggle="collapse"
                  data-target="#navBar">
            <span className="navbar-toggler-default">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
              </svg>
            </span>
            <span className="navbar-toggler-toggled">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
              </svg>
            </span>
          </button>



          <div id="navBar" className="collapse navbar-collapse">
            <div className="navbar-body header-abs-top-inner">
              <ul className="navbar-nav">

                <li className="list-inline-item">
                  <div className="hs-unfold">
                    <a className="js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary" href="javascript:;"
                      data-hs-unfold-options='{
                        "target": "#searchPushTop",
                        "type": "jquery-slide",
                        "contentSelector": ".search-push-top"
                      }'>
                      <i className="fas fa-search"></i>
                    </a>
                  </div>
                </li>



                <li className="navbar-nav-item">
                  <a id="pagesMegaMenu" className="nav-link" href="/" aria-haspopup="true" aria-expanded="false" aria-labelledby="pagesSubMenu">Home</a>
                </li>



                <li className="hs-has-mega-menu navbar-nav-item">
                  <a id="homeMegaMenu" className="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Graduação</a>


                  <div className="hs-mega-menu dropdown-menu w-100" aria-labelledby="homeMegaMenu">
                    <div className="row no-gutters">
                      <div className="col-lg-6">

                        <div className="navbar-banner" style={{backgroundImage: 'url(/assets/img/750x750/img1.jpg)'}}>
                          <div className="navbar-banner-content">
                            <div className="mb-4">
                              <span className="h2 d-block text-white">Graduação a distância</span>
                              <p className="text-white">Faça um curso a distância e tenha toda a flexibilidade que precisa para estudar.</p>
                            </div>
                            <a className="btn btn-primary btn-sm transition-3d-hover" target="_blank" href="https://linklist.bio/ver-todos-graduacao-a-distancia">Ver cursos disponiveis <i className="fas fa-angle-right fa-sm ml-1"></i></a>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-6">
                        <div className="row mega-menu-body">
                          <div className="col-sm-7 mb-3 mb-sm-0">
                            <span className="d-block h5">Bacharelados</span>
                            <a className="dropdown-item" target="_blank" href="https://bit.ly/bacharel-administracao">Administração</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/ciencia-da-computacao">Ciência da Computação</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/ciencia-politica">Ciência Política</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/graduacao-ciencias-biologicas-bacharelado" target="_blank">Ciências Biológicas</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/graduacao-ciencias-contabeis">Ciências Contábeis</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/graduacao-educacao-fisica-bacharelado">Educação Física</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/graduacao-engenharia-de-software">Engenharia de Software</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/graduacao-geografia-bacharelado">Geografia</a>
                          </div>

                          <div className="col-sm-">
                            <span className="d-block h5">Tecnólogos</span>
                            <div className="mb-3">
                              <a className="dropdown-item" href="https://linklist.bio/graduacao-analise-e-desenvolvimento-de-sistemas">Análise e Sistemas</a>
                              <a className="dropdown-item" href="https://linklist.bio/graduacao-comercio-exterior">Comércio Exterior</a>
                              <a className="dropdown-item" href="https://linklist.bio/graduacao-banco-de-dados">Banco de Dados</a>
                              <a className="dropdown-item" href="https://linklist.bio/graduacao-design-interiores-tecnologico">Design de Interiores</a>
                              <a className="dropdown-item" href="https://linklist.bio/graduacao-empreendedorismo">Empreendedorismo</a>
                            </div>

                            <span className="d-block h5">Licenciaturas</span>
                            <a className="dropdown-item" target="_blank" href="https://bit.ly/artes-visuais-licenciatura">Artes Visuais</a>
                            <a className="dropdown-item" target="_blank" href="https://linklist.bio/graduacao-filosofia">Filosofia</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </li>



                <li className="hs-has-mega-menu navbar-nav-item"
                    data-hs-mega-menu-item-options='{
                      "desktop": {
                        "position": "right",
                        "maxWidth": "900px"
                      }
                    }'>
                  <a id="demosMegaMenu" className="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Pós-graduação</a>


                  <div className="hs-mega-menu dropdown-menu w-100" aria-labelledby="demosMegaMenu">
                    <div className="row no-gutters">
                      <div className="col-lg-8">
                        <div className="navbar-promo-card-deck">

                          <div className="navbar-promo-card navbar-promo-item">
                            <a className="navbar-promo-link" target="_blank" href="https://linklist.bio/pos-graduacao-administracao-e-gestao-de-projetos-sociais">
                              <div className="media align-items-center">
                                <img className="navbar-promo-icon" src="/assets/svg/icons/icon-67.svg" alt="SVG"/>
                                <div className="media-body">
                                  <span className="navbar-promo-title">Admistração de Projectos Sociais</span>
                                  <span className="navbar-promo-text">A distância</span>
                                </div>
                              </div>
                            </a>
                          </div>



                          <div className="navbar-promo-card navbar-promo-item">
                            <a className="navbar-promo-link" target="_blank" href="https://linklist.bio/pos-graduacao-alfabetizacao-e-letramento-6-meses">
                              <div className="media align-items-center">
                                <img className="navbar-promo-icon" src="/assets/svg/icons/icon-67.svg" alt="SVG"/>
                                <div className="media-body">
                                  <span className="navbar-promo-title">Alfabetização e Letramento</span>
                                  <span className="navbar-promo-text">6 Mesesa distância</span>
                                </div>
                              </div>
                            </a>
                          </div>

                        </div>

                        <div className="navbar-promo-card-deck">

                          <div className="navbar-promo-card navbar-promo-item">
                            <a className="navbar-promo-link" target="_blank" href="https://linklist.bio/pos-graduacao-banco-de-dados-e-business-intelligence">
                              <div className="media align-items-center">
                                <img className="navbar-promo-icon" src="/assets/svg/icons/icon-67.svg" alt="SVG"/>
                                <div className="media-body">
                                  <span className="navbar-promo-title">Banco de Dados e Business Intelligence</span>
                                  <span className="navbar-promo-text">A distância</span>
                                </div>
                              </div>
                            </a>
                          </div>



                          <div className="navbar-promo-card navbar-promo-item">
                            <a className="navbar-promo-link" target="_blank" href="https://linklist.bio/pos-graduacao-conciliacao-mediacao-e-arbitragem">
                              <div className="media align-items-center">
                                <img className="navbar-promo-icon" src="/assets/svg/icons/icon-67.svg" alt="SVG"/>
                                <div className="media-body">
                                  <span className="navbar-promo-title">Conciliação, Mediação e Arbitragem</span>
                                  <span className="navbar-promo-text">A distância</span>
                                </div>
                              </div>
                            </a>
                          </div>

                        </div>

                        <div className="navbar-promo-card-deck">

                          <div className="navbar-promo-card navbar-promo-item">
                            <a className="navbar-promo-link" target="_blank" href="https://linklist.bio/pos-graduacao-design-de-interiores">
                              <div className="media align-items-center">
                                <img className="navbar-promo-icon" src="/assets/svg/icons/icon-67.svg" alt="SVG"/>
                                <div className="media-body">
                                  <span className="navbar-promo-title">Design de Interiores</span>
                                  <span className="navbar-promo-text">A distância</span>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="navbar-promo-card navbar-promo-item">
                            <a className="navbar-promo-link" target="_black" href="https://linklist.bio/pos-graduacao-direito-imobiliario-e-condominial">
                              <div className="media align-items-center">
                                <img className="navbar-promo-icon" src="/assets/svg/icons/icon-67.svg" alt="SVG"/>
                                <div className="media-body">
                                  <span className="navbar-promo-title">Direito Imobiliário e Condominial</span>
                                  <span className="navbar-promo-text">A distância</span>
                                </div>
                              </div>
                            </a>
                          </div>

                        </div>
                      </div>


                      <div className="col-lg-4 navbar-promo d-none d-lg-block">
                        <a className="d-block navbar-promo-inner" target="_blank" href="https://www.cruzeirodosulvirtual.com.br/processo-seletivo/graduacao/#consultas-ps">
                          <div className="position-relative">
                            <img className="img-fluid rounded mb-3" src="/assets/img/380x227/banner-oferta.png" alt="Image Description"/>
                          </div>
                          <span className="navbar-promo-text font-size-1 mb-3">Sua nota pode valer uma BOLSA ENEM</span>
                         
                          <button type="button" className="btn btn-outline-primary" href="https://www.cruzeirodosulvirtual.com.br/processo-seletivo/graduacao/#consultas-ps" target="_black">Conheça mais aqui</button>
                        </a>
                        
                      </div>

                    </div>
                  </div>

                </li>


                <li className="hs-has-mega-menu navbar-nav-item"
                    data-hs-mega-menu-item-options='{
                      "desktop": {
                        "position": "right",
                        "maxWidth": "440px"
                      }
                    }'>
                  <a id="shopMegaMenu" className="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Formação Pedagógica</a>


                  <div className="hs-mega-menu dropdown-menu" aria-labelledby="shopMegaMenu">
                    <div className="mega-menu-body">
                      <span className="d-block h5">O curso de Formação Pedagógica R2</span>

                      <div className="row">
                        <div className="col-sm-6">
                          <a className="dropdown-item" target="_blank" href="https://linklist.bio/formacao-pedagogica-form-ped-grad-nao-licenciados-portugues">Português</a>
                          <a className="dropdown-item" target="_blank" href="https://linklist.bio/formacao-pedagogica-form-ped-grad-nao-licenciados-matematica">Matemática</a>
                          <a className="dropdown-item" target="_blank" href="https://linklist.bio/formacao-pedagogica-form-ped-grad-nao-licenciados-quimica">Química</a>
                          <a className="dropdown-item" target="_blank" href="https://linklist.bio/formacao-pedagogica-form-ped-grad-nao-licenciados-historia">História</a>
                          
                        </div>

                        <div className="col-sm-6">
                          <a className="dropdown-item" target="_blank" href="https://linklist.bio/formacao-pedagogica-form-ped-grad-nao-licenciados-fisica">Física</a>
                          <a className="dropdown-item" target="_blank" href="https://linklist.bio/formacao-pedagogica-form-ped-grad-nao-licenciados-biologia">Biologia</a>
                          <a className="dropdown-item" target="_blank" href="https://linklist.bio/formacao-pedagogica-form-ped-grad-nao-licenciados-geografia">Geografia</a>
                          <a className="dropdown-item btn-link btn-wide" target="_blank" href="https://linklist.bio/ver-todos-formacao-pedagogica">Ver todos <i className="fas fa-angle-right fa-sm ml-1"></i></a>
                        </div>
                      </div>
                    </div>


                    <div className="navbar-product-banner">
                      <div className="d-flex align-items-end">
                        <img className="img-fluid mr-4" width="167" src="/assets/img/mockups/professor.png" style={{marginBottom: '1.5' + 'rem'}} alt="Imagen gostaria de ser um professor?"/>
                        <div className="navbar-product-banner-content">
                          <div className="mb-4">
                            <span className="h4 d-block text-primary">Gostaria de ensinar?</span>
                            <p>Ao longo de dois semestres, você terá uma sólida formação docente.</p>
                          </div>
                          <a className="btn btn-sm btn-soft-primary transition-3d-hover" target="_blank" href="https://linklist.bio/ver-todos-formacao-pedagogica">Saiba mais <i className="fas fa-angle-right fa-sm ml-1"></i></a>
                        </div>
                      </div>
                    </div>

                  </div>

                </li>



                <li className="hs-has-mega-menu navbar-nav-item"
                    data-hs-mega-menu-item-options='{
                      "desktop": {
                        "position": "right",
                        "maxWidth": "260px"
                      }
                    }'>
                  <a id="docsMegaMenu" className="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false">Cursos</a>


                  <div className="hs-mega-menu dropdown-menu" aria-labelledby="docsMegaMenu" style={{minWidth: '330'+'px'}}>

                    <div className="navbar-promo-item">
                      <a className="navbar-promo-link" href="https://linklist.bio/segunda-graduacao">
                        <div className="media align-items-center">
                          <img className="navbar-promo-icon" src="/assets/svg/icons/icon-2.svg" alt="SVG"/>
                          <div className="media-body">
                            <span className="navbar-promo-title">
                             Segunda Graduação
                              <span className="badge badge-primary badge-pill ml-1">2.0</span>
                            </span>
                            <small className="navbar-promo-text">A distância</small>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="navbar-promo-item">
                      <a className="navbar-promo-link" href="#">
                        <div className="media align-items-center">
                          <img className="navbar-promo-icon" src="/assets/svg/icons/icon-1.svg" alt="SVG"/>
                          <div className="media-body">
                            <span className="navbar-promo-title">Cursos Técnicos</span>
                            <small className="navbar-promo-text">A distância</small>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="navbar-promo-item">
                      <a className="navbar-promo-link" href="#">
                        <div className="media align-items-center">
                          <img className="navbar-promo-icon" src="/assets/svg/icons/icon-1.svg" alt="SVG"/>
                          <div className="media-body">
                            <span className="navbar-promo-title">Cursos de Idiomas</span>
                            <small className="navbar-promo-text">A distância</small>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="navbar-promo-item">
                      <a className="navbar-promo-link" href="#">
                        <div className="media align-items-center">
                          <img className="navbar-promo-icon" src="/assets/svg/icons/icon-1.svg" alt="SVG"/>
                          <div className="media-body">
                            <span className="navbar-promo-title">Cursos Livres</span>
                            <small className="navbar-promo-text">A distância</small>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="navbar-promo-footer">

                      <div className="row no-gutters">
                        <div className="col-6">
                          <div className="navbar-promo-footer-item">
                            <span className="navbar-promo-footer-text">Já é aluno?</span>
                            <a className="navbar-promo-footer-text" target="_blank" href="https://bit.ly/whatsappcedecon">
                              Academico
                            </a>
                          </div>
                        </div>
                        <div className="col-6 navbar-promo-footer-ver-divider">
                          <div className="navbar-promo-footer-item">
                            <span className="navbar-promo-footer-text">Pintou um dúvida?</span>
                            <a className="navbar-promo-footer-text" target="_blank" href="https://www.facebook.com/cruzeirodosulvirtualpoloeadsaoluis">
                              Fale conosco
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </li>



                <li className="navbar-nav-last-item">
                  <a className="btn btn-sm btn-primary transition-3d-hover" href="https://bit.ly/matriculese-cruzeiro" target="_blank">
                    Matricule-se
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </nav>

      </div>

    </div>      
    
    </header>



  )
}
