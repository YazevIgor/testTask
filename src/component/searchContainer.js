import React from "react";
import Search from "./search";
import {getText, setId} from "../redux/search-reducer";
import {connect} from "react-redux";


class SearchContainer extends React.Component {

    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.id !== this.props.id){
            //Для запросов на сервер, не работает из-за проблемы с сервером
            //this.props.getText(this.props.id)
        }
    }

    render() {
        return <Search setId={this.props.setId} text={this.props.text} id={this.props.id}/>
    }
}
const mapStateToProps = (state) => {
    return {
        text: state.search.text,
        id: state.search.id
    }
}

export default connect(mapStateToProps, {getText, setId})(SearchContainer);