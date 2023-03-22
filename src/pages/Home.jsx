import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Home() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  const [select, showSelect] = useState(false);

  return (
    <div className="user w-full min-h-screen h-fit bg-black">
      <div className={`w-full sm:bg-[url("./imgs/desktop-bg.png")] bg-[url("./imgs/mobile-bg.png")] min-h-screen bg-cover bg-no-repeat top-0 relative`}>
        <div className='w-full bg-gradient-to-r from-[#161204] via-[#ffc800] to-[#161204] h-screen opacity-20 absolute'>
        </div>
        <img className='absolute sm:top-40 top-20 right-10 sm:right-40' src='imgs/star-3.png' />
        <img className='absolute left-10 sm:left-60 top-40 sm:top-80' src='imgs/star-2.png' />

        <div className='place-content-center w-full h-full pt-[300px]'>
          <img className='mx-auto sm:w-60 w-40' src='imgs/logo-text.png' />
          <h1 className='sm:text-[60px] text-[35px] text-white w-full text-center font-[nunito] font-bold'>{t('A Peer-to-Peer Electronic')} <br />{t('Tax Ecosystem')}</h1>
        </div>
        <img className='absolute bottom-40 left-10 sm:left-60' src='imgs/star-1.png' />
        <img className='absolute right-10 sm:right-10 bottom-52' src='imgs/star-2.png' />
      </div>

      <div className='bg-[#0d0b02] py-14 sm:px-16 px-6 h-fit relative overflow-hidden'>
        <div className='subback-1'></div>
        <div className='z-10 relative'>
          <div className='bg-gradient-to-r from-[#2c281a] via-[#43391a] opacity-80 to-[#2c281a] rounded-lg text-center pt-10 pb-4'>
            <h1 className='text-[#FBD125] font-bold text-2xl'>{t('Pitshou Solution LLC')}</h1>
            <div className='my-8 sm:flex justify-center text-left px-4'>
              <p className=''><i className='fa fa-globe py-2 bg-[#524931] w-8 h-8 rounded-full mr-2 text-center my-2'></i>pitshou.angelesi@pitshou.com</p>
              <div className='sm:block hidden w-[2px] h-10 bg-[#FBD125] mx-8'></div>
              <p className=''><i className='fa fa-globe py-2 bg-[#524931] w-8 h-8 rounded-full mr-2 text-center my-2'></i>https://whitepaper.taxblock.network</p>
            </div>
          </div>
          <div className='text-sm'>
            <p className='p-4 my-3 sm:w-3/4'>
              {t(`In whatever you do, make sure that your work lies along with your eternity with GOD whose HOLINESS remains the benchmark for without which no one will see THE LORD as the day of HIS RETURN draws closer in front of us here.`)}
            </p>
            <p className='p-4 my-3 sm:w-3/4'>
              {t(`A citation from Prophets Dr. David Owuor, former US Cancer Researcher and Professor of Pharmaceuticals whose mysterious and prophetic marks have openly revealed who `)}
              <a className='text-[#FBD125]' href='#'><u>{t('THE TWO DREADFUL WITNESSES OF REVELATION 11')}</u></a>
              &nbsp; {t('are')}
            </p>

            <p className='p-4 my-3 sm:w-3/4'>
              <span className='text-[#FBD125] font-bold'>{t('NOTE:')}</span>{t(`For updates and discussions about the project whose launch is coming up soon, please`)}  <a className='text-[#FBD125]' href='#'>{t('join our community chat list.')}</a>
            </p>
          </div>
          <div className='sm:w-4/5 p-4'>
            <h1 className='text-[#FBD125] font-bold text-4xl my-4'>
              {t('Abstract')}
            </h1>
            <p className='leading-10'>
              {t('An ecosystem of tax Apps and services that use machine-enforceable Inter-Blockchain Communication (IBC) protocol to exchange digital assets and data. Tax & Block, a trademark of Pitshou Solutions LLC, aims to provide the best tax filing solutions that reshape tax professionals’ businesses, meet taxpayers’ needs, and potentially serve as a high-impact use case for tax administration improvement using blockchain technology. In the presence of intense competition going on between tax preparation software and tax preparation services, most taxpayers primarily opt for tax preparation software to save some cash. While the tax software option offers flexibility and upfront money saving, this underscores the potential of getting out of your hard work and the maximization of tax returns and/or minimization of tax liability in the back end, especially when dealing with complex taxes. Additionally, the tax system complexity increasing with the current exponential growth of both interests and investments such as in crypto assets brings about risks of audits that may also end up with legal actions in case of tax fraud.[1] Finally, the unnoticed tax expectations gap amplifies losses in the tax administration.')}
              <br />
              {t('We propose a blockchain.')}
              <br />
              {t(`network that combines both the advantage of the tax preparation software flexibility and affordability as well as the benefits of letting taxpayers get matched with tax experts to get their tax return filings done at zero or low monetary costs depending on tax forms' complexity. Doing so, Tax & Block subsequently unleashes a distributed file storage system as an alternative to big companies’ centralized systems for the benefits of individuals and small businesses that care about data ownership and high-standard security. Furthermore, Tax & Block leverages Cosmos technology to lay out a complete blockchain framework that facilitates the development of Tax Marketplace-Specific Blockchains (TMSBs) in a few lines of code to comply with different countries’ tax systems. Finally, to support blockchain platform operations, and real-time payment transactions as well as stores of value, various tokens including a native cryptocurrency or coin named T&B make up the peer-to-peer electronic tax ecosystem.`)}
            </p>
          </div>
          <button className='rounded text-white bg-gradient-to-r to-[#FFB22B] from-[#FBD125] py-3 h-[50px] px-6 mx-4'>
            {t('Learn More')}
          </button>
        </div>
      </div>

      <div className='bg-[#060400] justify-center sm:py-60 py-20 pb-60 relative overflow-hidden'>
        <div className='z-10 relative'>
          <p className='w-full text-center sm:text-xl text-lg'>{t('CONTACT US')}</p>
          <h1 className='mt-4 am:mt-8 sm:text-[60px] text-[30px] font-bold text-[#dbb626] w-full text-center'>{t('Get In Touch!')}</h1>
          <img src='imgs/line.png' className='mx-auto mt-6' />
          <div className='border rounded-lg sm:w-3/5 w-5/6 mx-auto p-8 border-[#FBD125] mt-6'>
            <div className='sm:flex my-2 mx-2 w-full'>
              <div className='sm:w-1/2 w-full sm:mr-2 my-2'>
                <p>{t('First Name *')}</p>
                <input className='p-2 border-[#FBD125] bg-transparent border rounded mt-4 w-full' placeholder={t('Enter First Name')} />
              </div>
              <div className='sm:w-1/2 w-full sm:ml-2 my-2'>
                <p>{t('Last Name (optional)*')}</p>
                <input className='p-2 border-[#FBD125] bg-transparent border rounded mt-4 w-full' placeholder={t('Enter Last Name')} />
              </div>
            </div>
            <div className='w-full mx-2 mt-4'>
              <p>{t('Email Address *')}</p>
              <input className='p-2 border-[#FBD125] bg-transparent border rounded mt-4 w-full' placeholder={t('Enter Email Name')} />
            </div>
            <div className='w-full mx-2 mt-4'>
              <p>{t('Subject of Interest *')}</p>
              <div className='p-2 border-[#FBD125] bg-transparent border rounded mt-4 w-full flex justify-between relative'>
                <span className='text-[#BFBFBF]'>{t('Select Options')}</span>
                <span onClick={() => showSelect(!select)}><i className={`fa ${select ? 'fa-chevron-up' : 'fa-chevron-down'} text-[#FBD125] cursor-pointer`}></i></span>
                {select && <div className='custom-select shadow-lg shadow-black'>
                  <div className='flex sm:px-6 sm:py-4 px-2 py-3'>
                    <label className="custom-checkbox">{t('Interested in the node validation')}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className='flex sm:px-6 sm:py-4 px-2 py-3'>
                    <label className="custom-checkbox">{t('Interested in the shards hosting.')}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className='flex sm:px-6 sm:py-4 px-2 py-3'>
                    <label className="custom-checkbox">{t('Interested in the tax preparation')}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className='flex sm:px-6 sm:py-4 px-2 py-3'>
                    <label className="custom-checkbox">{t('Interested in the AMM pool.')}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className='flex sm:px-6 sm:py-4 px-2 py-3'>
                    <label className="custom-checkbox">{t('Interested in the TMSB development.')}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className='flex sm:px-6 sm:py-4 px-2 py-3'>
                    <label className="custom-checkbox">{t('Interested in all.')}
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
                }
              </div>
            </div>
            <button className='w-full rounded text-white bg-gradient-to-r to-[#FFB22B] from-[#FBD125] py-3 h-[50px] px-6 mx-2 mt-10 mb-4' onClick={() => navigate('/congrat')}>
              {t('Submit')}
            </button>
          </div>
        </div>
        <div className='subback-2'></div>
        <div className='subback-3'></div>
      </div>

      <div className='w-full px-16 py-10 text-center text-white bg-gradient-to-r to-[#261f0e] from-[#0e0d0d] relative'>
        <img src='imgs/mobile-logo.png' className='w-36 mx-auto my-2' />
        <p className='text-[#FBD125]'>{t('Powered by Pitshou Solutions LLC')}</p>
        <hr className='my-4' />
        <div className='justify-between sm:flex text-[#FBD125]'>
          <p>
            {t('@2023. All rights reserved')}
          </p>
          <p>
            {t('Address Here')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
