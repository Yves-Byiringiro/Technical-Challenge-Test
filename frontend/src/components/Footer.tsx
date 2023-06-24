import { FaFacebook, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
        <div className="container footer-contents">
          <div>
            <h3>
              Subscribe to our weekly <br /> news letter
            </h3>
            <form action="">
              <input type="email" placeholder='email'/>
              <button>Submit</button>
            </form>
          </div>
          <div>
            <h3>Reach Us</h3>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Be Social</h3>

            <ul>
              <li>
                <a href="#"> <FaFacebook size={18}  />
                    <span>Facebook</span>
                </a>  
              </li>
              <li>
                <a href="#"> <FaTwitter size={18}  />
                    <span>Twitter</span>
                </a>  
              </li>
              <li>
                <a href="#"> <FaLinkedinIn size={18}  />
                    <span>LinkedIn</span>
                </a>  
              </li>
              <li>
                <a href="#"> <FaYoutube size={18}  />
                    <span>YouTube Channel</span>
                </a>  
              </li>
            </ul>
          </div>
          <div>
            <h3>Quick links</h3>

            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
            </ul>
          </div>
        </div>
        <p>
          <span>&copy; 2023 Rwanda, All rights reserved. </span>| <a href="#"> Privacy policy</a>
        </p>
      </footer>
    )

}