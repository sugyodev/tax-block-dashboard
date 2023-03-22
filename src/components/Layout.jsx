import { useNavigate, Outlet } from 'react-router-dom';
import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from 'react-i18next'

function Layout() {
  const { t, i18n } = useTranslation();
  const [select, setSelectCountry] = useState("US");
  const [showNavbarDropdown, setShowNavbarDropdown] = useState(false);
  const onSelectCountry = (code) => {
    setSelectCountry(code);
    i18n.changeLanguage(code)
  }

  return (
    <>
      {/**
       * Navbar Component
       */}

      <div className='bg-[#0D1018] h-24 py-5 px-10 flex justify-between'>
        <img src='imgs/logo.png' className='h-14 cursor-pointer' />
        <div className='hidden md:flex'>
          <ReactFlagsSelect
            selected={select}
            onSelect={onSelectCountry}
            countries={["US", "DE"]}
            className='mx-2 country-selector font-[500] text-[#B2842C]'
            placeholder="Select Language"
            selectedSize={14}
          />
          <button className='rounded text-white bg-gradient-to-r to-[#B2842C] from-[#DDC161] py-3 h-[50px] px-6'>
          {t('Download PDF')}
          </button>
        </div>
        <div className='md:hidden' onClick={() => { setShowNavbarDropdown(!showNavbarDropdown) }}>
          <i className="fa fa-bars pt-3 cursor-pointer mr-2 text-white" aria-hidden="true" style={{ fontSize: 25 }}></i>
        </div>
        {showNavbarDropdown && <div className='absolute z-10 top-24 w-full flex p-6 bg-[#0D1018] shadow-lg border-t border-[#222] left-0 shadow-black justify-between'>
          <ReactFlagsSelect
            selected={select}
            onSelect={onSelectCountry}
            countries={["US", "DE"]}
            className='country-selector font-[500] text-[#B2842C]'
            placeholder="Select Language"
            selectedSize={14}
          />
          <button className='rounded text-white bg-gradient-to-r to-[#B2842C] from-[#DDC161] py-3 h-[50px] px-6'>
          {t('Download PDF')}
          </button>
        </div>}
      </div >
      <Outlet />
    </>
  )
}

export default Layout;
