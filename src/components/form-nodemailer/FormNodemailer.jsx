import React, {Component, Fragment} from 'react';

class FormNodemailer extends Component{
    render(){
        return(
            <Fragment>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <form action="/send-email" method="POST">
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Name" autoFocus />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" name="email" placeholder="email" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <input type="text" name="phone" placeholder="Número de teléfono" className="form-control" />
                                        </div>

                                        <div className="form-group">
                                            <textarea name="message" rows="2" className="form-control" placeholder="Mensaje"></textarea>
                                        </div>

                                        <button className="btn btn-primary btn-block">
                                            ENVIAR
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default FormNodemailer;