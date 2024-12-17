import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './tab-selector.css'

const TabSelector = (props) => {
  const [tabSelector1, setTabSelector1] = useState(1)
  const [tabSelector, setTabSelector] = useState(1)
  return (
    <div className={`tab-selector-container ${props.rootClassName} `}>
      <div className="tab-selector-frame135">
        <div className="tab-selector-frame141">
          <span className="tab-selector-text10 HeadingH1SB">
            {props.onClickBg ?? (
              <Fragment>
                <span className="tab-selector-text62">
                  Smart Card Production Process
                </span>
              </Fragment>
            )}
          </span>
          {tabSelector1 === 1 && (
            <div className="tab-selector-frame3481">
              {tabSelector1 === 1 && (
                <div className="tab-selector-card-production-button1">
                  <span className="tab-selector-text11 BodyB1R">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="tab-selector-text71">
                          Card Production
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              )}
              <div
                onClick={() => {
                  setTabSelector1(2)
                  setTabSelector(2)
                }}
                className="tab-selector-ic-module-button1"
              >
                <span className="tab-selector-text12 BodyB1R">
                  {props.text21 ?? (
                    <Fragment>
                      <span className="tab-selector-text66">IC Module</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div
                onClick={() => {
                  setTabSelector1(3)
                  setTabSelector(3)
                }}
                className="tab-selector-smart-card-button1"
              >
                <span className="tab-selector-text13 BodyB1R">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="tab-selector-text55">
                        Smart Card &amp; Personalization
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          )}
          {tabSelector1 === 2 && (
            <div className="tab-selector-frame3482">
              <div
                onClick={() => {
                  setTabSelector1(1)
                  setTabSelector(1)
                }}
                className="tab-selector-card-production-button2"
              >
                <span className="tab-selector-text14 BodyB1R">
                  {props.text22 ?? (
                    <Fragment>
                      <span className="tab-selector-text67">
                        Card Production
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-ic-module-button2">
                <span className="tab-selector-text15 BodyB1R">
                  {props.text211 ?? (
                    <Fragment>
                      <span className="tab-selector-text53">IC Module</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div
                onClick={() => {
                  setTabSelector(3)
                  setTabSelector1(3)
                }}
                className="tab-selector-smart-card-button2"
              >
                <span className="tab-selector-text16 BodyB1R">
                  {props.text31 ?? (
                    <Fragment>
                      <span className="tab-selector-text56">
                        Smart Card &amp; Personalization
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          )}
          {tabSelector1 === 3 && (
            <div className="tab-selector-frame3483">
              <div
                onClick={() => {
                  setTabSelector1(1)
                  setTabSelector(1)
                }}
                className="tab-selector-card-production-button3"
              >
                <span className="tab-selector-text17 BodyB1R">
                  {props.text221 ?? (
                    <Fragment>
                      <span className="tab-selector-text76">
                        Card Production
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div
                onClick={() => {
                  setTabSelector(2)
                  setTabSelector1(2)
                }}
                className="tab-selector-ic-module-button3"
              >
                <span className="tab-selector-text18 BodyB1R">
                  {props.text2111 ?? (
                    <Fragment>
                      <span className="tab-selector-text59">IC Module</span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-smart-card-button3">
                <span className="tab-selector-text19 BodyB1R">
                  {props.text311 ?? (
                    <Fragment>
                      <span className="tab-selector-text64">
                        Smart Card &amp; Personalization
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          )}
        </div>
        {tabSelector === 1 && (
          <div className="tab-selector-card-production1">
            <div className="tab-selector-frame3531">
              <div className="tab-selector-frame1171">
                <div className="tab-selector-frame1191"></div>
                <span className="tab-selector-text20 HeadingH4M">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="tab-selector-text51">Prepress</span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text21 BodyB3R">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="tab-selector-text61">
                        This term used in the printing and publishing industries
                        for the processes and procedures that occur between the
                        creation of print layout and final printing.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-frame1441">
                <div className="tab-selector-frame12010"></div>
                <span className="tab-selector-text22 HeadingH4M">
                  {props.text6 ?? (
                    <Fragment>
                      <span className="tab-selector-text73">
                        Sheet Printing
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text23 BodyB3R">
                  {props.text7 ?? (
                    <Fragment>
                      <span className="tab-selector-text79">
                        Before card producing, the front and back side layers
                        have to be printed with specific layout.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-frame1451">
                <div className="tab-selector-frame12011"></div>
                <span className="tab-selector-text24 HeadingH4M">
                  {props.text8 ?? (
                    <Fragment>
                      <span className="tab-selector-text72">
                        Sheet Collating
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text25 BodyB3R">
                  {props.text9 ?? (
                    <Fragment>
                      <span className="tab-selector-text75">
                        This step means collating and alignment of different
                        sheetlayers for laminated cards.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="tab-selector-frame3541">
              <div className="tab-selector-frame1461">
                <div className="tab-selector-frame12012"></div>
                <span className="tab-selector-text26 HeadingH4M">
                  {props.text10 ?? (
                    <Fragment>
                      <span className="tab-selector-text50">
                        Sheet Laminating
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text27 BodyB3R">
                  {props.text11 ?? (
                    <Fragment>
                      <span className="tab-selector-text54">
                        After the correct alignment and prefixing of the single
                        sheet layers, they have to be laminated to get a stable
                        card body.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-frame1452">
                <div className="tab-selector-frame12013"></div>
                <span className="tab-selector-text28 HeadingH4M">
                  {props.text12 ?? (
                    <Fragment>
                      <span className="tab-selector-text78">Card Punching</span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text29 BodyB3R">
                  {props.text13 ?? (
                    <Fragment>
                      <span className="tab-selector-text60">
                        At this process, a single card is punched out of the
                        laminated sheets.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        {tabSelector === 3 && (
          <div className="tab-selector-card-production2">
            <div className="tab-selector-frame3532">
              <div className="tab-selector-frame1172">
                <div className="tab-selector-frame1192"></div>
                <span className="tab-selector-text30 HeadingH4M">
                  {props.text41 ?? (
                    <Fragment>
                      <span className="tab-selector-text52">
                        Combined Milling Implanting
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text31 BodyB3R">
                  {props.text51 ?? (
                    <Fragment>
                      <span className="tab-selector-text65">
                        This central process in the smart card production chain.
                        Chip modules are punched out of the tape, placed and
                        fixed in the cavity of card.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-frame1442">
                <div className="tab-selector-frame12014"></div>
                <span className="tab-selector-text32 HeadingH4M">
                  {props.text61 ?? (
                    <Fragment>
                      <span className="tab-selector-text70">Plug Punching</span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text33 BodyB3R">
                  {props.text71 ?? (
                    <Fragment>
                      <span className="tab-selector-text58">
                        Plug punching is a precise process used to pre-punch SIM
                        plugs, ensuring consistent quality and accuracy for
                        optimal card performance.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-frame1453">
                <div className="tab-selector-frame12015"></div>
                <span className="tab-selector-text34 HeadingH4M">
                  {props.text81 ?? (
                    <Fragment>
                      <span className="tab-selector-text57">
                        Personalization
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text35 BodyB3R">
                  {props.text91 ?? (
                    <Fragment>
                      <span className="tab-selector-text74">
                        This step will make each card into a distinctive, an
                        individual item which cannot be forgotten. The use of
                        the most-up-todate production technology supports every
                        type of optical personalization.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="tab-selector-frame3542">
              <div className="tab-selector-frame1462">
                <div className="tab-selector-frame12016"></div>
                <span className="tab-selector-text36 HeadingH4M">
                  {props.text101 ?? (
                    <Fragment>
                      <span className="tab-selector-text69">Fulfillment</span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text37 BodyB3R">
                  {props.text111 ?? (
                    <Fragment>
                      <span className="tab-selector-text77">
                        A variety of fully secure solutions, ranging from simple
                        packages and card carriers are to more sophisticated
                        packs designed to convey a high-end image of your
                        product.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="tab-selector-frame1454">
                <div className="tab-selector-frame12017"></div>
                <span className="tab-selector-text38 HeadingH4M">
                  {props.text121 ?? (
                    <Fragment>
                      <span className="tab-selector-text63">Delivery</span>
                    </Fragment>
                  )}
                </span>
                <span className="tab-selector-text39 BodyB3R">
                  {props.text131 ?? (
                    <Fragment>
                      <span className="tab-selector-text68">
                        After your smart card produced and packaged with your
                        special packaging, we are ready to deliver the smart
                        card into your place.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        )}
        {tabSelector === 2 && (
          <div className="tab-selector-ic-module">
            <div className="tab-selector-frame3533">
              <div className="tab-selector-frame1173">
                <div className="tab-selector-frame1193"></div>
                <span className="tab-selector-text40 HeadingH4M">
                  Die Bonder
                </span>
                <span className="tab-selector-text41 BodyB3R">
                  Die Bonder: Die bonding is assembly of the chip onto the IC
                  module tape.
                </span>
              </div>
              <div className="tab-selector-frame1443">
                <div className="tab-selector-frame12018"></div>
                <span className="tab-selector-text42 HeadingH4M">
                  Wire Bonder
                </span>
                <span className="tab-selector-text43 BodyB3R">
                  The contract pads of the chip are electrically connected pads
                  of the tape byapproximately 25 µm gold wires.
                </span>
              </div>
              <div className="tab-selector-frame1455">
                <div className="tab-selector-frame12019"></div>
                <span className="tab-selector-text44 HeadingH4M">
                  Chip module Encapsulation
                </span>
                <span className="tab-selector-text45 BodyB3R">
                  Resin is dispensed to protect the chip and wires against
                  mechanical and environmental stress.
                </span>
              </div>
            </div>
            <div className="tab-selector-frame3543">
              <div className="tab-selector-frame1463">
                <div className="tab-selector-frame12020"></div>
                <span className="tab-selector-text46 HeadingH4M">
                  Chip Module Test
                </span>
                <span className="tab-selector-text47 BodyB3R">
                  As an output of functional tests, IC modules are electrically
                  tested.
                </span>
              </div>
              <div className="tab-selector-frame1456">
                <div className="tab-selector-frame12021"></div>
                <span className="tab-selector-text48 HeadingH4M">
                  Glue Tape Lamination
                </span>
                <span className="tab-selector-text49 BodyB3R">
                  The preparation of the modules tape’s for the hot melt
                  implanting process. Chip modules are laminated on the backside
                  with an adhesive tape.
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

TabSelector.defaultProps = {
  text10: undefined,
  text4: undefined,
  text41: undefined,
  text211: undefined,
  text11: undefined,
  text3: undefined,
  text31: undefined,
  text81: undefined,
  text71: undefined,
  text2111: undefined,
  text13: undefined,
  text5: undefined,
  onClickBg: undefined,
  text121: undefined,
  text311: undefined,
  text51: undefined,
  text21: undefined,
  text22: undefined,
  text131: undefined,
  text101: undefined,
  text61: undefined,
  text2: undefined,
  text8: undefined,
  rootClassName: '',
  text6: undefined,
  text91: undefined,
  text9: undefined,
  text221: undefined,
  text111: undefined,
  text12: undefined,
  text7: undefined,
}

TabSelector.propTypes = {
  text10: PropTypes.element,
  text4: PropTypes.element,
  text41: PropTypes.element,
  text211: PropTypes.element,
  text11: PropTypes.element,
  text3: PropTypes.element,
  text31: PropTypes.element,
  text81: PropTypes.element,
  text71: PropTypes.element,
  text2111: PropTypes.element,
  text13: PropTypes.element,
  text5: PropTypes.element,
  onClickBg: PropTypes.element,
  text121: PropTypes.element,
  text311: PropTypes.element,
  text51: PropTypes.element,
  text21: PropTypes.element,
  text22: PropTypes.element,
  text131: PropTypes.element,
  text101: PropTypes.element,
  text61: PropTypes.element,
  text2: PropTypes.element,
  text8: PropTypes.element,
  rootClassName: PropTypes.string,
  text6: PropTypes.element,
  text91: PropTypes.element,
  text9: PropTypes.element,
  text221: PropTypes.element,
  text111: PropTypes.element,
  text12: PropTypes.element,
  text7: PropTypes.element,
}

export default TabSelector
