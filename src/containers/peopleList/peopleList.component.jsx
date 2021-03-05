import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PersonSingle from '../../components/personSingle/personSingle.component';

import { setPeopleList } from '../../redux/people/people.actions';
import { selectPeopleList } from '../../redux/people/people.selectors';

import { peopleData } from '../../sampleData/data';

const PeopleList = ({ setPeopleList, selectPeopleList }) => {

    useEffect(() => {
        if (selectPeopleList) return

        const arr = []
        peopleData.forEach(({ name, img, id }, index) => {
            arr.push({
                name,
                img,
                id,

                position: index
            })
        })
        // debugger

        setPeopleList(arr)

        // return () => {
        //     cleanup
        // }
    }, [])

    const [dragId, setDragId] = useState();


    const handleDrag = (ev) => {
        setDragId(ev.currentTarget.id);
    };

    const handleDrop = (ev) => {
        const dragBox = selectPeopleList.find((box) => Number(box.id) === Number(dragId));
        const dropBox = selectPeopleList.find((box) => Number(box.id) === Number(ev.currentTarget.id));
        // debugger

        const dragBoxOrder = dragBox.position;
        const dropBoxOrder = dropBox.position;

        const newBoxState = selectPeopleList.map((box) => {
            if (Number(box.id) === Number(dragId)) {
                box.position = dropBoxOrder;
            }
            if (Number(box.id) === Number(ev.currentTarget.id)) {
                box.position = dragBoxOrder;
            }
            console.log(box)
            return box;
        });
        setPeopleList(newBoxState);
    };


    return (
        <div className="container" style={{ overflowX: 'hidden' }}>
            <div className="d-flex align-items-center justify-content-between flex-wrap">
                {
                    selectPeopleList?.sort((a, b) => a.position - b.position)
                        .map(person =>
                            <PersonSingle
                                key={person.id}
                                info={person}
                                handleDrag={handleDrag}
                                handleDrop={handleDrop} />
                        )
                }
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    selectPeopleList: selectPeopleList
})
const mapDispatchToProps = dispatch => ({
    setPeopleList: (x) => dispatch(setPeopleList(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);