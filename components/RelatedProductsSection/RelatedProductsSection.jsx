import React from "react";

export default function RelatedProductsSection() {
  return (

    <div className="container space-2">

      <div className="w-lg-50 text-center mx-lg-auto mb-7">
        <span className="d-block small font-weight-bold text-cap mb-2">Universidade Cruzeiro do Sul Virtual</span>
        <h2>Graduação a Distância</h2>
      </div>

      <div className="row mb-5">
        <div className="col-lg-5 mb-3 mb-sm-5">

          <a className="card h-100 transition-3d-hover" href="#">
            <div className="position-relative">
              <img className="card-img-top" src="/assets/svg/components/abstract-shapes-13.svg" alt="SVG"/>
            </div>
            <div className="card-body pb-0">
              <h4>Administração</h4>
              <p className="text-body">
                Ter senso de liderança, manter o seu espaço pessoal sempre organizado e ser acionado pelos amigos para 
                planejar um trabalho ou uma festa são fortes indícios de que você pode ser um bom administrador e o curso 
                Administração EAD é o você procura..</p>
            </div>
            <div className="card-footer border-0 pt-0">
              <span className="font-size-1 text-primary font-weight-bold">Conheça o curso <i className="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </a>

        </div>

        <div className="col-sm-6 col-lg mb-3 mb-sm-5">

          <a className="card h-100 transition-3d-hover" href="#">
            <div className="position-relative">
              <img className="card-img-top" src="/assets/svg/components/abstract-shapes-14.svg" alt="SVG"/>
            </div>
            <div className="card-body pb-0">
              <h4>Ciência da Computação</h4>
              <p className="text-body">As pessoas, em sua maioria, só se veem como consumidoras da tecnologia. Sabem utilizar as redes 
                sociais com desenvoltura, compram e vendem pela internet e têm o smartphone como extensão de suas mãos e mentes..</p>
            </div>
            <div className="card-footer border-0 pt-0">
              <span className="font-size-1 text-primary font-weight-bold">Conheça o curso <i className="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </a>

        </div>

        <div className="col-sm-6 col-lg mb-3 mb-sm-5">

          <a className="card h-100 transition-3d-hover" href="#">
            <div className="position-relative">
              <img className="card-img-top" src="/assets/svg/components/abstract-shapes-15.svg" alt="SVG"/>
            </div>
            <div className="card-body pb-0">
              <h4>Ciências Biológicas</h4>
              <p className="text-body">Na sua infância, você observava o trabalho de formigas, assustava a lagartixa para vê-la perder a cauda, aluno de biologia, vai estudar a vida existente no planeta, da mais simples à mais complexa, só que sob rigor do olhar científico</p>
            </div>
            <div className="card-footer border-0 pt-0">
              <span className="font-size-1 text-primary font-weight-bold">Conheça o curso <i className="fas fa-angle-right fa-sm ml-1"></i></span>
            </div>
          </a>

        </div>
      </div>


      <div className="text-center">
        <div className="d-inline-block font-size-1 border bg-white text-center rounded-pill py-3 px-4">
          Gostaria de ver todos os cursos disponíveis? <a className="font-weight-bold ml-3" href="#">Ver todos os cursos <span className="fas fa-angle-right ml-1"></span></a>
        </div>
      </div>

    </div>






  );
}