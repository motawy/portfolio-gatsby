import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import SocialLinks from './social-links/social-links.components';
import BurgerMenu from './menu/burger-menu.component';
import media from '@styles/media';
import navigation from '@config/nav/index.yml';
import colors from '@config/colors/index.yml';

const Header = () => {
    return (
        <NavPart id="navbar">
            <Wrapper>
                <Logo>
                    <a href="/" title="MIDO - Portfolio" id="logoHeader">
                        Mido.
                    </a>
                </Logo>
                <NavContainer>
                    <NavList>
                        {navigation &&
                            navigation.navLinks.map(({ name, url, offset }, key) => {
                                return (
                                    <NavListItem key={key}>
                                        <NavLink
                                            to={url}
                                            spy={true}
                                            offset={offset}
                                            smooth={true}
                                            duration={500}
                                        >
                                            {name}
                                        </NavLink>
                                    </NavListItem>
                                );
                            })}
                    </NavList>
                </NavContainer>
                <BurgerMenu />
                <SocialLinks />
            </Wrapper>
        </NavPart>
    );
};

// Hide top bar - TODO: Refactor this
if (typeof window !== `undefined`) {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 20) {
            document.getElementById('navbar').style.boxShadow = `0 10px 30px -10px ${colors.dark}`;
        } else {
            document.getElementById('navbar').style.boxShadow = 'none';
        }
        if (prevScrollpos > currentScrollPos) {
            document.getElementById('navbar').style.top = '0';
        } else {
            document.getElementById('navbar').style.top = '-100px';
        }
        prevScrollpos = currentScrollPos;
    };
}

// Styles

const NavPart = styled.header`
    z-index: 3;
    position: fixed;
    display: flex;
    background-color: ${colors.bgDark};
    justify-content: space-between;
    align-items: center;
    top: 0;
    padding: 0px 50px;
    width: 100vw;
    height: 80px;
    transition: top 0.3s;
    box-shadow: 0 10px 30px -10px ${colors.bgDark};
    ${media.tablet`padding: 0 25px;`};
`;
const Wrapper = styled.nav`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-weight: 700;
        font-size: 40px;
        font-family: heroFont;
        line-height: 48px;
        color: ${colors.accent};
        text-decoration: none;
    }
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    ${media.tablet`display: none;`};
`;

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
`;

const NavListItem = styled.li`
    margin: 0 10px;
    position: relative;
    font-size: 18px;
`;

const NavLink = styled(Link)`
    cursor: pointer;
    border: none;
    padding: 12px 10px;
    text-decoration: none;
    color: ${colors.light};
    position: relative;
    display: inline-block;
    overflow: hidden;
    background: linear-gradient(
        to right,
        ${colors.accent},
        ${colors.accent} 50%,
        ${colors.light} 50%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position: 100%;
    transition: background-position 500ms ease;
    text-decoration: none;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    &:hover {
        background-position: 0 100%;
        -webkit-transform: scale(1.2, 1.2);
        -ms-transform: scale(1.2, 1.2);
        transform: scale(1.2, 1.2);
        transform: translateY(-4%);
    }
`;

export default Header;
