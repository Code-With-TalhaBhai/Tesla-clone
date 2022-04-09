import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title,description,leftbtn,rightbtn,backgroundImg}) {
    return (
        <div>
            <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <Itemtext>
                <h1>{title}</h1>
                <p>{description}</p>
                </Itemtext>
            </Fade>

            <ButtonGrp>
            <Fade bottom>
            <Button>
                <Leftbtn>{leftbtn}</Leftbtn>
                {rightbtn &&
                <Rightbtn>{rightbtn}</Rightbtn>
                }
            </Button>
            </Fade>
            <Downarrow src='/images/down-arrow.svg' />
            </ButtonGrp>
            </Wrap>
        </div>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-position:center;
    background-size:cover;
    bacground-repeat:no-reapeat;
    background-image: ${props => `url('/images/${props.bgImage}')`} ;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    z-index:-1;
`

const Itemtext = styled.div`
    padding-top:15vh;
    text-align:center;
`

const Leftbtn = styled.div`
    color:white;
    text-transform : Uppercase;
    background-color:black;
    opacity:0.8;
    width: 256px;
    height:40px;
    border-radius:50px;
    margin:10px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
    cursor:pointer;
`;
const Rightbtn = styled(Leftbtn)`
 background-color:#DBD8D8;
 color:black;
`;

const Button = styled.div`
   display:flex;
   @media (max-width: 768px){
       flex-direction:column;
   }
`;

const ButtonGrp = styled.div`
    display:flex;
    margin-bottom:40px;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Downarrow = styled.img`
    height:40px;
    margin-top:20px;
    animation:animateDown 1.5s infinite;
`