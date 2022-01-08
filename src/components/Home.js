import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import { baseUrl } from '../resources/baseURL'

const Home = (props) => {

    //console.log(props.dishes);
    const RenderCard = ({item}) => {
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle><Link className='link-dec' to={`/menu/${item.id}`}>{item.name}</Link></CardTitle>
                    {item.description}
                </CardBody>
            </Card>
        )
    }
    const promosDish = props.dishes.map((dish) => {
        return(  <div key={dish.id} className='col-lg-4 col-md-12 m-auto'>
                    <h2><i className='fa fa-fire fa-lg'></i><i> Hot Pick This Week</i></h2>
                    <RenderCard item = {dish} errMess = {props.errMess} />
                </div>
        );
    });

    if(props.errMess) {
        return(
            console.log(props.errMess),
            <div className='container'>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else return (

        <div>
            <div className="container">
                <div className="row">
                        {promosDish}
                </div>
            </div>
        </div>
    )
}
export default Home
