import React, { useEffect, useState } from 'react';

import { STRIPE_PAYMENT_LINKS } from '../utils/constants';

const Trial = () => {
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [showError, setError] = useState(false);
  const [isHidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 500);
  }, []);

  const handleAgreeButton = () => {
    if (!consent1 || !consent2) {
      setError(true);
    } else {
      window.location.href = STRIPE_PAYMENT_LINKS.TRIAL;
    }
  };

  return (
    <div className="trial__wraper">
      <div className="trial__branded-container">
        <div
          className={`trial__inner-container-left ${isHidden ? 'hidden' : ''}`}
        >
          <a href="/" className="trial__logo">
            <img src="img/forminer.svg" height={28} alt="Forminer logo" />
          </a>
          <div className="trial__product-label">Forminer | Trial</div>
        </div>
      </div>
      <div className="trial__form-container">
        <div
          className={`trial__inner-container-right ${isHidden ? 'hidden' : ''}`}
        >
          <h3>Forminer TRIAL license</h3>

          <div className="trial__checkbox-container">
            <input
              type="checkbox"
              name="consent-1"
              className="trial__checkbox"
              onClick={() => setConsent1(value => !value)}
              checked={consent1}
            />
            <label htmlFor="consent-1">
              I consent to use the Trial version as a noncommercial use, for
              evaluation purposes only.
            </label>
            <div
              className={`trial__error-text ${
                showError && !consent1 ? '' : 'hidden'
              }`}
            >
              This field is required
            </div>
          </div>

          <div className="trial__checkbox-container">
            <input
              type="checkbox"
              name="consent-2"
              className="trial__checkbox"
              onClick={() => setConsent2(value => !value)}
              checked={consent2}
            />
            <label htmlFor="consent-2">
              This License is limited to noncommercial use only.
            </label>
            <div
              className={`trial__error-text ${
                showError && !consent2 ? '' : 'hidden'
              }`}
            >
              This field is required
            </div>
          </div>

          <p>
            Noncommercial use relates only to educational, research, personal or
            evaluation purposes, or evaluating the Software usefulness for a
            particular purpose. Any other use is commercial use. You may not use
            the Software in connection with any activities which purpose is to
            procure a commercial gain to you or others.
          </p>

          <p>
            For using the Software code for commercial purposes you have to
            contact the Provider or visit <a href="/">www.forminer.com</a> for
            an appropriate license.The Software and the accompanying
            documentation are licensed, not sold, to you. The Software is a
            proprietary product of the Provider and is protected under Poland
            and EU copyright laws and international treaty revisions.
          </p>

          <p>
            The Provider retains all rights not specifically granted to you
            hereunder, including ownership of the Software and all copyrights,
            trade secrets, or other intellectual property rights in the Software
            and any accompanying information.
          </p>

          <p>
            <b>Software</b> means the Forminer software owned by Vazco and
            licensed under this Agreement. Forminer allows its users to build
            forms via a drag & drop interface. <br />
            <b>Provider</b> means VAZCO Prosta Spółka Akcyjna with registered
            seat in Wrocław
          </p>

          <div className="trial__btn-container">
            <a
              type="button"
              className="trial__btn"
              style={{ marginRight: 10 }}
              href="/"
            >
              I do not agree
            </a>
            <button className="trial__btn" onClick={handleAgreeButton}>
              I agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trial;
