import React, { Component } from "react";
import { Link } from "react-router-dom";

const yearFormed = 2018; // August 9th, 2018
const dt = new Date();
const currentYear = dt.getFullYear();

class Footer extends Component {
  state = {
    copyrightDate:
      currentYear === yearFormed ? yearFormed : yearFormed + "-" + currentYear
  };

  render() {
    let homeClass = "";
    let statusClass = "";
    let forumsClass = "";
    let chatroomsClass = "";
    let blogsClass = "";
    let loginClass = "";
    let registerClass = "";

    // Highlight the "active" link
    switch (this.props.page) {
      case "home":
        homeClass = "nav-item active";
        break;
      case "status":
        statusClass = "nav-item active";
        break;
      case "forums":
        forumsClass = "nav-item active";
        break;
      case "chatrooms":
        chatroomsClass = "nav-item active";
      case "blogs":
        blogsClass = "nav-item active";
        break;
      case "login":
        loginClass = "nav-item active";
        break;
      case "register":
        registerClass = "nav-item active";
        break;
      default:
        homeClass = "nav-item active";
    }

    return (
      <footer class="footer sticky-bottom">
        <div class="container bottom_border">
          <div class="row">
            <div class=" col-sm-4 col-md col-sm-4  col-12 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>
              <p class="mb10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
              <p>
                <i class="fa fa-location-arrow" /> 12345-Something Street{" "}
              </p>
              <p>
                <i class="fa fa-phone" />{" "}
                <a href="tel:12345678901">1 (234) 567-8901</a>{" "}
              </p>
              <p>
                <i class="fa fa fa-envelope" />{" "}
                <a href="mailto:info@example.com">info@example.com</a>{" "}
              </p>
            </div>

            <div class=" col-sm-4 col-md  col-6 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
              <ul class="footer_ul_amrc">
                <li>
                  <a href="#">Image Rectoucing</a>
                </li>
                <li>
                  <a href="#">Clipping Path</a>
                </li>
                <li>
                  <a href="#">Hollow Man Montage</a>
                </li>
                <li>
                  <a href="#">Ebay & Amazon</a>
                </li>
                <li>
                  <a href="#">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="#">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div class=" col-sm-4 col-md  col-6 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
              <ul class="footer_ul_amrc">
                <li>
                  <a href="#">Remove Background</a>
                </li>
                <li>
                  <a href="#">Shadows & Mirror Reflection</a>
                </li>
                <li>
                  <a href="#">Logo Design</a>
                </li>
                <li>
                  <a href="#">Vectorization</a>
                </li>
                <li>
                  <a href="#">Hair Masking/Clipping</a>
                </li>
                <li>
                  <a href="#">Image Cropping</a>
                </li>
              </ul>
            </div>

            <div class=" col-sm-4 col-md  col-12 col">
              <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>

              <ul class="footer_ul2_amrc">
                <li>
                  <a href="#">
                    <i class="fab fa-facebook fleft padding-right" />{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter fleft padding-right" />{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-youtube fleft padding-right" />{" "}
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing...
                    <a href="#">https://www.lipsum.com/</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="container">
          <ul class="foote_bottom_ul_amrc">
            <li>
              <Link to="/" class={homeClass}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/status" class={statusClass}>
                Status
              </Link>
            </li>
            <li>
              <Link to="/forums" class={forumsClass}>
                Forums
              </Link>
            </li>
            <li>
              <Link to="/chatrooms" class={chatroomsClass}>
                Chatrooms
              </Link>
            </li>
            <li>
              <Link to="/blogs" class={blogsClass}>
                Blogs
              </Link>
            </li>
          </ul>
          <p class="text-center">
            Copyright @{this.state.copyrightDate} | Created With{" "}
            <a href="https://getbootstrap.com/">Bootstrap 4</a> and{" "}
            <a href="https://reactjs.org/">ReactJS</a> by{" "}
            <a href="#">Joshua McNabb</a>
          </p>

          {/*<ul class="social_footer_ul">
            <li>
              <a href="#">
                <i class="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram" />
              </a>
            </li>
            </ul>*/}
        </div>
      </footer>
    );
  }
}

export default Footer;
