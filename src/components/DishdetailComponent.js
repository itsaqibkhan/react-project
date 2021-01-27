import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({ dish }) {
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
function RenderComments({ comments }) {
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



const DishDetail = (props) => {
    const dish = props.dish;
    if (dish == null) {
        return (<div></div>);
    }
    return (
        <div className='row'>
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.dish.comments} />
        </div>
    );
}


export default DishDetail;