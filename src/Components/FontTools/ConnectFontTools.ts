import {FontTools} from './FontTools';
import {fontUp, fontDown} from './actions/actions';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    fontSizes: state.fontToolsReducer
});


const ConnectFontTools = connect(
    mapStateToProps,
    {fontUp: fontUp,
    fontDown: fontDown}
)(FontTools);

export default ConnectFontTools;