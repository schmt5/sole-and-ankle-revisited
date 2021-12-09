/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Dialog } from '@headlessui/react';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Sidebar open={isOpen} onClose={onDismiss}>
      <Dialog.Overlay style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)' }} />
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={16} />
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Filler>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Filler>
      </Content>
    </Sidebar>
  );
};

const Sidebar = styled(Dialog)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: white;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  right: 8px;
  top: 18px;
  padding: 8px;
`;

const Content = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export default MobileMenu;
