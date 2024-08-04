import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div class="container-footer">
          <div class="row">
            <div class="footer-col">
              <h4>Company</h4>
              <p>
                At Book Search App  , we are passionate about books and committed
                to helping you find your next great read. Founded in 2024, our
                mission is to simplify the book search process by providing a
                comprehensive and intuitive platform for book enthusiasts of all
                kinds. Whether you're an avid reader, a casual book lover, or
                just looking for your next page-turner, we offer a powerful
                search tool to help you discover books, track your reading
                progress, and connect with a community of like-minded
                individuals.
              </p>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Affiliate Program</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <span>Email:-support@booksearchapp.com</span><br/>
                <span>Phone No.:-1234567890</span>
              </ul>
            </div>
            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
