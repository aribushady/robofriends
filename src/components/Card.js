import React from 'react';

//Card component to create robofriend
const Card = ({name, email, id}) => {     
    return(        
        <div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt ='robo' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>       

    );
}

export default Card;