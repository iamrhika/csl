import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import TabSelector from '../components/tab-selector'
import TabSelector2 from '../components/tab-selector-2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Cipta Srigati Lestari</title>
        <meta property="og:title" content="Cipta Srigati Lestari" />
      </Helmet>
      <header className="home-container2">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="Smart Card Solutions"
            src="/cipta-logotype%202-1500h.png"
            className="home-image1"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links1">
              <Link to="/" className="home-link11 thq-body-small">
                Home
              </Link>
              <a href="#About Us" className="home-link41 thq-body-small">
                About Us
              </a>
              <a href="#Acknowledgment" className="home-link31 thq-body-small">
                Acknowedgement
              </a>
              <a href="#Services" className="home-link21 thq-body-small">
                Services
              </a>
              <a href="#Tab Selector 2" className="home-link51 thq-body-small">
                Product
              </a>
            </nav>
            <div className="home-buttons1">
              <button className="home-action11 thq-button-filled">
                <span className="home-text100">Get Started</span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="Smart Card Solutions"
                  src="/cipta-logotype%202-1500h.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links2">
                <a
                  href="TQ_R5VB5tDgM4"
                  className="home-link12 thq-link thq-body-small"
                >
                  Home
                </a>
                <a
                  href="#Services"
                  className="home-link22 thq-link thq-body-small"
                >
                  Services
                </a>
                <a
                  href="#Acknowledgment"
                  className="home-link32 thq-link thq-body-small"
                >
                  Acknowedgement
                </a>
                <a
                  href="https://www.teleporthq.io"
                  className="home-link42 thq-link thq-body-small"
                >
                  About Us
                </a>
                <a
                  href="#Tab Selector 2"
                  className="home-link52 thq-link thq-body-small"
                >
                  Product
                </a>
              </nav>
              <div className="home-buttons2">
                <button className="thq-button-filled">
                  <span>Get Started</span>
                </button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-x-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </header>
      <div className="home-banner">
        <div className="home-frame115">
          <div className="home-frame116">
            <span className="home-text102 DisplayD2M">
              Creating Simple Life
            </span>
            <span className="home-text103 BodyB1R">
              Over 10 years of expertise in advancing smart card technology and
              industry-leading solutions.
            </span>
            <div className="home-frame112">
              <span className="home-text104 BodyB2M">Let’s Get Started</span>
              <div className="home-frame114">
                <img
                  alt="arrowupright1318"
                  src="/external/arrowupright1318-tw3.svg"
                  className="home-arrowupright"
                />
              </div>
            </div>
          </div>
          <div className="home-frame1191">
            <div className="home-frame117">
              <div className="home-frame11810">
                <img
                  alt="resfresh1318"
                  src="/external/resfresh1318-lw1j.svg"
                  className="home-resfresh"
                />
              </div>
              <div className="home-frame1201">
                <span className="home-text105 HeadingH5M">
                  End-to-End Smart Card Solutions
                </span>
                <span className="home-text106 BodyB3R">
                  Equipped with advanced production lines and dedicated R&amp;D,
                  we deliver end-to-end smart card solutions to meet industry
                  challenges head-on.
                </span>
              </div>
            </div>
            <div className="home-frame1192">
              <div className="home-frame11811">
                <img
                  alt="lightbulb1319"
                  src="/external/lightbulb1319-s19.svg"
                  className="home-lightbulb1"
                />
              </div>
              <div className="home-frame1202">
                <span className="home-text107 HeadingH5M">
                  Innovative Product Development
                </span>
                <span className="home-text108 BodyB3R">
                  From design to production, our team partners with you to
                  create tailored smart card solutions that meet evolving market
                  demands.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="About Us" className="home-about-us">
        <div className="home-container3">
          <div className="home-frame122">
            <div className="home-frame123">
              <span className="home-text109 HeadingH4M">About Us</span>
            </div>
            <span className="home-text110">
              “Life is a form of innovation, always changing. Every Innovation
              begins with the small thing and the simple thing.”
            </span>
          </div>
          <div className="home-frame132">
            <div className="home-frame126">
              <span className="home-text111 BodyB2R">
                <span>Cipta</span>
                <span>
                  {' '}
                  is a leader in smart card innovation with over
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>10 years of experience</span>
                <span>
                  {' '}
                  and a team of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>800+ professionals</span>
                <span>
                  . Originally founded as PT Cipta Srigati Lestari (CSL), we
                  evolved from packaging and printing to provide comprehensive
                  smart card solutions, including management systems, Secure
                  Access Modules (SAM), and NFC technology.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span className="home-text118 BodyB2R">
                <span>
                  Rebranded in 2014, Cipta is the only Indonesian company
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  certified by the GSM Alliance&apos;s Security Accreditation
                  Scheme
                </span>
                <span>
                  {' '}
                  (SAS) and is pursuing EMV certification for global expansion.
                  With a commitment to innovation and excellence, we are
                  dedicated to meeting the dynamic needs of the smart card
                  market.
                </span>
              </span>
            </div>
            <div className="home-frame1291">
              <div className="home-frame1271">
                <img
                  alt="creditcard1320"
                  src="/external/creditcard1320-e762.svg"
                  className="home-creditcard1"
                />
                <span className="home-text122 HeadingH2M">1 Million+</span>
                <span className="home-text123 BodyB3R">
                  Cards produced annually, ensuring we meet the demands of a
                  rapidly growing global market.
                </span>
              </div>
              <div className="home-frame131">
                <img
                  alt="briefcase1321"
                  src="/external/briefcase1321-1l4l.svg"
                  className="home-briefcase"
                />
                <span className="home-text124 HeadingH2M">10 Years+</span>
                <span className="home-text125 BodyB3R">
                  Cipta has established itself as a trusted leader in smart card
                  technology, driving innovation across various sectors.
                </span>
              </div>
              <div className="home-frame130">
                <img
                  alt="award1321"
                  src="/external/award1321-thke.svg"
                  className="home-award1"
                />
                <span className="home-text126 HeadingH2M">10 Patents+</span>
                <span className="home-text127 BodyB3R">
                  Our commitment to innovation has resulted in over 10 patents,
                  positioning Cipta as a pioneer in smart card technology
                  development.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-key-figures">
        <div className="home-frame1351">
          <div className="home-container4">
            <div className="home-frame1411">
              <span className="home-text128">Key Figures</span>
              <div className="home-frame134">
                <span className="home-text129 BodyB1R">
                  Cipta operates a state-of-the-art manufacturing facility with
                  six smart card production lines and three IC module lines. We
                  prioritize research and development, investing in our human
                  capital to address the dynamic challenges of the smart card
                  industry.
                </span>
                <span className="home-text130 BodyB1R">
                  <span>
                    In 2012, we expanded our global footprint by opening a
                    branch office in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Dubai</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>United Arab Emirates</span>
                  <span>
                    , to tap into emerging markets in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Africa</span>
                  <span>
                    {' '}
                    and enhance our presence in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Europe</span>
                  <span>
                    {' '}
                    and the
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Middle East.</span>
                </span>
              </div>
            </div>
            <div className="home-frame1451">
              <div className="home-frame1431">
                <div className="home-frame1272">
                  <img
                    alt="simcard1323"
                    src="/external/simcard1323-2y3.svg"
                    className="home-simcard"
                  />
                  <span className="home-text141 HeadingH2M">5 Million+</span>
                  <span className="home-text142 BodyB3R">
                    per month Smart card produced
                  </span>
                </div>
                <div className="home-frame1281">
                  <img
                    alt="box1323"
                    src="/external/box1323-ab3.svg"
                    className="home-box"
                  />
                  <span className="home-text143 HeadingH2M">10 Billion+</span>
                  <span className="home-text144 BodyB3R">
                    Packaging produced
                  </span>
                </div>
              </div>
              <div className="home-frame1441">
                <div className="home-frame1273">
                  <img
                    alt="users1323"
                    src="/external/users1323-w73b.svg"
                    className="home-users"
                  />
                  <span className="home-text145 HeadingH2M">250+</span>
                  <span className="home-text146 BodyB3R">
                    Professional employees
                  </span>
                </div>
                <div className="home-frame1292">
                  <img
                    alt="globe1324"
                    src="/external/globe1324-6g2.svg"
                    className="home-globe"
                  />
                  <span className="home-text147 HeadingH2M">Global Market</span>
                  <span className="home-text148 BodyB3R">
                    3 Continents, 17 Overseas Countries &amp; 2 Branches.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Acknowledgment" className="home-acknowledgement">
        <div className="home-frame133">
          <div className="home-frame335">
            <span className="home-text149">Acknowledgment</span>
            <span className="home-text150 BodyB1R">
              Cipta is known for quality excellence and innovation, supported by
              various accreditations.
            </span>
          </div>
          <div className="home-frame339">
            <div className="home-frame3371">
              <div className="home-frame1471">
                <div className="home-frame11812">
                  <img
                    alt="trophy1325"
                    src="/external/trophy1325-c2f.svg"
                    className="home-trophy1"
                  />
                </div>
                <div className="home-frame340">
                  <span className="home-text151 HeadingH5SB">
                    Purchase orders award
                  </span>
                  <span className="home-text152 BodyB1R">
                    XL (Axiata Group)
                  </span>
                  <span className="home-text153 BodyB1R">2012</span>
                </div>
              </div>
              <div className="home-frame3361">
                <div className="home-frame11813">
                  <img
                    alt="lightbulb1326"
                    src="/external/lightbulb1326-w36h.svg"
                    className="home-lightbulb2"
                  />
                </div>
                <div className="home-frame341">
                  <span className="home-text154 HeadingH5SB">
                    Pioneered &amp; implemented e-pension solution
                  </span>
                  <span className="home-text155 BodyB1R">BTPN</span>
                  <span className="home-text156 BodyB1R">2012</span>
                </div>
              </div>
              <div className="home-frame3372">
                <div className="home-frame11814">
                  <img
                    alt="trophy1326"
                    src="/external/trophy1326-42ul.svg"
                    className="home-trophy2"
                  />
                </div>
                <div className="home-frame342">
                  <span className="home-text157 HeadingH5SB">
                    Purchase orders award
                  </span>
                  <span className="home-text158 BodyB1R">
                    Indosat (Qtel Group)
                  </span>
                  <span className="home-text159 BodyB1R">2011, 2012</span>
                </div>
              </div>
            </div>
            <div className="home-frame338">
              <div className="home-frame1472">
                <div className="home-frame11815">
                  <img
                    alt="lightbulb1327"
                    src="/external/lightbulb1327-d4jr.svg"
                    className="home-lightbulb3"
                  />
                </div>
                <div className="home-frame343">
                  <span className="home-text160 HeadingH5SB">
                    Pioneered the first Half SIM card in Indonesia
                  </span>
                  <span className="home-text161 BodyB1R">AXIS (STC Group)</span>
                  <span className="home-text162 BodyB1R">2009</span>
                </div>
              </div>
              <div className="home-frame3362">
                <div className="home-frame11816">
                  <img
                    alt="award1328"
                    src="/external/award1328-k7k.svg"
                    className="home-award2"
                  />
                </div>
                <div className="home-frame344">
                  <span className="home-text163 HeadingH5SB">
                    First Indonesian vendor to achieve Celltick certificate
                  </span>
                  <span className="home-text164 BodyB1R">Celtick</span>
                </div>
              </div>
              <div className="home-frame3373">
                <div className="home-frame11817">
                  <img
                    alt="award1329"
                    src="/external/award1329-lb0b.svg"
                    className="home-award3"
                  />
                </div>
                <div className="home-frame345">
                  <span className="home-text165 HeadingH5SB">
                    First vendor to achieve SmartTrust WIB 1.3 certificate
                  </span>
                  <span className="home-text166 BodyB1R">SmartTrust</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-member1">
        <div className="home-frame3471">
          <span className="home-text167 HeadingH4M">
            Cipta is a proud member of leading global industry organizations,
            reflecting our commitment to quality and innovation.
          </span>
          <div className="home-frame3461">
            <img
              alt="image1329"
              src="/external/image1329-jvq-200h.png"
              className="home-image10"
            />
            <img
              alt="image1329"
              src="/external/image1329-fw7d-200h.png"
              className="home-image11"
            />
            <img
              alt="image1330"
              src="/external/image1330-hhvv-200h.png"
              className="home-image12"
            />
            <img
              alt="image1330"
              src="/external/image1330-2yjg-200h.png"
              className="home-image13"
            />
            <img
              alt="image1330"
              src="/external/image1330-oh7-200h.png"
              className="home-image14"
            />
            <img
              alt="image1330"
              src="/external/image1330-fkk8-200h.png"
              className="home-image15"
            />
            <img
              alt="image1330"
              src="/external/image1330-cwyl-200h.png"
              className="home-image16"
            />
            <img
              alt="image1330"
              src="/external/image1330-vus8-200h.png"
              className="home-image17"
            />
            <img
              alt="image1330"
              src="/external/image1330-kw8s-200h.png"
              className="home-image18"
            />
          </div>
        </div>
      </div>
      <div id="Services" className="home-services">
        <div className="home-frame1352">
          <div className="home-frame1412">
            <span className="home-text168">Services</span>
            <span className="home-text169 BodyB1R">
              We provide innovative, end-to-end solutions designed to support
              your business growth and meet evolving industry demands. Our
              expertise ensures the highest standards in every project we
              deliver.
            </span>
          </div>
          <div className="home-frame1452">
            <div className="home-frame1432">
              <div className="home-frame1274">
                <div className="home-frame11818">
                  <img
                    alt="illustration1331"
                    src="/external/illustration1331-p73r.svg"
                    className="home-illustration"
                  />
                </div>
                <span className="home-text170 HeadingH3M">
                  Product Development
                </span>
                <span className="home-text171 BodyB3R">
                  <span>
                    Our team collaborates with you to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>design</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>develop</span>
                  <span>
                    , and bring smart card products to
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>market</span>
                  <span>
                    , offering expertise in
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>branding</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>R&amp;D</span>
                  <span>
                    , and effective product launch
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>strategies.</span>
                </span>
              </div>
              <div className="home-frame1282">
                <div className="home-frame11819">
                  <img
                    alt="cog1332"
                    src="/external/cog1332-kre.svg"
                    className="home-cog"
                  />
                </div>
                <span className="home-text184 HeadingH3M">
                  Smart Card Manufacturing
                </span>
                <span className="home-text185 BodyB3R">
                  <span>
                    Our facilities handle all aspects of smart card
                    manufacturing. With six smart card and three IC module
                    lines, we produce over 1
                  </span>
                  <span>6 million smart cards monthly.</span>
                </span>
              </div>
            </div>
            <div className="home-frame1442">
              <div className="home-frame1275">
                <div className="home-frame11820">
                  <img
                    alt="processor1332"
                    src="/external/processor1332-ohgr.svg"
                    className="home-processor"
                  />
                </div>
                <span className="home-text188 HeadingH3M">
                  Smart Card OS &amp; Applet Development
                </span>
                <span className="home-text189 BodyB3R">
                  <span>
                    Our Smart Card R&amp;D team develops user-friendly
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>operating systems</span>
                  <span>
                    {' '}
                    and tailored applications for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>telecommunications</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>payments</span>
                  <span>
                    , and
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>identity sectors</span>
                  <span>
                    . We also offer essential software development tools for all
                    phases of the smart card lifecycle.
                  </span>
                </span>
              </div>
              <div className="home-frame1293">
                <div className="home-frame11821">
                  <img
                    alt="creditcard1333"
                    src="/external/creditcard1333-10s.svg"
                    className="home-creditcard2"
                  />
                </div>
                <span className="home-text199 HeadingH3M">
                  Smart Card Solutions
                </span>
                <span className="home-text200 BodyB3R">
                  <span>
                    We provide comprehensive smart card solutions, including
                    enrollment with
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Biometric Systems</span>
                  <span>
                    ,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Card Management Systems</span>
                  <span>
                    {' '}
                    (CMS), and customizable
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Personalization Systems</span>
                  <span>
                    . Our tailored solutions cater to various industries,
                    ensuring
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>secure</span>
                  <span> and efficient deployment.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabSelector
        text2={
          <Fragment>
            <span className="home-text210">Card Production</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text211">
              Smart Card &amp; Personalization
            </span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text212">Prepress</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text213">
              This term used in the printing and publishing industries for the
              processes and procedures that occur between the creation of print
              layout and final printing.
            </span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text214">Sheet Printing</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text215">
              Before card producing, the front and back side layers have to be
              printed with specific layout.
            </span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text216">Sheet Collating</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text217">
              This step means collating and alignment of different sheetlayers
              for laminated cards.
            </span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="home-text218">Sheet Laminating</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="home-text219">
              After the correct alignment and prefixing of the single sheet
              layers, they have to be laminated to get a stable card body.
            </span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="home-text220">Card Punching</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="home-text221">
              At this process, a single card is punched out of the laminated
              sheets.
            </span>
          </Fragment>
        }
        text21={
          <Fragment>
            <span className="home-text222">IC Module</span>
          </Fragment>
        }
        text22={
          <Fragment>
            <span className="home-text223">Card Production</span>
          </Fragment>
        }
        text31={
          <Fragment>
            <span className="home-text224">
              Smart Card &amp; Personalization
            </span>
          </Fragment>
        }
        text41={
          <Fragment>
            <span className="home-text225">Combined Milling Implanting</span>
          </Fragment>
        }
        text51={
          <Fragment>
            <span className="home-text226">
              This central process in the smart card production chain. Chip
              modules are punched out of the tape, placed and fixed in the
              cavity of card.
            </span>
          </Fragment>
        }
        text61={
          <Fragment>
            <span className="home-text227">Plug Punching</span>
          </Fragment>
        }
        text71={
          <Fragment>
            <span className="home-text228">
              Plug punching is a precise process used to pre-punch SIM plugs,
              ensuring consistent quality and accuracy for optimal card
              performance.
            </span>
          </Fragment>
        }
        text81={
          <Fragment>
            <span className="home-text229">Personalization</span>
          </Fragment>
        }
        text91={
          <Fragment>
            <span className="home-text230">
              This step will make each card into a distinctive, an individual
              item which cannot be forgotten. The use of the most-up-todate
              production technology supports every type of optical
              personalization.
            </span>
          </Fragment>
        }
        text101={
          <Fragment>
            <span className="home-text231">Fulfillment</span>
          </Fragment>
        }
        text111={
          <Fragment>
            <span className="home-text232">
              A variety of fully secure solutions, ranging from simple packages
              and card carriers are to more sophisticated packs designed to
              convey a high-end image of your product.
            </span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="home-text233">Delivery</span>
          </Fragment>
        }
        text131={
          <Fragment>
            <span className="home-text234">
              After your smart card produced and packaged with your special
              packaging, we are ready to deliver the smart card into your place.
            </span>
          </Fragment>
        }
        text211={
          <Fragment>
            <span className="home-text235">IC Module</span>
          </Fragment>
        }
        text221={
          <Fragment>
            <span className="home-text236">Card Production</span>
          </Fragment>
        }
        text311={
          <Fragment>
            <span className="home-text237">
              Smart Card &amp; Personalization
            </span>
          </Fragment>
        }
        text2111={
          <Fragment>
            <span className="home-text238">IC Module</span>
          </Fragment>
        }
        onClickBg={
          <Fragment>
            <span className="home-text239">Smart Card Production Process</span>
          </Fragment>
        }
        rootClassName="tab-selectorroot-class-name"
      ></TabSelector>
      <TabSelector2
        rootClassName="tab-selector2root-class-name"
        tabSelector2Id="Tab Selector 2"
      ></TabSelector2>
      <div className="home-member2">
        <div className="home-frame3472">
          <span className="home-text240 HeadingH4M">
            Trusted by Clients Around the Globe
          </span>
          <div className="home-frame382">
            <span className="home-text241 BodyB1M">Indonesia</span>
            <div className="home-frame3462">
              <img
                alt="image1334"
                src="/external/image1334-gh9j-200h.png"
                className="home-image19"
              />
              <img
                alt="image1334"
                src="/external/image1334-99an-200h.png"
                className="home-image20"
              />
              <img
                alt="image1334"
                src="/external/image1334-ndln-200h.png"
                className="home-image21"
              />
              <img
                alt="image1334"
                src="/external/image1334-r9gf-200h.png"
                className="home-image22"
              />
              <img
                alt="image1334"
                src="/external/image1334-hsg9-200h.png"
                className="home-image23"
              />
              <img
                alt="image1334"
                src="/external/image1334-nt4m-200h.png"
                className="home-image24"
              />
              <img
                alt="image1334"
                src="/external/image1334-tm8t-200h.png"
                className="home-image25"
              />
              <img
                alt="image1335"
                src="/external/image1335-4s7r-200h.png"
                className="home-image26"
              />
              <img
                alt="image1335"
                src="/external/image1335-apxr-200h.png"
                className="home-image27"
              />
              <img
                alt="image1335"
                src="/external/image1335-nv1q-200h.png"
                className="home-image28"
              />
              <img
                alt="image1335"
                src="/external/image1335-da7-200h.png"
                className="home-image29"
              />
              <img
                alt="image1335"
                src="/external/image1335-3wx-200h.png"
                className="home-image30"
              />
              <img
                alt="image1335"
                src="/external/image1335-xdq-200h.png"
                className="home-image31"
              />
              <img
                alt="image1335"
                src="/external/image1335-5eej-200h.png"
                className="home-image32"
              />
              <img
                alt="image1335"
                src="/external/image1335-6lsm-200h.png"
                className="home-image33"
              />
              <img
                alt="image1335"
                src="/external/image1335-s45-200h.png"
                className="home-image34"
              />
              <img
                alt="image1335"
                src="/external/image1335-wpli-200h.png"
                className="home-image35"
              />
              <img
                alt="image1336"
                src="/external/image1336-eom8-200h.png"
                className="home-image36"
              />
              <img
                alt="image1336"
                src="/external/image1336-11hd-200h.png"
                className="home-image37"
              />
              <img
                alt="image1336"
                src="/external/image1336-7m4n-200h.png"
                className="home-image38"
              />
              <img
                alt="image1336"
                src="/external/image1336-uqu-200h.png"
                className="home-image39"
              />
              <img
                alt="image1336"
                src="/external/image1336-72x-200h.png"
                className="home-image40"
              />
              <img
                alt="image1336"
                src="/external/image1336-mdf-200h.png"
                className="home-image41"
              />
              <img
                alt="image1336"
                src="/external/image1336-acf7-200h.png"
                className="home-image42"
              />
              <img
                alt="image1336"
                src="/external/image1336-eosd-200h.png"
                className="home-image43"
              />
              <img
                alt="image1336"
                src="/external/image1336-1918-200h.png"
                className="home-image44"
              />
              <img
                alt="image1336"
                src="/external/image1336-z2ag-200h.png"
                className="home-image45"
              />
              <img
                alt="image1337"
                src="/external/image1337-wl6v-200h.png"
                className="home-image46"
              />
              <img
                alt="image1337"
                src="/external/image1337-tvgx-200h.png"
                className="home-image47"
              />
              <img
                alt="image1337"
                src="/external/image1337-ch09-200h.png"
                className="home-image48"
              />
              <img
                alt="image1337"
                src="/external/image1337-0ae-200h.png"
                className="home-image49"
              />
              <img
                alt="image1337"
                src="/external/image1337-8f0h-200h.png"
                className="home-image50"
              />
              <img
                alt="image1337"
                src="/external/image1337-w07y-200h.png"
                className="home-image51"
              />
              <img
                alt="image1337"
                src="/external/image1337-0tcp-200h.png"
                className="home-image52"
              />
              <img
                alt="image1337"
                src="/external/image1337-mcqm-200h.png"
                className="home-image53"
              />
              <img
                alt="image1337"
                src="/external/image1337-8ubu-200h.png"
                className="home-image54"
              />
            </div>
          </div>
          <div className="home-frame3851">
            <div className="home-frame383">
              <span className="home-text242 BodyB1M">United Kingdom</span>
              <div className="home-frame3463">
                <img
                  alt="image1338"
                  src="/external/image1338-3kst-200h.png"
                  className="home-image55"
                />
                <img
                  alt="image1338"
                  src="/external/image1338-cv89-200h.png"
                  className="home-image56"
                />
              </div>
            </div>
            <div className="home-frame3852">
              <span className="home-text243 BodyB1M">Vietnam</span>
              <img
                alt="image1338"
                src="/external/image1338-j6vr-200h.png"
                className="home-image57"
              />
            </div>
            <div className="home-frame387">
              <span className="home-text244 BodyB1M">Morocco</span>
              <img
                alt="image1339"
                src="/external/image1339-dbam-200h.png"
                className="home-image58"
              />
            </div>
            <div className="home-frame388">
              <span className="home-text245 BodyB1M">Iraq</span>
              <img
                alt="image1339"
                src="/external/image1339-a97i-200h.png"
                className="home-image59"
              />
            </div>
            <div className="home-frame389">
              <span className="home-text246 BodyB1M">Afghanistan</span>
              <img
                alt="image1339"
                src="/external/image1339-h0yd-200h.png"
                className="home-image60"
              />
            </div>
            <div className="home-frame390">
              <span className="home-text247 BodyB1M">Mauritania</span>
              <img
                alt="image1339"
                src="/external/image1339-n3j-200h.png"
                className="home-image61"
              />
            </div>
            <div className="home-frame391">
              <span className="home-text248 BodyB1M">Uganda</span>
              <div className="home-frame3464">
                <img
                  alt="image1340"
                  src="/external/image1340-yp8n-200h.png"
                  className="home-image62"
                />
                <img
                  alt="image1340"
                  src="/external/image1340-2osi-200h.png"
                  className="home-image63"
                />
              </div>
            </div>
            <div className="home-frame392">
              <span className="home-text249 BodyB1M">Kenya</span>
              <img
                alt="image1340"
                src="/external/image1340-qfb-200h.png"
                className="home-image64"
              />
            </div>
            <div className="home-frame393">
              <span className="home-text250 BodyB1M">Zambia</span>
              <img
                alt="image1341"
                src="/external/image1341-uxhd-200h.png"
                className="home-image65"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-container5">
        <div className="home-frame394">
          <div className="home-frame401">
            <div className="home-ciptalogotype2">
              <div className="home-layer11">
                <div className="home-group1">
                  <img
                    alt="Vector1342"
                    src="/external/vector1342-fx6y.svg"
                    className="home-vector10"
                  />
                  <img
                    alt="Vector1342"
                    src="/external/vector1342-2w1r.svg"
                    className="home-vector11"
                  />
                  <img
                    alt="Vector1342"
                    src="/external/vector1342-zrge.svg"
                    className="home-vector12"
                  />
                  <img
                    alt="Vector1342"
                    src="/external/vector1342-1o2.svg"
                    className="home-vector13"
                  />
                  <img
                    alt="Vector1342"
                    src="/external/vector1342-e8e.svg"
                    className="home-vector14"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-9216.svg"
                    className="home-vector15"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-a7g.svg"
                    className="home-vector16"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-vts.svg"
                    className="home-vector17"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-9tkl.svg"
                    className="home-vector18"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-k5sk.svg"
                    className="home-vector19"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-kid.svg"
                    className="home-vector20"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-41mv.svg"
                    className="home-vector21"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-pxz8.svg"
                    className="home-vector22"
                  />
                  <img
                    alt="Vector1343"
                    src="/external/vector1343-hzo.svg"
                    className="home-vector23"
                  />
                </div>
              </div>
            </div>
            <div className="home-frame403">
              <span className="home-text251 HeadingH2SB">
                Get in Touch with Us
              </span>
              <span className="home-text252 BodyB1R">
                Have questions or need assistance? Contact us today, and our
                team will be happy to help you!
              </span>
            </div>
          </div>
          <div className="home-frame400">
            <div className="home-frame402">
              <div className="home-frame397">
                <span className="home-text253 BodyB3M">Full name</span>
                <div className="home-frame3961">
                  <span className="home-text254 BodyB3R">
                    Enter your full name
                  </span>
                </div>
              </div>
              <div className="home-frame399">
                <span className="home-text255 BodyB3M">Email address</span>
                <div className="home-frame3962">
                  <span className="home-text256 BodyB3R">
                    email@address.com
                  </span>
                </div>
              </div>
            </div>
            <div className="home-frame398">
              <span className="home-text257 BodyB3M">Send us a message</span>
              <div className="home-frame3963">
                <span className="home-text258 BodyB3R">
                  Write us a message...
                </span>
              </div>
            </div>
            <div className="home-frame1061">
              <span className="home-text259 BodyB2M">Send Message</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="home-frame410">
          <div className="home-frame407">
            <div className="home-frame408">
              <div className="home-ciptalogotypemono1">
                <div className="home-layer12">
                  <div className="home-group2">
                    <img
                      alt="Vector1346"
                      src="/external/vector1346-6fq.svg"
                      className="home-vector24"
                    />
                    <img
                      alt="Vector1346"
                      src="/external/vector1346-ia28.svg"
                      className="home-vector25"
                    />
                    <img
                      alt="Vector1346"
                      src="/external/vector1346-n8jl.svg"
                      className="home-vector26"
                    />
                    <img
                      alt="Vector1346"
                      src="/external/vector1346-7kjs.svg"
                      className="home-vector27"
                    />
                    <img
                      alt="Vector1346"
                      src="/external/vector1346-z0lp.svg"
                      className="home-vector28"
                    />
                    <div className="home-group3">
                      <img
                        alt="Vector1347"
                        src="/external/vector1347-1kpi.svg"
                        className="home-vector29"
                      />
                      <img
                        alt="Vector1347"
                        src="/external/vector1347-rfyd.svg"
                        className="home-vector30"
                      />
                      <img
                        alt="Vector1347"
                        src="/external/vector1347-u7nq.svg"
                        className="home-vector31"
                      />
                      <img
                        alt="Vector1347"
                        src="/external/vector1347-gwa.svg"
                        className="home-vector32"
                      />
                      <img
                        alt="Vector1347"
                        src="/external/vector1347-qsqua.svg"
                        className="home-vector33"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-frame404">
                <span className="home-text260 BodyB2M">
                  PT. Cipta Srigati Lestari
                </span>
                <span className="home-text261 BodyB3R">
                  Plaza Simatupang Lantai. 2 Jl. TB. Simatupang Kav. IS No.01
                  Pd. Pinang, Kec. Kby. Lama Kota Jakarta Selatan, Daerah Khusus
                  Ibukota Jakarta 12310
                </span>
              </div>
            </div>
            <div className="home-frame406">
              <div className="home-frame405">
                <span className="home-text262 BodyB3R">Home</span>
                <span className="home-text263 BodyB3R">About Us</span>
                <span className="home-text264 BodyB3R">Acknowledgement</span>
                <span className="home-text265 BodyB3R">Service</span>
                <span className="home-text266 BodyB3R">Product</span>
              </div>
              <div className="home-frame1062">
                <span className="home-text267 BodyB3M">Contact Us</span>
              </div>
            </div>
          </div>
          <div className="home-frame409">
            <span className="home-text268 BodyB3R">
              © 2024 Cipta. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
