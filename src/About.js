import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import img from './images/fire7.jpg'


class About extends Component {

    render() {
        const html = '<p class="sum"><strong><em class="color">Tekoa Firewood</em></strong>, located near <strong><em class="color">Jerusalem</em></strong>, offers choice varieties of premium, fully seasoned, ready burn firewood. <strong><em class="color">Tekoa Firewood</em></strong> provides our clients the options of Oak, Hickory, Mesquite, Pecan, New Mexico Pine, Pinion Pine and Mixed varieties <strong><em class="color1">fully seasoned</em></strong> firewood. <strong><em class="color">Tekoa Firewood</em></strong> also provides our premium firewoods in every quantity range you need. Our Firewood comes in One Cube, Half Cube, Quarter Cube and Apartment Stack Sizes. Need a Bag of our premium firewood? We also offer the convenience of pre-bagged firewood. Firewood <strong><em class="color1">delivery</em></strong> services are also available from <strong><em class="color">Tekoa Firewood</em></strong>. We offer local and long distance <strong><em class="color1">delivery</em></strong> of our fully seasoned ready to burn firewoods.</p>';

        return (
            <div id="about">
              <a target="_blank" href="https://www.linkedin.com/in/neveh-allon/"><img src={img}></img></a>  
              <h3>WELCOME!</h3>
              <div>{ ReactHtmlParser(html) }</div>
              
<p className="sum">
              Feel free to get in touch!
              </p>
              <div>
                            E-mail: 
                            <a href="mailto:NevehAllon@gmail.com">
                            NevehAllon@gmail.com
                            </a>
              </div>
            </div>
        )
    }
}

export default About