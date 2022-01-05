import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap'

const RenderChef = ({chef}) => {
    return (
        <Media className = 'col-12 mb-4'>
            <Media left className ='col-2'>
                <img src = {chef.image} width="75%"/>
            </Media>
            <Media body >
                <Media heading>{chef.name}</Media>
                <p>{chef.designation}
                </p>
                <p>
                    {chef.description}
                </p>
            </Media>
        </Media>
    )
}

const About = (props) => {

    const chefs = props.chefs.map((chef) => {
        return (
                <RenderChef chef={chef} key={chef.id}/>     
        );
    });
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
                    <p>Started in 2010, FOODIFY quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-danger text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">1 Jan 2022</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Heritage Group of Institutions</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">10</dd>
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
                    <h2>Corporate chefship</h2>
                </div>
                <div className="col-12">
                        <Media list className="plot-0 mt-2">
                            {chefs}
                        </Media>
                </div>
            </div>
        </div>
    )
}

export default About
