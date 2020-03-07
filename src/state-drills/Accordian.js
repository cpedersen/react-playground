import React, { Component } from 'react';
import './Accordian.css';

class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = {displayPara: -1};
    }

    static defaultProps = {
        sections: []
    };

    renderItem = idx => {
        this.setState({displayPara: idx});
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <ul className='Accordion'>
                    {this.props.sections.map((section, idx) => {
                        return (
                            <li>
                                <button onClick={() => this.renderItem(idx)}>
                                    {section.title}
                                </button>
                                {this.state.displayPara === idx &&
                                    <p>
                                        {section.content}
                                    </p>
                                }
                            </li>
                        )
                    })}
                </ul>     
            </div>
        )   
    }

}

export default Accordian;

//console.log("I clicked it!: " + idx)
