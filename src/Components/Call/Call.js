import React, { Component } from 'react';
import './Call.css'

const Call = () => {
    return(
        <div className="Calls">
            <div className="container pd-y">
                <div className="CallsItems">
                    <div className="CallsItem">
                        <h2 className="Titles">Call To Action</h2>
                        <p className="desc">making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                    </div>
                    <button className="buttons callbtn">Call To Action</button>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    )
}
export default Call;
