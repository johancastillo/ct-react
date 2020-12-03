import React from 'react';

const Input = ({icon, placeHolder}) => (
    <div class="form-group row">
        <div className="col-2 pr-0">
            <span className="icon icon-user"></span>
        </div>
        <div className="col-10 pl-0">
            <input type="email" class="form-control" id="inputPassword" />
        </div>                        
    </div>
);

export default Input;