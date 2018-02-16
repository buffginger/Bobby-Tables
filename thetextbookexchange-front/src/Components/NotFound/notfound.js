import React from 'react'
import Tumbeast from '../../Assets/Images/404.png';

// Homepage component/module.
class NotFound extends React.Component {
    static contextTypes = {
        router: () => true, // replace with PropTypes.object if you use them
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-1">404 Not Found</h1>
                            <img className="img-fluid" style={{"max-height" : "480px"}} src={Tumbeast} alt="404 Tumbeast"/>
                            <p className="lead">Uh Oh! Looks like we couldn't find a page at that URL...</p>
                            <button onClick={this.context.router.history.goBack} type="button"
                                    className="btn btn-outline-primary btn-lg">Go Back<br/><i
                                className="material-icons">arrow_back</i></button>
                            &nbsp;&nbsp;
                            <a href="/">
                                <button type="button" className="btn btn-outline-secondary btn-lg">Go Home<br/><i
                                    className="material-icons">home</i></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export this module to be imported from App.js.
export default NotFound