import React, { useEffect } from 'react'
import './Experience.css'
import Chart, { Languages, Hosting, Database } from '../components/Chart.js'
import Typography from '@material-ui/core/Typography'

const Experience = () => {
  
  useEffect(() => {
    window. scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <div className="Experience-con">
      <div className="exp-con-para">
        <h3 className="exp-con-heading">
          <strong>Skills and Experience</strong>
        </h3>
        <Typography paragraph>
          As a programming geek, I love learning and implementing new
          technologies, frameworks and languages. I love a good challenge and
          try to keep up to date with the latest technologies, concepts and best
          practices. Below are a few technologies I've learnt and my proficiency
          scores with them. I've tried to be as objective as possible.
        </Typography>
      </div>

      <div className="exp-con-charts">
        <Chart />
        <div className="exp-con-para">
          <h3 className="exp-con-heading">
            <strong>Languages and Scripts</strong>
          </h3>
          <Typography paragraph>
            Typescript is my favourite language, despite my attempts to remain
            'language agnostic', probably because I've worked with it the most.
            I also prefer it over vanilla Javascript for its strong-typing. I've
            found it helps prevent bugs and errors before runtime.
          </Typography>
          <Typography paragraph>
            Javascript is probably my second most used langauge. I still love it
            though, despite its loose-typing and my Typescript preference.
          </Typography>
          <Typography paragraph>
            Java, though verbose at times, remains one of my loved languages,
            probably because it was the first language where I learned the
            fundamentals of coding. I like to use it as a 'hobby language' i.e
            for online algo' challenges
          </Typography>
          <Typography paragraph>
            I learned C# as part of an internship I did with BitCube. I love it
            primarily because of its syntactic resemblance to Java.
          </Typography>
          <Typography paragraph>
            I try as far as possible to remain 'language agnostic' and learn
            things on a 'Need To Nerd Basis'. I certainly have a preference for
            strong-typed languages but I wouldn't put it over using what is more
            performant.
          </Typography>
        </div>
        <Languages />
        <div className="exp-con-para">
          <h3 className="exp-con-heading">
            <strong>Hosting</strong>
          </h3>
          <Typography paragraph>
            Heroku has quickly become my favourite hosting platform for its ease
            of use and its add-ons. I still believe Firebase is great though,
            because it is so dynamic. I've dabbled a bit with AWS but I'd like
            to learn it in depth going forward
          </Typography>
        </div>
        <Hosting />
        <div className="exp-con-para">
          <h3 className="exp-con-heading">
            <strong>Databases</strong>
          </h3>
          <Typography paragraph>
            I like both MongoDB and Firebase, both with their own respective
            pros and cons.
          </Typography>
        </div>
        <Database />
      </div>
    </div>
  )
}

export default Experience
