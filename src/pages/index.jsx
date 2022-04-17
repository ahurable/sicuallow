import { Component, createRef } from "react"
import { Container, Col } from "react-bootstrap"
import Helmet from "react-helmet"
import styled from 'styled-components'
import { fadeInUp } from "react-animations"
import { keyframes } from "styled-components"

// import components

import Team from '../components/Team'

// import media

import stars from '../assets/img/stars.gif'
import backHeaderImg from '../assets/img/back-header.png'
import ahuraAvatar from '../assets/img/ahura_avatar.jpg'
import ContactUs from "../components/Contact"

const fadeInUpAnimation = keyframes`${fadeInUp}`

const BackImage = styled.div`
    background-size: cover;
    background-image: url(${backHeaderImg});
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;

    @media screen and (min-width: 900px) {
        height: 130%;
    }
`

const Intro = styled.div`

    color: white;

    width: 100%;
    height: 100%;
    padding: 10rem;
    text-align: center;

    @media screen and (max-width: 821px) {
        padding: 5rem;
    }

    @media screen and (max-width: 550px) {
        padding: 2rem;
    }

    @media screen and (max-width: 460px) {
        margin-top: 6rem;
        padding: 5rem 2rem;
    }

    .text-container {
        margin: auto auto;
        h1 {
            font-weight: 700;
            font-size: 75px;
            animation: 0.8s ${fadeInUpAnimation};

            @media screen and (max-width: 780px) {
                font-size: 45px;
            }

            @media screen and (max-width: 550px) {
                font-size: 20px;
            }

        }
        p {
            font-size: 34px;
            animation: 1s ${fadeInUpAnimation};

            @media screen and (max-width: 780px) {
                font-size: 25px;
            }
            
            @media screen and (max-width: 550px) {
                font-size: 20px;
            }

        }
    }
`

const Star1 = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 170px;
    left: 300px;
    background: url(${stars});
    background-size: contain;
    animation: 3s ${fadeInUpAnimation};

    @media screen and (max-width : 900px) {
        display: none;
    }
`
const Star2 = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    top: 133px;
    right: 350px;
    background-image: url(${stars});
    background-size: contain;
    animation: 3.5s ${fadeInUpAnimation};
    
    @media screen and (max-width : 900px) {
        display: none;
    }
`

const Star3 = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    top: 480px;
    left: 405px;
    background: url(${stars});
    background-size: contain;
    animation: 3.3s ${fadeInUpAnimation};
    
    @media screen and (max-width : 900px) {
        display: none;
    }
`

const Star4 = styled.div`
    width: 70px;
    height: 70px;
    position: absolute;
    top: 472px;
    right: 151px;
    background: url(${stars});
    background-size: contain;
    animation: 3.7s ${fadeInUpAnimation};
    
    @media screen and (max-width : 900px) {
        display: none;
    }
`

const PostContainer = styled.div`
    width: 100%;
    text-align: center;
    color: white;
    opacity: 0;
    margin-bottom: -15px;
    transition: all 0.5s;
    h1 {
        margin-top: 10rem;
        font-size: 55px;
        font-weight: 700;
    }
`

// post components

const Post = styled.div`

    &:nth-child(1) {
        margin-top: 3rem !important;
    }

    width: 100%;
    color: white;
    text-align: left;
    background-color: #141414;
    box-shadow: 0px 10px 10px #090909;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    h1 {
        font-size: 37px;
        font-weight: 500;
        padding: 15px;
        margin-top: unset;
    }
    p {
        font-size: 20px;
        padding: 15px;
    }
    `
const TextContainer = styled.div`
    padding: 10px
`
// end of post components

const ReadMoreBtn = styled.button`
    padding: 10px 14px;
    background-color: #0c0c0c;
    border: solid 0.5px #ffffff;
    border-radius: 4px;
    color: white;
    transition: all 0.4s;
    font-size: 23px;
    &:hover {
        color: #0c0c0c;
        background-color: #fff;
    }
`



class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            load: false,
        }
        this.backHeader = createRef()
    }

    componentDidMount() {
        console.log(this.backHeader)
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                this.backHeader.current.style.marginTop = `${ 101 - window.scrollY  }px`
            } else {
                this.backHeader.current.style.marginTop = 0;
            }

            console.log(window.scrollY)
            
            if (window.scrollY >= 250) {
                document.querySelector('#postContainer').style.opacity = "100%";
                document.querySelector('#postContainer').style.marginBottom = "0px";
                // document.querySelector('#postContainer').style.animation = `0.8s ${fadeInUpAnimation}`;
            }
            })
    }

    render() {
        return (
            <>
                <Helmet>
                    <title>Sicuallow - Home Page</title>
                </Helmet>
                <BackImage ref={this.backHeader}></BackImage>
                <Container>
                    
                    <Intro>
                        <Star1></Star1>
                        <Star2></Star2>
                        <Star3></Star3>
                        <Star4></Star4>

                        <div className="text-container">
                            <h1>What is sicuallow?!</h1>
                            <p>
                                sicuallow is a programmer team that make things easier, doing projects in freelancer sites
                                , have a good experience in computer stuff and ...
                            </p>
                        </div>
                    </Intro>
                    <PostContainer id="postContainer">
                        <h1>Latest Posts</h1>
                        <Col lg={9} md={11} sm={12} xs={12} style={{marginRight: "auto", marginLeft: "auto"}}>
                            <Post>
                                <TextContainer>
                                    <h1>first post title</h1>
                                    <p>
                                        this is the description of the first post that have been created on our site.
                                    </p>
                                    <div style={{padding: 15}}>
                                        <span style={{color: 'gray', marginLeft: 20}}>23/12/21</span>
                                        <span style={{color: 'gray', marginLeft: 20}}>admin</span>
                                        <span style={{color: 'gray', marginLeft: 20}}>1234</span>
                                    </div>
                                </TextContainer>
                            </Post>
                        </Col>
                        <Col lg={9} md={11} sm={12} xs={12} style={{marginRight: "auto", marginLeft: "auto"}}>
                            <Post>
                            <TextContainer>
                                    <h1>first post title</h1>
                                    <p>
                                        this is the description of the first post that have been created on our site.
                                    </p>
                                    <div style={{padding: 15}}>
                                        <span style={{color: 'gray', marginLeft: 20}}>23/12/21</span>
                                        <span style={{color: 'gray', marginLeft: 20}}>admin</span>
                                        <span style={{color: 'gray', marginLeft: 20}}>1234</span>
                                    </div>
                                </TextContainer>
                            </Post>
                        </Col>
                        <ReadMoreBtn>Read More</ReadMoreBtn>
                    </PostContainer>
                    {/* 
                        to prevent from coding a lot in index.jsx and make it crowded
                        I did next sections as a component and imported them from 
                        components folder
                    */}
                    <Team />
                    <ContactUs />
                </Container>
                
            </>
        )
    }

}

export default HomePage