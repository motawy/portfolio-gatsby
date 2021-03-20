import React, { useEffect, useRef } from 'react';
import TitleSection from '../title-section/title-section.component';
import Resume from '../../files/resume.pdf';
import { RiSave3Fill } from 'react-icons/ri';
import styled from 'styled-components';
import media from '@styles/media';
import colors from '@config/colors/index.yml';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import srConfig from '@utils/srConfig';

const About = ({ data }) => {
    const { frontmatter, html } = data.nodes[0];
    const { aboutTitle, aboutSkills, aboutImage } = frontmatter;
    const revealContainer = useRef(null);
    useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

    return (
        <AboutSection id="about" ref={revealContainer}>
            <AboutWrapper>
                <TitleSection
                    firstPart="About"
                    secondPart="me"
                    description="Full-Stack Developer, based in Australia"
                />
                <AboutContainer>
                    <AboutPictureContainer>
                        <AboutImage fluid={aboutImage.childImageSharp.fluid} alt="Avatar of Mido" />
                    </AboutPictureContainer>
                    <AboutInfo>
                        <AboutTitle>
                            <h3>{aboutTitle}</h3>
                        </AboutTitle>
                        <AboutTextContent dangerouslySetInnerHTML={{ __html: html }} />
                        <AboutSkillsContainer>
                            {aboutSkills &&
                                aboutSkills.map((skill, i) => (
                                    <AboutSkill key={i}>{skill}</AboutSkill>
                                ))}
                        </AboutSkillsContainer>
                        <AboutResume>
                            <AboutResumeButton
                                href={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <RiSave3Fill />
                                Resume
                            </AboutResumeButton>
                        </AboutResume>
                    </AboutInfo>
                </AboutContainer>
            </AboutWrapper>
        </AboutSection>
    );
};

// Styles

const AboutSection = styled.section`
    padding: 0 120px 100px;
    ${media.bigDesktop`
      padding: 0 40px;
  `}
`;

const AboutWrapper = styled.div`
    max-width: 1330px;
    width: 100%;
    margin: 0 auto;
`;

const AboutContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 80px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding-bottom: 100px;
    ${media.desktop`
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
  `}
`;

const AboutPictureContainer = styled.div`
    min-width: 260px;
    position: relative;
    ${media.bigPhone`
      &:before, &:after {
        display: none;
      }
  `}

    &:before, &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    &:before {
        background-color: ${colors.bgDark};
        right: -20px;
        bottom: -20px;
    }
    &:after {
        border: 2px solid ${colors.accent};
        top: 20px;
        left: 20px;
        z-index: 1;
    }
`;

const AboutImage = styled(Img)`
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 2;
    position: absolute;
`;

const AboutInfo = styled.div`
    padding-left: 100px;
    ${media.desktop`
      padding-left: 0;
      padding-top: 80px;
  `}
`;

const AboutTitle = styled.div`
    h3 {
        color: ${colors.accent};
        font-size: 24px;
        font-weight: 600;
    }
`;
const AboutTextContent = styled.div`
    padding-top: 20px;
    width: 100%;
    p {
        color: ${colors.light};
        line-height: 26px;
        font-size: 0.9rem;
        margin-top: 16px;
    }
`;
const AboutSkillsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    overflow: hidden;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
`;
const AboutSkill = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 14px;
    color: ${colors.dimText};
    &:before {
        content: '→';
        position: absolute;
        left: 0;
        color: ${colors.accent};
        line-height: 12px;
    }
`;
const AboutResume = styled.div`
    margin-top: 28px;
`;
const AboutResumeButton = styled.a`
    cursor: pointer;
    border: 1px solid ${colors.accent};
    border-radius: 25px;
    padding: 15px 25px;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    color: ${colors.accent};
    background-color: ${colors.dark};
    font-weight: 500;
    font-size: 15px;
    -webkit-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
    ${media.giant`font-size: 13px`}

    &:focus {
        outline: none;
    }

    &:hover {
        color: ${colors.dark};
        background-color: ${colors.accent};
        border-color: ${colors.accent};
        transform: translateY(-4%);
    }

    svg {
        margin-right: 8px;
        font-size: 16px;
    }
`;
export default About;
