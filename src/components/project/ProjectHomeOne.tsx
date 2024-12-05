
"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';

const ProjectHomeOne = () => {

  useEffect(() => {
    // Set the matchMedia
    if (window.matchMedia('(min-width: 768px)').matches) {
      const panels = document.querySelectorAll<HTMLElement>('.col-custom');
      panels.forEach((panel, index) => {
        panel.addEventListener('mouseenter', () => {
          removeActiveClasses(panels);
          panel.classList.add('active');
        });

        // Add active class to the third item by default
        if (index === 2) {
          panel.classList.add('active');
        }
      });

      const removeActiveClasses = (panels: NodeListOf<HTMLElement>) => {
        panels.forEach((panel) => {
          panel.classList.remove('active');
        });
      };
    } else {
      // Reset for CSS changes – Still need a better way to do this!
      const colCustom = document.querySelectorAll<HTMLElement>('.col-custom');
      colCustom.forEach((panel) => {
        panel.classList.add('active');
      });
    }
  }, []);



  return (
    <>
      <div className="it-project__area pb-100 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-project__section-title text-center mb-45">
                <span className="it-section-subtitle">OUR SHOWCASE</span>
                <h4 className="it-section-title">Check Our Latest Projects</h4>
              </div>
            </div>
          </div>
          <div className="row-custom">

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="assets/img/project/prroject-big.jpg" alt="rk-theme" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="/project-details"><h4 className="it-panel-title-2">Digital Solution</h4></Link>
                    <span>idea</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="assets/img/project/prroject-big-4.jpg" alt="rk-theme" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="/project-details"><h4 className="it-panel-title-2">Digital Solution</h4></Link>
                    <span>idea</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="assets/img/project/prroject-big-2.jpg" alt="rk-theme" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="/project-details"><h4 className="it-panel-title-2">Digital Solution</h4></Link>
                    <span>idea</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-custom">
              <div className="it-panel-item-box p-relative">
                <div className="it-panel-item">
                  <div className="it-panel-content">
                    <img src="assets/img/project/prroject-big-3.jpg" alt="rk-theme" />
                  </div>
                </div>
                <div className="it-panel-item-2">
                  <div className="it-panel-content-2">
                    <Link href="/project-details"><h4 className="it-panel-title-2">Digital Solution</h4></Link>
                    <span>idea</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHomeOne;