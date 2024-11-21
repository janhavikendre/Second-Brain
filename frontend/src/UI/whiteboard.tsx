
import React, { useRef, useState, useEffect } from 'react';

const Whiteboard: React.FC<{ tool: string }> = ({ tool }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");

        if (canvas && context) {
            canvas.width = window.innerWidth * 0.8;  
            canvas.height = window.innerHeight * 0.8;
            context.lineCap = "round";  
            context.strokeStyle = "black";  
            context.lineWidth = 5;
            contextRef.current = context;
        }
    }, []);

    const startDrawing = (e: React.MouseEvent) => {
        const { offsetX, offsetY } = e.nativeEvent;
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current?.closePath();
        setIsDrawing(false);
    };

    const draw = (e: React.MouseEvent) => {
        if (!isDrawing) return;

        const { offsetX, offsetY } = e.nativeEvent;

        if (tool === 'pen') {
            contextRef.current?.lineTo(offsetX, offsetY);
            contextRef.current?.stroke();
        } else if (tool === 'eraser') {
            contextRef.current?.clearRect(offsetX - 10, offsetY - 10, 20, 20);  // Eraser logic
        }
    };

    return (
        <div className="flex justify-center items-center w-full">
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                className="border-4 border-gray-400 bg-white max-w-full max-h-full"
            />
        </div>
    );
};

export default Whiteboard;
