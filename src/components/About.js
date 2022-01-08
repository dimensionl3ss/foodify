import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Fade, Media } from 'reactstrap'
import { baseUrl } from '../resources/baseURL';
import {Stagger} from 'react-animation-components';

const RenderChef = ({chef}) => {
    return (

        <Card className='image-txt-container'>
            <div>
                <Media left style={{width: '50%'}} object src={baseUrl + chef.image} title={chef.firstName + " " + chef.lastName} />
            </div>
            <div>
                <Media heading>{chef.firstName + " " + chef.lastName}</Media>
                <p>{chef.description}</p>
                <Link className='link-dec' to={`/menu/${chef.dishId}`}>{chef.Dish.name}</Link><span> is the most favorite in my served dishes.</span>
            </div>
        </Card>
    )
}
const ChefsList = (props) => {

    const chefs = props.chefs.chefs.map((chef) => {
        return (
            <Fade in key={chef.id}>
                <RenderChef chef={chef}/> 
            </Fade>
                    
        );
    });

    if(props.chefs.error) {
        return(
            <div style={{textAlign: 'center'}}> 
                <h4>{props.chefs.error}</h4>
            </div>
        );
    }
    return (
        <Media list className="plot-0 mt-2">
            <Stagger in>
                {chefs}
            </Stagger>
        </Media>
    );
    
}
const About = (props) => {

    
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link className='link-dec' to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2018, FOODIFY quickly established the best indian food restaurant in Kolkata.</p>
                    {/* <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p> */}
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-danger text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">25 Jul 2018</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Heritage Group of Institutions</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">20</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p><br/>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2 style={{textAlign: 'center'}}>Our Chefs at Your Service</h2>
                </div>
                <div className="col-12">
                    <ChefsList chefs = {props.chefs} />
                </div>
            </div>
        </div>
    )
}

export default About
