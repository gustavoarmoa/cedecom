import React from "react";

export default function CTASection() {
  return (



    <div className="container">
      <div className="bg-light rounded overflow-hidden space-top-2 space-top-lg-1 pl-5 pl-md-8">
        <div className="row justify-content-lg-between align-items-lg-center no-gutters">
          <div className="col-lg-4">
            <div className="mb-4">
              <h2>Graduação A Distância Na Cruzeiro Do Sul Virtual</h2>
            </div>
            <a className="btn btn-primary btn-wide btn-pill transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/">
              Começe sua graduação hoje
              <i className="fas fa-angle-right fa-sm ml-1"></i>
            </a>
          </div>

          <div className="col-lg-7 space-top-1 space-top-sm-2 ml-auto">
            <img className="img-fluid shadow-lg" src="/assets/img/others/home-cruzeiro.png" alt="Image Description"/>
          </div>
        </div>
      </div>
    </div>



  );
}