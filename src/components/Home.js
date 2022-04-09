import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
    return (
        <div>
            <Container>
         <Section title="Model S" description='Order Online for Touchless Delievery' leftbtn='Customer Order' rightbtn='existing Inventory' backgroundImg='model-s.jpg'/>

         <Section title="Model Y" description='Order Online for Touchless Delievery' leftbtn='Customer Order' rightbtn='existing Inventory' backgroundImg='model-y.jpg'/>

         <Section title="Model 3" description='Order Online for Touchless Delievery' leftbtn='Customer Order' rightbtn='existing Inventory' backgroundImg='model-3.jpg'/>
         
         <Section title="Model X" description='Order Online for Touchless Delievery' leftbtn='Customer Order' rightbtn='existing Inventory' 
         backgroundImg='model-x.jpg'/>

         <Section title="Solar Panels" description='Low Cost Solar Panels in America' leftbtn='Order Now' rightbtn='Learn More' 
         backgroundImg='solar-panel.jpg'/>

         <Section title="Solar Roof" description='Produce Clean Energy From Your Roof' leftbtn='Order Now' rightbtn='Learn More' backgroundImg='solar-roof.jpg'/>

         <Section title="Accessories"  leftbtn='Shop Now' backgroundImg='accessories.jpg'/>
        
         </Container>
        </div>
    )
}

export default Home

const Container = styled.div`
    width:100vw;

`