import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './tab-selector-2.css'

const TabSelector2 = (props) => {
  const [tabSelector, setTabSelector] = useState(1)
  const [tabSelector1, setTabSelector1] = useState(1)
  return (
    <div className={`tab-selector-2-container ${props.rootClassName} `}>
      <div className="tab-selector-2-product">
        <div className="tab-selector-2-frame133">
          <div className="tab-selector-2-frame362">
            <span className="tab-selector-2-text10 HeadingH1SB">Products</span>
            {tabSelector1 === 1 && (
              <div className="tab-selector-2-frame3481">
                <div className="tab-selector-2-for-telecomunication-button1">
                  <span className="tab-selector-2-text11">
                    For Telecomunication
                  </span>
                </div>
                <div
                  onClick={() => {
                    setTabSelector(2)
                    setTabSelector1(2)
                  }}
                  className="tab-selector-2-for-banking-button1"
                >
                  <span className="tab-selector-2-text12 BodyB1R">
                    For Banking &amp; Retail
                  </span>
                </div>
                <div
                  onClick={() => {
                    setTabSelector1(3)
                    setTabSelector(3)
                  }}
                  className="tab-selector-2-for-goverment1"
                >
                  <span className="tab-selector-2-text13 BodyB1R">
                    For Government
                  </span>
                </div>
              </div>
            )}
            {tabSelector1 === 2 && (
              <div className="tab-selector-2-frame3482">
                <div
                  onClick={() => {
                    setTabSelector(1)
                    setTabSelector1(1)
                  }}
                  className="tab-selector-2-for-telecomunication-button2"
                >
                  <span className="tab-selector-2-text14 BodyB1R">
                    For Telecomunication
                  </span>
                </div>
                <div className="tab-selector-2-for-banking-button2">
                  <span className="tab-selector-2-text15">
                    For Banking &amp; Retail
                  </span>
                </div>
                <div
                  onClick={() => {
                    setTabSelector(3)
                    setTabSelector1(3)
                  }}
                  className="tab-selector-2-for-goverment2"
                >
                  <span className="tab-selector-2-text16 BodyB1R">
                    For Government
                  </span>
                </div>
              </div>
            )}
            {tabSelector1 === 3 && (
              <div className="tab-selector-2-frame3483">
                <div
                  onClick={() => {
                    setTabSelector(1)
                    setTabSelector1(1)
                  }}
                  className="tab-selector-2-for-telecomunication-button3"
                >
                  <span className="tab-selector-2-text17 BodyB1R">
                    For Telecomunication
                  </span>
                </div>
                <div
                  onClick={() => {
                    setTabSelector1(2)
                    setTabSelector(2)
                  }}
                  className="tab-selector-2-for-banking-button3"
                >
                  <span className="tab-selector-2-text18 BodyB1R">
                    For Banking &amp; Retail
                  </span>
                </div>
                <div className="tab-selector-2-for-goverment3">
                  <span className="tab-selector-2-text19">For Government</span>
                </div>
              </div>
            )}
          </div>
          {tabSelector === 1 && (
            <div className="tab-selector-2-frame3731">
              <img
                alt="imageI133"
                src="/external/imagei133-28f9-1500w.png"
                className="tab-selector-2-image1"
              />
              <div className="tab-selector-2-frame3741">
                <div className="tab-selector-2-frame3751">
                  <span className="tab-selector-2-text20 HeadingH2SB">
                    SIMbolic
                  </span>
                  <span className="tab-selector-2-text21 HeadingH3M">
                    “A Symbol of your Confidence in Daily Conversations”
                  </span>
                  <span className="tab-selector-2-text22 BodyB2R">
                    Cipta SIMbolic is an end-to-end system designed for the
                    dynamic mobile environment, covering everything from R&amp;D
                    to card personalization. This innovative approach enables us
                    to deliver cost-effective products and services with shorter
                    lead times, making SIMbolic a trusted symbol of confidence
                    in everyday communications.
                  </span>
                </div>
                <div className="tab-selector-2-frame3781">
                  <div className="tab-selector-2-frame3791">
                    <div className="tab-selector-2-frame1271">
                      <img
                        alt="simcardI133"
                        src="/external/simcardi133-yo35.svg"
                        className="tab-selector-2-simcard"
                      />
                      <span className="tab-selector-2-text23 HeadingH5SB">
                        SIM Card &amp; (U)SIM Card
                      </span>
                      <span className="tab-selector-2-text24 BodyB3R">
                        SIMbolic offers a comprehensive portfolio, featuring
                        native and Java™ card OS platforms that support a wide
                        range of value-added services (VAS) applications.
                      </span>
                    </div>
                    <div className="tab-selector-2-frame3761">
                      <img
                        alt="lightbulbI133"
                        src="/external/lightbulbi133-5egf.svg"
                        className="tab-selector-2-lightbulb1"
                      />
                      <span className="tab-selector-2-text25 HeadingH5SB">
                        Solutions &amp; Applications
                      </span>
                      <span className="tab-selector-2-text26 BodyB3R">
                        SIMbolic offers a diverse range of over 50 value-added
                        service applications, supporting solutions like NFC,
                        M2M, and Dynamic SIM Tool Kit (DSTK).
                      </span>
                    </div>
                  </div>
                  <div className="tab-selector-2-frame3771">
                    <img
                      alt="boxI133"
                      src="/external/boxi133-34vd.svg"
                      className="tab-selector-2-box1"
                    />
                    <span className="tab-selector-2-text27 HeadingH5SB">
                      Fulfillment &amp; Packaging
                    </span>
                    <span className="tab-selector-2-text28 BodyB3R">
                      SIMbolic provides end-to-end fulfillment and packaging
                      services, ensuring secure handling of personalized cards
                      while optimizing production flexibility and logistics
                      efficiency.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabSelector === 2 && (
            <div className="tab-selector-2-frame3732">
              <img
                alt="image1310"
                src="/external/image1310-v009-1500w.png"
                className="tab-selector-2-image2"
              />
              <div className="tab-selector-2-frame3742">
                <div className="tab-selector-2-frame3752">
                  <span className="tab-selector-2-text29 HeadingH2SB">
                    Savient
                  </span>
                  <span className="tab-selector-2-text30 HeadingH3M">
                    “Assure Your Payment in a Convenient Way”
                  </span>
                  <span className="tab-selector-2-text31 BodyB2R">
                    Savient offers a complete range of products, including
                    contact and dual interface options, NFC systems, and two
                    platforms with various memory sizes. We provide the latest
                    native and Java™ system specifications, along with
                    personalization and production services featuring diverse
                    software and hardware components.
                  </span>
                </div>
                <div className="tab-selector-2-frame3782">
                  <div className="tab-selector-2-frame3792">
                    <div className="tab-selector-2-frame1272">
                      <img
                        alt="creditcard1311"
                        src="/external/creditcard1311-mqg.svg"
                        className="tab-selector-2-creditcard"
                      />
                      <span className="tab-selector-2-text32 HeadingH5SB">
                        Retail Payment Card
                      </span>
                      <span className="tab-selector-2-text33 BodyB3R">
                        Retail payment cards serve various sectors, including
                        grocery, hospitality, and healthcare, with additional
                        services for design, consulting, and personalization.
                      </span>
                    </div>
                    <div className="tab-selector-2-frame3762">
                      <img
                        alt="lightbulb1311"
                        src="/external/lightbulb1311-effa.svg"
                        className="tab-selector-2-lightbulb2"
                      />
                      <span className="tab-selector-2-text34 HeadingH5SB">
                        Solutions &amp; Applications
                      </span>
                      <span className="tab-selector-2-text35 BodyB3R">
                        Savient offers tailored payment solutions with NFC TSM
                        integration and comprehensive support for electronic
                        payments.
                      </span>
                    </div>
                  </div>
                  <div className="tab-selector-2-frame3772">
                    <img
                      alt="box1312"
                      src="/external/box1312-bu4g.svg"
                      className="tab-selector-2-box2"
                    />
                    <span className="tab-selector-2-text36 HeadingH5SB">
                      Banking Cards
                    </span>
                    <span className="tab-selector-2-text37 BodyB3R">
                      CIPTA specializes in banking cards, focusing on NSICCS
                      ATM/Debit migration. Partnering with Samsung, we develop
                      innovative applications and offer Mastercard-certified
                      ATM/Debit, credit, and prepaid cards using the latest EMV
                      and contactless technologies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabSelector === 3 && (
            <div className="tab-selector-2-frame3733">
              <img
                alt="image1313"
                src="/external/image1313-h3d-1500w.png"
                className="tab-selector-2-image3"
              />
              <div className="tab-selector-2-frame3743">
                <div className="tab-selector-2-frame3753">
                  <span className="tab-selector-2-text38 HeadingH2SB">
                    Secura
                  </span>
                  <span className="tab-selector-2-text39 HeadingH3M">
                    “The Utmost Solution for Your Security Document”
                  </span>
                  <span className="tab-selector-2-text40 BodyB2R">
                    Cipta addresses the government&apos;s demand for enhanced
                    security and functionality with our innovative smart card
                    solutions. Under the SecurA brand, we offer comprehensive
                    products designed for e-government, e-commerce, and border
                    control, providing a reliable solution for global identity
                    needs in the public sector.
                  </span>
                </div>
                <div className="tab-selector-2-frame3783">
                  <div className="tab-selector-2-frame3793">
                    <div className="tab-selector-2-frame1273">
                      <img
                        alt="processor1314"
                        src="/external/processor1314-ggs.svg"
                        className="tab-selector-2-processor"
                      />
                      <span className="tab-selector-2-text41 HeadingH5SB">
                        Electronic ID
                      </span>
                      <span className="tab-selector-2-text42 BodyB3R">
                        E-ID projects are growing globally, driven by security
                        threats and rapid implementation in the smart card
                        identity sector.
                      </span>
                    </div>
                    <div className="tab-selector-2-frame3763">
                      <img
                        alt="heartmedical1315"
                        src="/external/heartmedical1315-mkpc.svg"
                        className="tab-selector-2-heartmedical"
                      />
                      <span className="tab-selector-2-text43 HeadingH5SB">
                        Healthcare Cards
                      </span>
                      <span className="tab-selector-2-text44 BodyB3R">
                        Our healthcare cards offer a comprehensive solution from
                        enrollment to secure storage, with customized services
                        for each client.
                      </span>
                    </div>
                  </div>
                  <div className="tab-selector-2-frame380">
                    <div className="tab-selector-2-frame1274">
                      <img
                        alt="usersquare1315"
                        src="/external/usersquare1315-qixh.svg"
                        className="tab-selector-2-usersquare"
                      />
                      <span className="tab-selector-2-text45 HeadingH5SB">
                        Driving License
                      </span>
                      <span className="tab-selector-2-text46 BodyB3R">
                        Serving as a personal identity document, a driving
                        license holds the same significance as a national ID,
                        necessitating high-level security.
                      </span>
                    </div>
                    <div className="tab-selector-2-frame3764">
                      <img
                        alt="plane1315"
                        src="/external/plane1315-3jys.svg"
                        className="tab-selector-2-plane"
                      />
                      <span className="tab-selector-2-text47 HeadingH5SB">
                        Travel Document
                      </span>
                      <span className="tab-selector-2-text48 BodyB3R">
                        Our e-Passports feature advanced security layers to
                        safeguard personal information and enhance traveler
                        safety.
                      </span>
                    </div>
                  </div>
                  <div className="tab-selector-2-frame381">
                    <div className="tab-selector-2-frame1275">
                      <img
                        alt="car1316"
                        src="/external/car1316-vlgj.svg"
                        className="tab-selector-2-car"
                      />
                      <span className="tab-selector-2-text49 HeadingH5SB">
                        Vehicle Registration Number (VRN)
                      </span>
                      <span className="tab-selector-2-text50 BodyB3R">
                        The government has implemented electronic vehicle
                        registration cards with enhanced security to combat car
                        theft.
                      </span>
                    </div>
                    <div className="tab-selector-2-frame3765">
                      <img
                        alt="home1316"
                        src="/external/home1316-m3qm.svg"
                        className="tab-selector-2-home"
                      />
                      <span className="tab-selector-2-text51 HeadingH5SB">
                        Temporary Residence Permit (TRP)
                      </span>
                      <span className="tab-selector-2-text52 BodyB3R">
                        This card enhances security and simplifies verification
                        by integrating biometrics and meeting strict
                        anti-counterfeiting standards.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

TabSelector2.defaultProps = {
  rootClassName: '',
}

TabSelector2.propTypes = {
  rootClassName: PropTypes.string,
}

export default TabSelector2
