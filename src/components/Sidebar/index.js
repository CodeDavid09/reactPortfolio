import React from 'react'
import { SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper, 
    SidebarMenu,  
    SidebarLink,
    SideBtnWrap,
    SidebarRoutes
 } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onCLick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About Me</SidebarLink>
                    <SidebarLink to='projects'>Projects</SidebarLink>
                    <SidebarLink to='skills'>Skills</SidebarLink>
                    <SidebarLink to='contact'>Contact Me</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoutes to='/signin'>Sign In</SidebarRoutes>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;