import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    dish = this.props.dish;
    renderDishItem(dish) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    renderComments(comments) {
        const showcomments = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--{comment.author},&nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </div>
            );
        });

        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <div>
                    {showcomments}
                </div>
            </div>
        );
    }



    render() {
        const dish = this.props.dish;
        if (dish == null) {
            return (<div></div>);
        }
        const dishItem = this.renderDishItem(dish);
        const dishComments = this.renderComments(dish.comments);
        return (
            <div className='row'>
                {dishItem}
                {dishComments}
            </div>
        );
    }
}

export default DishDetail;