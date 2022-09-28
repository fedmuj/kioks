import { FormEvent, useState } from 'react';
import Router from 'next/router';
import Image from 'next/image';
import { identifyVisitor } from '../services/CdpService';
import Link from 'next/link';

const SignupForm = (): JSX.Element => {
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('test' + email);
    return await identifyVisitor(email).then(() => Router.push(`/signup/confirmed`));
  };

  return (
    <section
      className="signupForm banner"
      style={{
        backgroundImage:
          'url(' +
          'https://www.atcom.gr/files/productions/Eurobank_ATM/Eurobank_ATMs_1920x1080_01.jpg' +
          ')',
      }}
    >
      <div className="signupForm__container container">
        <div className="logo">
          <Link href="/start" passHref>
            <Image
              src="https://www.eurobank.gr/-/media/eurobank/logo/eurobank_svg.svg?iar=0&hash=AFECAAF98ECF72F4B9668773B96256D5"
              width={200}
              height={100}
              className="left float"
              alt="Logo"
              title="Tap to go home"
            />
          </Link>
        </div>
        <div className="signupForm__container__content">
          <div className="signupForm__container__content__text">
            <form onSubmit={handleFormSubmit}>
              <span className="headline">Stay Connected</span>
              <h1 className="title">Please insert your card and pin</h1>

              <div className="fields">
                <div className="mb-3">
                  <label className="font-bold text-sm mb-2 ml-1">Card *</label>
                  <div>
                    <input
                      className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Card"
                      type="text"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="font-bold text-sm mb-2 ml-1">Pin *</label>
                  <div>
                    <input
                      className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Pin"
                      type="password"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <button
                  type="submit"
                  className="btn--main btn--main--round btn--main--primary btn--main--big w-full"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
