import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';

function Header() {
    const [BurgerStatus, setBurgerStatus] = useState(false)
    return (
        <div>
            <Container>
            <img src="images/logo.svg" alt="" />
            <LeftMenu>
                <p><a href='/'>Model S</a></p>
                <p><a href='/'>Model 3</a></p>
                <p><a href='/'>Model X</a></p>
                <p><a href='/'>Model Y</a></p>
                <p><a href='/'>Solar Roof</a></p>
                <p><a href='/'>Solar Panel</a></p>
            </LeftMenu>

            <RightMenu>
                <p><a href="/">Shop</a></p>
                <p><a href="/">Account</a></p>
                <p><a href="/">Menu</a></p>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={BurgerStatus}>
                <Closewrap>
                    <Closecon onClick={()=>setBurgerStatus(false)}></Closecon>
                </Closewrap>
                <li><a href="/">Existing Inventory</a></li>
                <li><a href="/">Used Inventory</a></li>
                <li><a href="/">Trade-In</a></li>
                <li><a href="/">TEst Drive</a></li>
                <li><a href="/">Powerwall</a></li>
                <li><a href="/">commercial energy</a></li>
                <li><a href="/">utilities </a></li>
                <li><a href="/">charging </a></li>
                <li><a href="/">find us </a></li>
                <li><a href="/">support </a></li>
                <li><a href="/">investor relations </a></li>
                <li><a href="/">shop </a></li>
                <li><a href="/">account </a></li>
                <li><a href="/">more </a></li>
            </BurgerNav>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
        width: 100vw;
        min-height: 60px;
        display: flex;
        padding: 0 20px;
        align-items:center;
        justify-content: space-between;
        position: fixed;
        top:0;
        right:0;
        z-index:1;
`

const LeftMenu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    text-decoration:none;
    flex-wrap:no-wrap;
    padding:0 10px;
}
@media (max-width: 1068px){
    display:none;
}
`
const RightMenu = styled.div`
display:flex;
align-items:center;
justify-content:center;

a{
    font-weight:600;
    text-transform:uppercase;
    text-decoration:none;
    flex-wrap:no-wrap;
    padding:0 10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;
margin:0 3px;
margin-top:3px;
`

const BurgerNav = styled.div`
    background-color:white;
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    width:300px;
    list-style-type:none;
    display:flex;
    flex-direction:column;
    padding:30px;
    z-index:10;
    overflow-y:auto;
    transform: ${props=> props.show? 'transform:translateX(0)':'translateX(100%)'};
    transition:transform 0.2s ease-in;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0, .2)
    }
    a{
        text-decoration:none;
        text-transform:uppercase;
        font-weight:600;
    }
`

const Closewrap = styled.div`
    cursor:pointer;
    margin:10px;
    display:flex;
    justify-content:flex-end;
`;
const Closecon = styled(CloseIcon)`
    color:white;
`;