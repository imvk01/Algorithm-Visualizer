import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'

class TypeWriterC extends Component {
    state = {
       
    }
    render() {
        return (
            <div className="type display-3"> 
                <Typewriter
                    options={{
                        strings: ['Path Finder','Recursion Tree','Sorting Algorithm','Recursive Sorting','N Queen'
                    ,'Turing Machine','Prime Numbers','Convex Hull','Binary Search','15 Puzzles'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        );
    }
}

export default TypeWriterC;