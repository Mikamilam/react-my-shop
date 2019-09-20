import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

import css from './Slider.css';
import { PICS } from '../../assets/pictures';
import Hipseat1 from '../../images/hipseat1.jpeg';
import Hipseat2 from '../../images/hipseat2.jpeg';
import Hipseat3 from '../../images/hipseat3.jpeg';



class Slider extends Component {
	render(){
		return(
			<MDBContainer>
		      <MDBCarousel
		        activeItem={1}
		        length={3}
		        showControls={true}
		        showIndicators={false}
		        className="z-depth-1"
		        slide
		      >
		        <MDBCarouselInner>
		          <MDBCarouselItem itemId="1">
		            <MDBView>
		              <img
		                className="d-block w-100"
		                src= { Hipseat1 }
		                alt="First slide"
		                style= {{ height: '480px', width: '1800px' }}
		              />
		            </MDBView>
		          </MDBCarouselItem>
		          <MDBCarouselItem itemId="2">
		            <MDBView>
		              <img
		                className="d-block w-100"
		                src= { Hipseat2 }
		                alt="Second slide"
		                style= {{ height: '480px', width: '1800px' }}
		              />
		            </MDBView>
		          </MDBCarouselItem>
		          <MDBCarouselItem itemId="3">
		            <MDBView>
		              <img
		                className="d-block w-100"
		                src= { Hipseat3 }
		                alt="Third slide"
		                style= {{ height: '480px', width: '1800px' }}
		              />
		            </MDBView>
		          </MDBCarouselItem>
		        </MDBCarouselInner>
		      </MDBCarousel>
		    </MDBContainer>
		);
	};
};

export default Slider;