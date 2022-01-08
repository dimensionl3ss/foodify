import React from 'react';
import { Media, Breadcrumb, BreadcrumbItem, Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import {baseUrl} from '../resources/baseURL';
function RenderMenuItem({ dish, deleteFavorite }) {
    return(


        <Card className='image-txt-container'>
            <div>
                <Media left style={{width: '300px', height: '300px',}} object src={baseUrl + dish.image} title={dish.name} />
            </div>
            <div style={{padding: '20px'}}>
                <Media heading><Link className='link-dec' to = {`/menu/${dish.id}`}>{dish.name}</Link></Media>
                <p>{dish.description}</p>
                <Button outline color="danger" onClick={() => deleteFavorite(dish.id)}>
                    <span className="fa fa-times fa-lg"></span>
                </Button>
            </div>
        </Card>
    );
}

const Favorite = (props) => {

    if (props.favorites.errMess) {
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.favorites.errMess}</h4>
                </div>
            </div>
        )
    }
    else if (props.favorites.favorites.length > 0) {

        const favorites = props.favorites.favorites.map((favorite) => {
            return (
                <div key={favorite.DishId} className="col-12 mt-5">
                    <RenderMenuItem dish={favorite.Dish} deleteFavorite={props.deleteFavorite} />
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link className='link-dec' to='/'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Favorites</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>My Favorites</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <Media list>
                        {favorites}
                    </Media>
                </div>
            </div>
        );
    }
    else {
        return(
            <div className="container">
                <div className="row">
                    <h4>You have no favorites.</h4>
                </div>
            </div>
        )
    }
}

export default Favorite;