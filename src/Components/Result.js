import React, {Component} from 'react';

class Result extends Component{

    setStyle(){
        return{
            color: this.props.color,
            borderColor:this.props.color,
            fontSize: this.props.fontSize
        };
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="notify">
                    <p className="title-text">Bạn đã chọn:</p>
                    <p className="title-text">
                        Color : {this.props.color}
                    </p>
                    <p className="title-text">Fontsize : {this.props.fontSize}px</p>
                </div>
                <div id="content" style={this.setStyle()}>
                    Nội dung setting
                </div>
            </div>
        );
  
    }
}

export default Result;
