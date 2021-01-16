import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'
import wallgap from '../environment/wallgap.gif'
import Typography from '@material-ui/core/Typography'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip';

const Home = () => {
  return (
    <div className="home-con" id="Home">
      <div className="home-con-left">
        <div>
        <Fade right>
        <h4>Hey! Welcome</h4>
        </Fade>
        <Fade left>
        <Typography paragraph fontFamily="Roboto">
          I'm Justin. I write code.
        </Typography>
        </Fade>
        </div>
      </div>
      <div className="home-con-right">
      <Flip bottom>
            <img src={wallgap} width="45%" alt="" className="wallgapimg"/>
        </Flip>
      </div>
    </div>
  )
}

export default Home
