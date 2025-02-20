import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone } from "react-icons/gi";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img
            src={"/images/developer.gif"}
            alt="Abdul Kaiyum Fahim"
            width="80"
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Abdul Kaiyum Fahim">
            Md Kaioum Islam
          </h1>

          <p className="title">FullStack developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />

            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:mdkaioumislam684@gmail.com" className="contact-link">
                mdkaioumislam684@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel: +8801783783485" className="contact-link">
                +8801783783485
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />

            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="2000-01-26">January 26, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Jashore,Khulna, Bangladesh</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Aside