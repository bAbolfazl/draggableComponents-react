import React from 'react';

import { PersonSingleStyled } from './personSingle.styles';

import PERSONIMG from '../../assets/img/person.jpg';

const PersonSingle = ({ info, handleDrag, handleDrop }) => {

    const { name, id } = info

    return (
        <PersonSingleStyled img={PERSONIMG}
            draggable={true}
            id={id}
            onDragOver={(ev) => ev.preventDefault()}
            onDragStart={handleDrag}
            onDrop={handleDrop}
        >

            <div className="person-single__img">
            </div>

            <div className="person-single__name">
                <div>
                    {name}
                </div>
            </div>
        </PersonSingleStyled>
    );
};

export default PersonSingle;