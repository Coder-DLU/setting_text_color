import React, {Component} from 'react';

class SizeSetting extends Component{

    changeSize(value){
        this.props.onChangeSize(value);
    }


    render() {
        return (
            <div className="paner paner-warning">
                <div className="paner-heading">
                    <h3 className="paner-title">Size: {this.props.fontSize} px</h3>
                </div>
                <div className="paner-body">
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={() => this.changeSize(-2)}
                    >
                        Giảm
                    </button>&nbsp;
                    <button 
                        type="button" 
                        className="btn btn-success"
                        onClick={() => this.changeSize(+2)}
                    >
                        Tăng
                    </button>
                </div>
            </div>
        );
  
    }
}

export default SizeSetting;
