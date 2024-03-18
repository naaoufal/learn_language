import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="super_container">
      <header class="header">
			

      <div class="top_bar">
        <div class="top_bar_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
                  <div class="top_bar_phone"><span class="top_bar_title">phone:</span>+44 300 303 0266</div>
                  <div class="top_bar_right ml-auto">
  

                    <div class="top_bar_lang">
                      <span class="top_bar_title">site language:</span>
                      <ul class="lang_list">
                        <li class="hassubs">
                          <a href="#">English<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                          <ul>
                            <li><a href="#">Ukrainian</a></li>
                            <li><a href="#">Japanese</a></li>
                            <li><a href="#">Lithuanian</a></li>
                            <li><a href="#">Swedish</a></li>
                            <li><a href="#">Italian</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
  

                    <div class="top_bar_social">
                      <span class="top_bar_title social_title">follow us</span>
                      <ul>
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>				
      </div>
  
      <div class="header_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="header_content d-flex flex-row align-items-center justify-content-start">
                <div class="logo_container mr-auto">
                  <a href="#">
                    <div class="logo_text">EasyDarija</div>
                  </a>
                </div>
                <nav class="main_nav_contaner">
                  <ul class="main_nav">
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Instructors</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
                <div class="header_content_right ml-auto text-right">
                  <div class="header_search">
                    <div class="search_form_container">
                      <form action="#" id="search_form" class="search_form trans_400">
                        <input type="search" class="header_search_input trans_400" placeholder="Type for Search" required="required" />
                        <div class="search_button">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </form>
                    </div>
                  </div>
  

  
                  <div class="user"><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></div>
                  <div class="hamburger menu_mm">
                    <i class="fa fa-bars menu_mm" aria-hidden="true"></i>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </header>
    </div>
  );
}

export default App;
