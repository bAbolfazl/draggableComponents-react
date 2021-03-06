import React from "react";
import { connect } from "react-redux";
import { addPeopleList } from "../../redux/people/people.actions";

const AddPerson = ({ addPeopleList }) => {
  let sampleId = 4;

  const on_btn_click = () => {
    const sampleData = {
      id: sampleId,
      name: `ali ${sampleId}`,
      img: "xxx.png",
      position: sampleId,
    };
    addPeopleList(sampleData);
    sampleId++;
  };

  return (
    <div>
      <button onClick={on_btn_click} className="btn btn-primary mt-3">
        Add Person
      </button>
    </div>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  addPeopleList: (person) => dispatch(addPeopleList(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPerson);
