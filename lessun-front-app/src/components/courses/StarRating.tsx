import React from 'react';

const StarRating = (props: {rating: number}) => {
    let table = [];

    for (let i = 0; i < 5; i++) {
        if (i <= props.rating - 1) {
            table.push(<i className="fa fa-star"></i>)
        } else {
            table.push(<i className="fa fa-star-o"></i>)
        }
    }

    return (<>{table}</>);
}

export default StarRating;