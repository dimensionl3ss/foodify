import React from 'react'
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { baseUrl } from '../resources/baseURL'

const Home = (props) => {
    const RenderCard = ({item}) => {
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    { item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 m-2">
                        <RenderCard 
                            item={props.dish} 
                            isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess}
                        />
                    </div>
                    <div className="col-12 col-md-4 m-1">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
