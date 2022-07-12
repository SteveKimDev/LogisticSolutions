import React, { useState } from 'react';
import { Offcanvas, Row, Col } from 'react-bootstrap';
import { Link } from 'gatsby';

import * as Header from './style/header.module.css';

function OffCanvasMenu({ name, ...props }) {
  // offcanvas states
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* button */}
      <button onClick={handleShow} className={Header.menuBtn}>
        <div className={Header.menuText}>MENU</div>
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className={Header.offcanvas}
      >
        {/* header */}
        <Offcanvas.Header className={`${Header.offcanvasHeader}`}>
          <button onClick={handleClose} className={`${Header.closeBtn}`}>
            <div className={Header.closeText}>CLOSE</div>
          </button>
        </Offcanvas.Header>

        {/* body */}
        <Offcanvas.Body>
          <Row style={{ position: 'relative' }}>
            {/* nav links */}
            <Col sm={6}>
              <Col xs={12}>
                <div className={`${Header.navLinkDiv}`}>
                  <Link to='/' onClick={handleClose}>
                    Home
                  </Link>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${Header.navLinkDiv}`}>
                  <Link to='/#services' onClick={handleClose}>
                    Services
                  </Link>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${Header.navLinkDiv}`}>
                  <Link to='/#projects' onClick={handleClose}>
                    Projects
                  </Link>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${Header.navLinkDiv}`}>
                  <Link to='/#about' onClick={handleClose}>
                    About
                  </Link>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${Header.navLinkDiv}`}>
                  <Link to='/#team' onClick={handleClose}>
                    Team
                  </Link>
                </div>
              </Col>
              <Col xs={12}>
                <div className={`${Header.navLinkDiv}`}>
                  <Link to='/#contact' onClick={handleClose}>
                    Contact
                  </Link>
                </div>
              </Col>
            </Col>

            {/* socail links */}
            <Col sm={6}>
              <div className={Header.socialLinkCol}>
                <div className={`${Header.socialLinkDiv}`}>
                  <a
                    href='https://www.linkedin.com/in/stevekimdev'
                    target='_blank'
                    rel='noreferrer'
                    onClick={handleClose}
                  >
                    LinkedIn
                  </a>
                </div>
                <div className={`${Header.socialLinkDiv}`}>
                  <a
                    href='https://www.behance.net/stevekimdev'
                    target='_blank'
                    rel='noreferrer'
                    onClick={handleClose}
                  >
                    Behance
                  </a>
                </div>
                <div className={`${Header.socialLinkDiv}`}>
                  <a
                    href='https://www.instagram.com/stevekimdev'
                    target='_blank'
                    rel='noreferrer'
                    onClick={handleClose}
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffCanvasBtn() {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasMenu key={idx} placement={placement} />
      ))}
    </>
  );
}

export default OffCanvasBtn;
