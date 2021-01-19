import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import './About.css'
import boland from '../environment/boland.jpg'
import dietrying from '../environment/dietrying.jpg'
import train from '../environment/train.jpg'
import biscuits from '../environment/biscuits.jpg'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Rotate from 'react-reveal/Rotate'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="About-con" id="About">
      <div className="text-con">
        <Fade top cascade>
          <h3 className="about-heading">
            <strong>About</strong>
          </h3>
        </Fade>
        <Zoom left>
          <Typography paragraph>
            My name is Justin Korkie. I am a software developer from
            Stellenbosch.
          </Typography>
        </Zoom>
        <Zoom right>
          <Typography paragraph>
            I love both problem solving and exploring my creative side. That is
            why I chose software development as a working field. It allows me to
            explore my creativity through solving problems and creating new
            things with a few tools. I have a deep interest in different
            cultures and in my spare time I like to learn new languages and
            cultural norms.
          </Typography>
        </Zoom>
        <Zoom left>
          <Typography paragraph>
            I am enthusiastic and highly motivated to be one of the best in
            whatever field I participate. I live my life by the philosophy
            “challenge your definitions”. Simply put this means considering what
            you can do and what you do know and attempting better, much like my
            former school's motto 'Semper Splendidior' (always better)
          </Typography>
        </Zoom>
      </div>

      <div className="back-story-text-con">
        <h3 className="sub-heading">
          <strong>Back Story</strong>
        </h3>
        <div className="imgandpara">
          <div className="back-story-para">
            <Rotate top left>
              <Typography paragraph>
                I was raised in Stellenbosch and lived there for most of my
                life. As a child I attended Rhenish Primary school. I discovered
                chess at about grade 3 and skateboarding at about grade 5, both
                of which would develop into a passion and that still are today.
              </Typography>
            </Rotate>
          </div>
          <img src={boland} alt="Early Years" className="bolandimg" />
        </div>
        <div className="imgandpara">
          <img src={dietrying} alt="Early Years" className="dietryingimg" />
          <Rotate top right>
            <Typography paragraph className="back-story-para">
              I attended Paul Roos Gymnasium, an institution I'm honored to have
              been a part of. I tried as far as possible to make the most of my
              time there. I'm grateful to have been part of the talented choir
              and the chess team. Beyond that, I had tried my hand at rugby,
              squash, debating, AdMath, 100m hurdles and played in the drumline.
              Though I didn't necessarily excel in each activity, it was fun
              challenging myself and learning new things. I believe every
              discipline has its own lessons to teach.
            </Typography>
          </Rotate>
        </div>
        <div className="imgandpara">
          <Rotate top left>
            <Typography paragraph className="back-story-para">
              After School, I attended TSiBA, a business school in Cape Town,
              also a place I am very proud of. During this time I had gained a
              lot of perspective and learnt many lessons, like how to work Cape
              Town's trains and taxi's and importantly the true meaning of
              sacrifice and I don't necessarily mean by myself, but from the
              people who run and attend the institution
            </Typography>
          </Rotate>
          <img src={train} alt="Early Years" className="trainimg" />
        </div>
        <div className="imgandpara">
          <img src={biscuits} alt="Early Years" className="biscuitsimg" />
          <Rotate top right>
            <Typography paragraph className="back-story-para">
              During my time at TSiBA, I discovered programming and learned as
              much of it as I could. I was incredibly fond of it. I would later
              leave TSiBA to pursue programming full time, a decision I've never
              looked back on.
            </Typography>
          </Rotate>
        </div>
      </div>
    </div>
  )
}

export default About
