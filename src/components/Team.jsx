import { Button, Col } from 'react-bootstrap'
import styled from 'styled-components'

// import media 

import TeamVector from '../assets/img/team-vector.png'

const TeamContainer = styled.section`
    width: 100%;
    height: 500px;
    margin-top: 10rem;
`

const SVGContainer = styled.div`
    img {
        width: 100%;
        margin: 3rem auto;
    }
`

const TextContainer = styled.div`
    @media screen and (min-width: 1270px) {
        width: 70%;
        margin-right: auto;
        margin-left: auto;
    }

    @media screen and (min-width: 820px) {
        padding-top: 25%; 
        padding-bottom: 25%;
    }


    padding: 15px;
`

const PinkButton = styled(Button)`
    font-size: 29px;
    color: white;
    background-color: #174654;
    width: 100%;
    outline: none;
    border: none;
    margin-top: 2rem;
    padding: 20px;
    &:hover {
        background-color: #1b1f24;
    }
`

export default function Team() {

    return(
        <TeamContainer>
           
           <div style={{textAlign: 'center', width: '100%'}}>
               <h1 className='heading1'>Team</h1>
           </div>
           <div className="d-flex flex-lg-row flex-column">
                <Col lg={6} md={10} sm={12} xs={12} className="mx-auto">
                    <SVGContainer>
                        <img src={TeamVector} alt="" />
                    </SVGContainer>
                </Col>
                <Col lg={6} md={10} sm={12} xs={12} className="mx-auto">
                    <TextContainer>
                        <h2>Check our team-mates and they resume</h2>
                        <PinkButton>
                            Check out
                        </PinkButton>
                    </TextContainer>
                </Col>
           </div>
            
        </TeamContainer>
    )

}