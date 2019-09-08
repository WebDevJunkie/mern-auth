import React from 'react';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
    return (
        <div>
        { alerts.map(alert => <div key={alert.id} className="alert alert-danger">{alert.msg}</div>) }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alerts
    }
}

export default connect(mapStateToProps)(Alert);
