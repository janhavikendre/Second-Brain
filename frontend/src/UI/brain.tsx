
import React, { useState } from 'react';
import Whiteboard from './whiteboard';  

const Brain: React.FC = () => {
    const [tool, setTool] = useState<string>('pen'); 

    const handleToolChange = (newTool: string) => {
        setTool(newTool);  
    };

    return (
        <div className="flex flex-col items-center p-5">
            <div className="flex space-x-4 p-4 bg-gray-200 w-full mb-4">
                <button onClick={() => handleToolChange('pen')} className="p-2 bg-gray-300 rounded hover:bg-gray-400">
                    Pen
                </button>
                <button onClick={() => handleToolChange('eraser')} className="p-2 bg-gray-300 rounded hover:bg-gray-400">
                    Eraser
                </button>
            </div>

            <Whiteboard tool={tool} /> 
        </div>
    );
};

export default Brain;
