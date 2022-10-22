import React from 'react'
import { useDispatch } from 'react-redux';
import { filter } from '../redux/actions';


const Filter = () => {
    const dispatch = useDispatch()
    return (
        <div className="add">


            <div style={{ display: "flex", justifyContent: "center", marginTop: 9 }}>
                <button onClick={() => dispatch(filter("All"))} style={{ margin: 9 }}>
                    All
                </button>

                <button onClick={() => dispatch(filter("Done"))}  style={{ margin: 9 }}>
                    Done
                </button>
                <button onClick={() => dispatch(filter("unDone"))}  style={{ margin: 9 }}>
                    Not Done
                </button>

            </div>

        </div>
    )

}

export default Filter;