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
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>About Me</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact Me</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoutes to='/signin'>Sign In</SidebarRoutes>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;