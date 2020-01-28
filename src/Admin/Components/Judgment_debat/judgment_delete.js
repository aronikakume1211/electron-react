import React from 'react'
import {Link } from 'react-router-dom';
import Datastore from 'nedb';
let database;
function judgment_delete(props) {
   
    const onSubmit = (e) => {

        database = new Datastore("../Judgment_Data.db");
        database.loadDatabase((err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Database created sucessfuly");
            }
        });
        let id = props.match.params.id;
        database.remove({ _id: id }, {}, (err, numRemoved) => {
            if (err) throw err;
            alert("Deleted")
        })
        props.history.push('/hiv-adis-positive');
    }
    return (
        <div>
            <form
                    style={{
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                        padding: "5px",
                        background: "#ff9999",
                        borderRadius: "20px"
                    }}>
                    <div>
                        <h1>Are You Sure you want to delete ?</h1>
                    </div>
                    <Link
                        to="/judge"
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }}
                        onClick={()=>onSubmit()}
                    >
                        <span className="glyphicon glyphicon-trash"></span>YES
                </Link>
                    <Link
                        to="/judge"
                        type="submit"
                        className="btn btn-primary"
                        style={{
                            borderRadius: "20px",
                            margin: "10px",
                        }}
                    >
                       <span className="glyphicon glyphicon-backward"></span> NO
                </Link>
                </form>
        </div>
    )
}

export default judgment_delete

