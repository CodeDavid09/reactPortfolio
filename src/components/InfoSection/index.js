import React from 'react';
import { Button } from '../ButtonElement';
import Icon4 from '../../images/me.jpg'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoElements'

const InfoSection1 = ({ lightBg, id, imgStart, topLine, skillTitle, skills, lightText, headline, description, darkText, buttonLabel, img, alt, primary, dark, dark2, dbTitle, dbSkills, otherSkills, otherTitle }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <TopLine>{skillTitle}</TopLine>
                                <Subtitle darkText={darkText}>{skills}</Subtitle>
                                <TopLine>{dbTitle}</TopLine>
                                <Subtitle darkText={darkText}>{dbSkills}</Subtitle>
                                <TopLine>{otherTitle}</TopLine>
                                <Subtitle darkText={darkText}>{otherSkills}</Subtitle>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Icon4} alt={alt} />
                                <BtnWrap>
                                    <Button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href = 'https://docs.google.com/document/d/e/2PACX-1vSYgPdXPDeeN8YGFDu6iGwWO-Or7isNa0IGxpgs27lJYuhYXT-F027Jb04JyxMF7Ujh3RcSTU9zRIF7/pub';
                                        }}
                                    >Resume</Button>
                                </BtnWrap>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection1