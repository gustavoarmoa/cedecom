import React from "react";

export default function FormacaoR2() {
  return (


    <div className="container space-2">

      <div className="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
        <h2 className="h1">Formação de professores R2</h2>
        <p>Curso de formação para não Licenciados.</p>
      </div>


      <div className="row mx-n2 mb-5 mb-md-9">
        <div className="col-sm-6 col-lg-3 px-2 mb-3 mb-lg-0">

          <a className="card h-100 transition-3d-hover" href="#">
            <img className="card-img-top" src="/assets/img/500x280/curso-de-biologia.png" alt="Image Description"/>
            <div className="card-body">
              <span className="d-block small font-weight-bold text-cap mb-2">Biologia a distância</span>
              <h5 className="mb-0">Form. Ped. Grad. Não Licenciados – Biologia </h5>
            </div>
          </a>

        </div>

        <div className="col-sm-6 col-lg-3 px-2 mb-3 mb-lg-0">

          <a className="card h-100 transition-3d-hover" href="#">
            <img className="card-img-top" src="/assets/img/500x280/img10.jpg" alt="Image Description"/>
            <div className="card-body">
              <span className="d-block small font-weight-bold text-cap mb-2">Física a distância</span>
              <h5 className="mb-0">Form. Ped. Grad. Não Licenciados – Física</h5>
            </div>
          </a>

        </div>

        <div className="col-sm-6 col-lg-3 px-2 mb-3 mb-sm-0">

          <a className="card h-100 transition-3d-hover" href="#">
            <img className="card-img-top" src="/assets/img/500x280/curso-de-portugues.png" alt="Image Description"/>
            <div className="card-body">
              <span className="d-block small font-weight-bold text-cap mb-2">Português a distância</span>
              <h5 className="mb-0">Form. Ped. Grad. Não Licenciados – Português</h5>
            </div>
          </a>

        </div>

        <div className="col-sm-6 col-lg-3 px-2">

          <a className="card h-100 transition-3d-hover" href="#">
            <img className="card-img-top" src="/assets/img/500x280/curso-de-geografia.png" alt="Image Description"/>
            <div className="card-body">
              <span className="d-block small font-weight-bold text-cap mb-2">Geografia</span>
              <h5 className="mb-0">Form. Ped. Grad. Não Licenciados - Geografia</h5>
            </div>
          </a>

        </div>
      </div>


      <div className="position-relative z-index-2 text-center">
        <div className="d-inline-block font-size-1 border bg-white text-center rounded-pill py-3 px-4">
          Gostaria de ver todos os cursos disponíveis? <a className="font-weight-bold ml-3" href="#">Ver todos os cursos <span className="fas fa-angle-right ml-1"></span></a>
        </div>
      </div>

    </div>


  );
}