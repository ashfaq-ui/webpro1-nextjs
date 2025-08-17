import styles from './globals.css'






export default function Footer(){
    return(
        <footer>
              
            <form id="quick-navigation" style="display: none;" className={styles.quick-nav-options-1}>
                <select name="Topping" id="topping" className="quick-nav-options">
                    <option value="quick-navigation" selected>Quick-navigation</option>
                    <option value="Home">Home</option>
                    <option value="shop-all">Shop All</option>
                    <option value="about">About</option>
                    <option value="privacy-policy">Privacy Policy</option>
                    <option value="term-of-service">Term of Service</option>
                </select>
            </form>

            <form id="main-categories" style="display: none;" className="quick-nav-options-1">
                <select name="Topping" id="topping" className="quick-nav-options">
                    <option value="main-categories" selected>main-categories</option>
                    <option value="IPhone">IPhone</option>
                    <option value="Mac">Mac</option>
                    <option value="ipad">ipad</option>
                    <option value="Watch">Watch</option>
                    <option value="AirPods">AirPods</option>
                    <option value="Accessories">Accessories</option>
                </select>
            </form>

            <div className="footer-left" id="">




                <img className="pic-footer" src="/logo/logo.jpg" alt="logo" />
                

                {/* <div class="line-area" id="line">
                    <div class="line"></div>
                */}
 
                
 
                <div className="text">
                    <p>Black olives is the largest Apple Products Seller in Sri Lanka and
                    <br />
                    we strive to bring the Apple products you love closer to you.</p>
                    <br />
                    <br />
                    <h4>Contact us :</h4>
                    <p>
                        Black Olives (Pvt) Ltd <br />
                        No 07, Galle road,
                        Dehiwala,
                        Colombo
                        0772342235 | 0772975805 
                        

                    </p>
                </div>

                <ul className="socialmedia-footer">
                    <li><a href="#"><i class='bx bxl-facebook-circle'></i></a></li>
                    <li><a href="#"><i class='bx bxl-twitter'></i></a></li>
                    <li><a href="#"><i class='bx bxl-instagram'></i></a></li>
                    <li><a href="#"><i class='bx bxl-youtube'></i></a></li>
                    <li><a href="#"><i class='bx bxl-tiktok'></i></a></li>
                </ul>


            </div>


            <div className="quick-navigation-area" id="quick-navigation-area">
                <h1>QUICK NAVIGATION</h1>
                <ul className="quick-navigation">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop All</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">Terms of service</a></li>
                </ul>

            </div>

            <div className="main-categories-area" id="main-categories-area">

                <h1>MAIN CATEGORIES</h1>
                <ul className="main-categories">
                <li><a href="#">IPhone</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">ipad</a></li>
                <li><a href="#">watch</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">Accessories</a></li>
                </ul>

            </div>




            

        </footer>
    );
}   
        
        
        
        
        
        
        
