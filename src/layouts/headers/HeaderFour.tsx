
"use client"

import React, { useState } from 'react';
import NavMenu from './Menu/nav-menu';
import Link from 'next/link';
import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/components/common/Offcanvus';

const HeaderFour = () => {
  const { sticky } = useSticky()
  const [openSidebar, setOpenSidebar] = useState(false)


  return (
    <>
      <header className="it-header-height">
        {/* <!-- header-area-start --> */}

        <div id="header-sticky" className={`it-header__area ${sticky ? 'header-sticky' : ''}`}>
          <div className="container container-large">
            <div className="it-header__wrap p-relative">
              <div className="it-header__logo d-none d-xl-block">
                <Link href="/"><img src="assets/img/logo/white-logo.png" alt="rk-theme" /></Link>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-6 col-md-6 col-6">
                  <div className="it-header__menu d-none d-xl-block text-center">
                    <nav className="it-menu-content">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="it-header__main-logo d-xl-none">
                    <Link href="/"><img src="assets/img/logo/black-logo.png" alt="rk-theme" /></Link>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                  <div className="it-header__right-box d-flex align-items-center justify-content-end">
                    <div className="it-header__btn d-none d-md-block">
                      <a className="it-btn" href="#"><span>Get solution</span></a>
                    </div>
                    <div className="it-header__bar d-xl-none">
                      <button className="it-menu-bar">
                        <span onClick={() => setOpenSidebar(!openSidebar)}><i className="fa-regular fa-bars"></i></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- header-area-end --> */}

      </header>

      <Offcanvus openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />


    </>
  );
};

export default HeaderFour;