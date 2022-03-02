import React from 'react';
import {Button} from '../ButtonElement';
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
    Img} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, skillTitle, skills, lightText, headline, description, darkText, buttonLabel, img, alt, primary, dark, dark2, dbTitle, dbSkills, otherSkills, otherTitle}) => {
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
                                <BtnWrap>
                                    <Button a href='https://github.com/CodeDavid09' 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}

                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection