import { FormEvent, useEffect, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { forgetCurrentGuest } from '../services/CdpService';

const SignupConfirmation = (): JSX.Element => {
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    return await forgetCurrentGuest().then(() => {
      Router.push('/start');
    });
  };

  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const objectWithData = {
      clientKey: 'sise4euoxgm0pr1be4h26f0bzgonbx69',
      channel: 'WEB',
      language: 'en',
      currencyCode: 'EUR',
      pointOfSale: 'sse4eu.com',
      browserId: window?.Boxever.browser_id,
      friendlyId: 'eurobank__atm_personal_loan',
    };

    setLoading(true);
    fetch('https://api.boxever.com/v2/callFlows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objectWithData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  if (data.decisionOffers && data.decisionOffers[0] && data.decisionOffers.length > 0)
    return (
      <section
        className="signupConfirmation banner"
        style={{
          backgroundImage: 'url(' + data.decisionOffers[0].attributes.image + ')',
        }}
      >
        <div className="signupConfirmation__container container">
          <div className="signupConfirmation__container__content">
            <div className="signupConfirmation__container__content__text">
              <span className="headline">Προσωπικό τραπεζικό δάνειο για εσάς</span>
              <h1 className="title">{data.decisionOffers[0].attributes.title}</h1>
              <p></p>

              <div className="pt-5">
                <form onSubmit={handleFormSubmit}>
                  <button
                    className="btn--main btn--main--round btn--main--primary btn--main--big block rounded-lg"
                    type="submit"
                  >
                    {data.decisionOffers[0].attributes.button}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="logo">
            <Image
              src="https://www.eurobank.gr/-/media/eurobank/logo/eurobank_svg.svg?iar=0&hash=AFECAAF98ECF72F4B9668773B96256D5"
              width={200}
              height={100}
              className="left float"
              alt="Logo"
            />
          </div>
        </div>
      </section>
    );

  if (data.loanAmount && data.loanInterestRate && data.loanSpanMonth && data.loanmonthlyInstalment)
    return (
      <section
        className="signupConfirmation banner"
        style={{
          backgroundImage:
            'url( https://www.eurobank.gr/-/media/eurobank/retail/proionta-kai-upiresies/proionta/daneia/katanalotika/fast-loan/new/fast-loan-810-400-fin.jpg?h=400&w=810&hash=CCF1B4CDC9967C34D6F34ED6DA9B3831 )',
        }}
      >
        <div className="signupConfirmation__container container">
          <div className="signupConfirmation__container__content">
            <div className="signupConfirmation__container__content__text">
              <span className="headline">Προσωπικό τραπεζικό δάνειο για εσάς</span>
              <h1 className="title">
                Συνεχίστε με το γρήγορο δάνειό σας {data.loanAmount}€ πληρώνοντας μόνο{' '}
                {data.loanmonthlyInstalment}€ τους επόμενους {data.loanSpanMonth} Μήνες<br></br>
                Κυμαινόμενο {data.loanInterestRate} <br></br>
                (+ 0,60% εισφορά Ν.128/1975)
              </h1>
              <p></p>

              <div className="pt-5">
                <form onSubmit={handleFormSubmit}>
                  <button
                    className="btn--main btn--main--round btn--main--primary btn--main--big block rounded-lg"
                    type="submit"
                  >
                    Θέλω Fast Loan
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="logo">
            <Image
              src="https://www.eurobank.gr/-/media/eurobank/logo/eurobank_svg.svg?iar=0&hash=AFECAAF98ECF72F4B9668773B96256D5"
              width={200}
              height={100}
              className="left float"
              alt="Logo"
            />
          </div>
        </div>
      </section>
    );

  return (
    <section
      className="signupConfirmation banner"
      style={{
        backgroundImage:
          'url(' +
          'https://www.atcom.gr/files/productions/Eurobank_ATM/Eurobank_ATMs_1920x1080_01.jpg' +
          ')',
      }}
    >
      <div className="signupConfirmation__container container">
        <div className="logo">
          <Image
            src="https://www.eurobank.gr/-/media/eurobank/logo/eurobank_svg.svg?iar=0&hash=AFECAAF98ECF72F4B9668773B96256D5"
            width={200}
            height={100}
            className="left float"
            alt="Logo"
          />
        </div>

        <div className="signupConfirmation__container__content">
          <div className="signupConfirmation__container__content__text">
            <span className="headline">Stay Connected</span>
            <h1 className="title">Thank you!</h1>
            <p></p>

            <div className="pt-5">
              <form onSubmit={handleFormSubmit}>
                <button
                  className="btn--main btn--main--round btn--main--primary btn--main--big block rounded-lg"
                  type="submit"
                >
                  End Session
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupConfirmation;
