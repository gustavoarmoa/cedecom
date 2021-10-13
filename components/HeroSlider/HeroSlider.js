import React from "react";

export default function HeroSlider() {
  return (

    <div className="container space-top-3 space-top-lg-4 space-bottom-2 space-bottom-lg-3">
      <div className="row justify-content-lg-between mb-7">
        <div className="col-md-6 col-lg-5">

          <div className="mb-5">
            <h1>Sua formação a distância</h1>
            <p>Graduação, Segunda Graduação 2.0, Formação Pedagógica, MBA, Especialização, Cursos Livres, Técnicos, de Idiomas e Preparatórios em diversas áreas do conhecimento.</p>
          </div>

          <div className="mb-3">
            <a className="btn btn-primary btn-wide transition-3d-hover mb-2 mb-sm-0 mr-3" target="_blank" href="https://linklist.bio/ver-todos-graduacao-a-distancia">Ver cursos</a>
            <a className="btn btn-link mb-2 mb-sm-0" target="_blank" href="https://linklist.bio/como-ingressar">Saiba as formas de ingresso<i className="fas fa-angle-right fa-sm ml-1"></i></a>
          </div>

        </div>

        <div className="col-md-6 d-none d-md-inline-block">

          <figure className="w-100">
            <img className="img-fluid" src="/assets/svg/illustrations/hiker-man.svg" alt="Image Description"/>
          </figure>

        </div>
      </div>


      <div className="row justify-content-between text-center">
        <div className="col-6 col-lg-2 mb-5 mb-lg-0">
          <div className="mx-3">
            <a target="_blank" href="https://linklist.bio/ver-todos-graduacao-a-distancia"><img className="mx-auto" src="/assets/svg/clients-logo/graduacao.svg" alt="Graduação a distância no Polo Cedecon em São Luis do Maranhão"></a>
            
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-5 mb-lg-0">
          <div className="mx-3">
            <a target="_blank" href="https://linklist.bio/segunda-graduacao"><img className="mx-auto" src="/assets/svg/clients-logo/segunda-graduacao-2.0.svg" alt="Segunda gradução distancia no Polo Cedecon em São Luis do Maranhão"></a>
          </div>
        </div>
        <div className="col-6 col-lg-2 mb-5 mb-lg-0">
          <div className="mx-3">
            <a target="_blank" href="https://linklist.bio/ver-todos-formacao-pedagogica">
              <img className="mx-auto" src="/assets/svg/clients-logo/formacao-pedagogica.svg" alt="Formação pedagógica no no Polo Cedecon em São Luis do Maranhão"/>
            </a>
            
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <div className="mx-3">
            <a target="_blank" href="https://linklist.bio/ver-todos-pos-graduacao">
              <img className="mx-auto" src="/assets/svg/clients-logo/curso-de-pos-graduacao-a-distancia.svg" width="160" alt="Curso de Pós-graduação a distância no no Polo Cedecon em São Luis do Maranhão"/>
            </a>
            
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <div className="mx-3">
            <a target="_blank" href="https://linklist.bio/ver-todos-cursos-tecnicos">
              <img className="mx-auto" src="/assets/svg/clients-logo/cursos-tecnicos.svg" alt="Cursos técnicos a distância no Polo Cedecon em São Luis do Maranhão"/>
            </a>
          </div>
        </div>
        <div className="col-6 col-lg-2">
          <div className="mx-3">
            <a target="_blank" href="https://linklist.bio/ver-todos-cursos-livres">
            </a>
            <img className="mx-auto" src="/assets/svg/clients-logo/cursos-livres.svg" alt="Cursos livres a distancia no Polo Cedecon em São Luis do Maranhão"/>
          </div>
        </div>
      </div>


    </div>

  );
}
