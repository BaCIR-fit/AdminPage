import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

import './qrcode.css';


// ----------------------------------------------------------------------

function verifyQRCode(qrCodeContent) {
    // Verify the QR Code content
    console.log(qrCodeContent);
}

export default function QRCodeRender() {

    const videoRef = useRef(null);
    const [qrCodeContent, setQrCodeContent] = useState('');

    useEffect(() => {
        const scanner = new QrScanner(videoRef.current, result => {
            setQrCodeContent(result); // nSet the QR Code content to the state variable
            if (result) {
                scanner.stop(); // Stop scanning QR Code
                document.getElementsByClassName('QRCodeVideo').item(0).style.display = 'none'; // Hide the video element

                verifyQRCode(result); // Verify the QR Code
            }
        });
        scanner.start()

        return () => {
            scanner.stop();
        };
    }, []);

    return (
        <div className="QRCodeContainer">
            <video ref={videoRef} className='QRCodeVideo'>
                <track kind="captions" />
            </video>
            <div id="qrCodeContent">{qrCodeContent}</div> {/* Display the QR Code content */}
        </div>
    );
}
