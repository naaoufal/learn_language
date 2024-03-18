import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';

function App() {
  return (
    <div class="super_container">
      <header class="header">
			

      <TopBar />
  
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
