import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";


export default function Footer() {
  return (
    <>
      

    <footer className="bg-navy">
      <div className="container">
        <div className="space-top-2 space-bottom-1 space-bottom-lg-2">
          <div className="row justify-content-lg-between">
            <div className="col-lg-3 ml-lg-auto mb-5 mb-lg-0">

              <div className="mb-4">
                <a href="index.html" aria-label="Front">
                  <img className="brand" src="/assets/svg/logos/logo-white.svg" alt="Logo"/>
                </a>
              </div>

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item">
                  <a className="nav-link media" href="javascript:;">
                    <span className="media">
                      <span className="fas fa-location-arrow mt-1 mr-2"></span>
                      <span className="media-body">
                        Av. Daniel de la Touche 2000
                      </span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link media" href="tel:+5598">
                    <span className="media">
                      <span className="fas fa-phone-alt mt-1 mr-2"></span>
                      <span className="media-body" type="tel">
                        +55 (98) 109-9222
                      </span>
                    </span>
                  </a>
                </li>
              </ul>

            </div>
  
            <div className="col-6 col-md-3 col-lg mb-5 mb-lg-0">
              <h5 className="text-white">Cedecon</h5>
  

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item"><a className="nav-link" href="#">Sobre</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Graduação</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Pós-graduação</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Formação Pedagógica</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Técnicos</a></li>
              </ul>

            </div>
  
            <div className="col-6 col-md-3 col-lg mb-5 mb-lg-0">
              <h5 className="text-white">Graduação</h5>
  

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item"><a className="nav-link" href="#">Administração</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Engenharia</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Marketing</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Ciencias Sociais</a></li>
              </ul>

            </div>
  
            <div className="col-6 col-md-3 col-lg">
              <h5 className="text-white">Pós-graduação</h5>
  

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                <li className="nav-item"><a className="nav-link" href="#">Engenharia de Produção</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Gestão em Enfermagem</a></li>
                <li className="nav-item"><a className="nav-link" href="#">MBA em Comércio Exterior</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Nutrição Clínica</a></li>
              </ul>

            </div>
  
            <div className="col-6 col-md-3 col-lg">
              <h5 className="text-white">Recursos</h5>
  

              <ul className="nav nav-sm nav-x-0 nav-white flex-column">
                
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="media align-items-center">
                      <i className="fa fa-user-circle mr-2"></i>
                      <span className="media-body">Login Aluno</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="media align-items-center">
                      
                      <span className="media-body">Como ingressar</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="media align-items-center">
                      
                      <span className="media-body">Resultados</span>
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span className="media align-items-center">
                      
                      <span className="media-body">Blackboard</span>
                    </span>
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
  
        <hr className="opacity-xs my-0"/>
  
        <div className="space-1">
          <div className="row align-items-md-center mb-7">
            <div className="col-md-6 mb-4 mb-md-0">

              <ul className="nav nav-sm nav-white nav-x-sm align-items-center">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.cruzeirodosulvirtual.com.br/politica-de-privacidade-e-termos-de-uso/">Politicas de privacidade</a>
                </li>
                <li className="nav-item opacity mx-3">&#47;</li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.cruzeirodosulvirtual.com.br/politica-de-privacidade-e-termos-de-uso/">Termos de uso</a>
                </li>
                <li className="nav-item opacity mx-3">&#47;</li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Site Map</a>
                </li>
              </ul>

            </div>
  
            <div className="col-md-6 text-md-right">
              <ul className="list-inline mb-0">

                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-xs btn-icon btn-soft-light" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                

                <li className="list-inline-item">
                  <div className="hs-unfold">
                    <a className="js-hs-unfold-invoker dropdown-toggle btn btn-xs btn-soft-light" href="#">
                       
                      <img className="dropdown-item-icon" src="/assets/vendor/flag-icon-css/flags/4x3/br.svg" alt="United States Flag"/>
                      <span>Brasil</span>
                    </a>
  
                    
                  </div>
                </li>

              </ul>
            </div>
          </div>
  

          <div className="w-md-75 text-lg-center mx-lg-auto">
            <p className="text-white opacity-sm small">Cedecon - Polo Cruzeiro do Sul Cohama<span  id="dataAtual"></span> | Todos os direitos reservados</p>
            <p className="text-white opacity-sm small">CEDECON EDUCACAO AVANCADA EIRELI CNPJ: 03.563.993/0001-06</p>
            <p className="text-white opacity-sm small">Quando você visita ou interage com nossos sites, serviços ou ferramentas, nós ou nossos prestadores de serviços autorizados podemos usar cookies para armazenar informações para ajudar a fornecer a você uma experiência melhor, mais rápida e segura e para fins de marketing.</p>
          </div>

        </div>
      </div>
    </footer>

    <aside id="sidebarContent" className="hs-unfold-content sidebar">
      <div className="sidebar-scroller">
        <div className="sidebar-container">
          <div className="sidebar-footer-offset" style={{paddingBottom: '7' + 'rem'}}>

            <div className="d-flex justify-content-end align-items-center pt-4 px-4">
              <div className="hs-unfold">
                <a className="js-hs-unfold-invoker btn btn-icon btn-xs btn-soft-secondary" href="javascript:;"
                   data-hs-unfold-options='{
                    "target": "#sidebarContent",
                    "type": "css-animation",
                    "animationIn": "fadeInRight",
                    "animationOut": "fadeOutRight",
                    "hasOverlay": "rgba(55, 125, 255, 0.1)",
                    "smartPositionOff": true
                   }'>
                  <svg width="10" height="10" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
                  </svg>
                 </a>
              </div>
            </div>

            <div className="scrollbar sidebar-body">
              <div className="sidebar-content py-4 px-7">
                <form className="js-validate">

                  <div id="login">

                    <div className="text-center mb-7">
                      <h3 className="mb-0">Acessar no área</h3>
                      <p>Login to manage your account.</p>
                    </div>

                    <div className="js-form-message mb-4">
                      <label className="input-label">Email</label>
                      <div className="input-group input-group-sm mb-2">
                        <input type="email" className="form-control" name="email" id="signinEmail" placeholder="Email" aria-label="Email" required
                               data-msg="Please enter a valid email address."/>
                      </div>
                    </div>

                    <div className="js-form-message mb-3">
                      <label className="input-label">Password</label>
                      <div className="input-group input-group-sm mb-2">
                        <input type="password" className="form-control" name="password" id="signinPassword" placeholder="Password" aria-label="Password" required
                               data-msg="Your password is invalid. Please try again."/>
                      </div>
                    </div>

  
                    <div className="d-flex justify-content-end mb-4">
                      <a className="js-animation-link small link-underline" href="javascript:;"
                         data-hs-show-animation-options='{
                           "targetSelector": "#forgotPassword",
                           "groupName": "idForm",
                           "animationType": "css-animation",
                           "animationIn": "slideInUp",
                           "duration": 400
                         }'>Forgot Password?</a>
                    </div>
  
                    <div className="mb-3">
                      <button type="submit" className="btn btn-sm btn-primary btn-block">Acessar</button>
                    </div>
  
                    <div className="text-center mb-3">
                      <span className="divider divider-xs divider-text">OR</span>
                    </div>
  
                    <a className="btn btn-sm btn-ghost-secondary btn-block mb-2" href="#">
                      <span className="d-flex justify-content-center align-items-center">
                        <img className="mr-2" src="/assets/img/160x160/img17.png" alt="Image Description" width="14" height="14"/>
                        Sign In with Google
                      </span>
                    </a>
  
                    <div className="text-center">
                      <span className="small text-muted">Do not have an account?</span>
                      <a className="js-animation-link small font-weight-bold" href="javascript:;"
                         data-hs-show-animation-options='{
                           "targetSelector": "#signup",
                           "groupName": "idForm",
                           "animationType": "css-animation",
                           "animationIn": "slideInUp",
                           "duration": 400
                         }'>Sign Up
                      </a>
                    </div>
                  </div>
  

                  <div id="signup" style={{display: 'none', opacity: '0'}}>

                    <div className="text-center mb-7">
                      <h3 className="mb-0">Create your account</h3>
                      <p>Fill out the form to get started.</p>
                    </div>

                    <div className="js-form-message mb-4">
                      <label className="input-label">Email</label>
                      <div className="input-group input-group-sm mb-2">
                        <input type="email" className="form-control" name="email" id="signupEmail" placeholder="Email" aria-label="Email" required
                               data-msg="Please enter a valid email address."/>
                      </div>
                    </div>

                    <div className="js-form-message mb-4">
                      <label className="input-label">Password</label>
                      <div className="input-group input-group-sm mb-2">
                        <input type="password" className="form-control" name="password" id="signupPassword" placeholder="Password" aria-label="Password" required
                               data-msg="Your password is invalid. Please try again."/>
                      </div>
                    </div>

                    <div className="js-form-message mb-4">
                      <label className="input-label">Confirm Password</label>
                      <div className="input-group input-group-sm mb-2">
                        <input type="password" className="form-control" name="confirmPassword" id="signupConfirmPassword" placeholder="Confirm Password" aria-label="Confirm Password" required
                               data-msg="Password does not match the confirm password."/>
                      </div>
                    </div>

  
                    <div className="mb-3">
                      <button type="submit" className="btn btn-sm btn-primary btn-block">Sign Up</button>
                    </div>
  
                    <div className="text-center mb-3">
                      <span className="divider divider-xs divider-text">OR</span>
                    </div>
  
                    <a className="btn btn-sm btn-ghost-secondary btn-block mb-2" href="#">
                      <span className="d-flex justify-content-center align-items-center">
                        <img className="mr-2" src="/assets/img/160x160/img17.png" alt="Image Description" width="14" height="14"/>
                        Sign Up with Google
                      </span>
                    </a>
  
                    <div className="text-center">
                      <span className="small text-muted">Already have an account?</span>
                      <a className="js-animation-link small font-weight-bold" href="javascript:;"
                         data-hs-show-animation-options='{
                           "targetSelector": "#login",
                           "groupName": "idForm",
                           "animationType": "css-animation",
                           "animationIn": "slideInUp",
                           "duration": 400
                         }'>Sign In
                      </a>
                    </div>
                  </div>

                  <div id="forgotPassword" style={{display: 'none', opacity: '0'}}>

                    <div className="text-center mb-7">
                      <h3 className="mb-0">Recover password</h3>
                      <p>Instructions will be sent to you.</p>
                    </div>

                    <div className="js-form-message">
                      <label className="sr-only" for="recoverEmail">Your email</label>
                      <div className="input-group input-group-sm mb-2">
                        <input type="email" className="form-control" name="email" id="recoverEmail" placeholder="Your email" aria-label="Your email" required
                               data-msg="Please enter a valid email address."/>
                      </div>
                    </div>

  
                    <div className="mb-3">
                      <button type="submit" className="btn btn-sm btn-primary btn-block">Recover Password</button>
                    </div>
  
                    <div className="text-center mb-4">
                      <span className="small text-muted">Remember your password?</span>
                      <a className="js-animation-link small font-weight-bold" href="javascript:;"
                         data-hs-show-animation-options='{
                           "targetSelector": "#login",
                           "groupName": "idForm",
                           "animationType": "css-animation",
                           "animationIn": "slideInUp",
                           "duration": 400
                         }'>Login
                      </a>
                    </div>
                  </div>

                </form>
              </div>
            </div>

          </div>
  

          <footer className="sidebar-footer border-top py-2 px-7">
            <ul className="nav nav-sm">
              <li className="nav-item">
                <a className="nav-link pl-0" href="https://www.cruzeirodosulvirtual.com.br/politica-de-privacidade-e-termos-de-uso/">Política</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.cruzeirodosulvirtual.com.br/politica-de-privacidade-e-termos-de-uso/">Termos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-info-circle la-lg"></i>
                </a>
              </li>
            </ul>
          </footer>

        </div>
      </div>
    </aside>

  

    <a className="js-go-to go-to position-fixed" href="javascript:;" style={{visibility: 'hidden'}}
       data-hs-go-to-options='{
         "offsetTop": 700,
         "position": {
           "init": {
             "right": 15
           },
           "show": {
             "bottom": 15
           },
           "hide": {
             "bottom": -15
           }
         }
       }'>
      <i className="fas fa-angle-up"></i>
    </a>
    </>



  );
}
