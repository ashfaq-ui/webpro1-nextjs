
export default function Navbar(){
    return(
          /* Navigation AREA */
        <div className="intro-video-area">

            <video className="intro-video" autoPlay muted loop>
                <source src="./videos/introVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
            </video>

            <nav className="navbar" id="navbar">

                <img className="pic-nav" src="./logo/mainLogo.jpg" alt="logo" />

                <ul className="nav-links">

                    <li><a href="#" className="active" id="active">Home</a></li> {/* use active class according to your page!! */}
                    <li><a href="#">IPhone</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">ipad</a></li>
                    <li><a href="#">watch</a></li>
                    <li><a href="#">AirPods</a></li>
                    <li><a href="#">Accessories</a></li>

                </ul>

                <ul className="nav-links">
                    <li><a href="#">
                    <svg
                        className="w-[48px] h-[48px] text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.3"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                        />
                    </svg>

                        
                    </a></li>

                    <li><a href="#">
                    <svg 
                        className="w-[48px] h-[48px] text-gray-800 dark:text-white" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        fill="none" 
                        viewBox="0 0 24 24"
                    >

                        <path 
                            stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="1.3" 
                            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                    </a></li>

                    <li><a href="#">
                        <svg 
                            className="w-[40px] h-[40px] text-gray-800 dark:text-white" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="30" 
                            height="30" 
                            fill="none" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="1.3" 
                                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                            />
                        </svg>

                    </a></li>
                </ul>



            </nav>

            <div className="small-nav" id="small-nav">
                {/* <!-- Toggle Icon --> */}
                <div id="toggle-btn">☰</div>

                {/* <!-- Right-side Nav --> */}
                <div id="right-nav">
                    <div id="options">
                        <a href="#">Home</a>
                        <a href="#">IPhone</a>
                        <a href="#">Mac</a>
                        <a href="#">ipad</a>
                        <a href="#">watch</a>
                        <a href="#">Accessories</a>
                    </div>
                    <div id="bottom-options">
                        <ul className="socialmedia-footer">
                            <li><a href="#"><i className='bx bxl-facebook-circle'></i></a></li>
                            <li><a href="#"><i className='bx bxl-twitter'></i></a></li>
                            <li><a href="#"><i className='bx bxl-instagram'></i></a></li>
                            <li><a href="#"><i className='bx bxl-youtube'></i></a></li>
                            <li><a href="#"><i className='bx bxl-tiktok'></i></a></li>
                        </ul>
                    </div>



                </div>

                <img className="pic-small-nav" src="./logo/logo.jpg" alt="logo" />



            </div>

            <div>
                <ul className="nav-links-2">
                    <li><a href="#">
                        <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.3" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>

                        
                    </a></li>

                    <li><a href="#">
                        <svg className="w-[40px] h-[40px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
                        </svg>

                    </a></li>

                </ul>
            </div>


        </div>

    );
}
  
  

