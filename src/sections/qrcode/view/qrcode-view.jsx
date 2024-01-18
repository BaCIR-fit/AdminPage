import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';

import './qrcode.css';

import check from 'src/components/logo/check.gif';
import notCheck from 'src/components/logo/notCheck.gif';

import axios from 'axios';

// ----------------------------------------------------------------------

async function getUser(userID) {
    const url = 'https://apibacir.fly.dev/user/getProfile';
    const dataPost = {
        userId: userID,
    };

    await axios.post(url, dataPost)
        .then(response => {
            if (response.data.userId !== 0) {
                const userInfo = response.data.data[0];

                // console.log(userInfo);

                document.getElementById('qrCodeContent').innerHTML = `Bienvenue ${userInfo.first_name} ${userInfo.last_name}!`;
                document.getElementById('check').style.display = 'block';

                setTimeout(() => {
                    // QRCodeRender();
                    window.location.reload();
                }, 2000);
            } else {
                document.getElementById('qrCodeContent').innerHTML = "Vous n'êtes pas autorisé à entrer!";
                document.getElementById('failed').style.display = 'block';

                setTimeout(() => {
                    // QRCodeRender();
                    window.location.reload();
                }, 2000);
            }
        })
        .catch(error => {
            console.error(error);
        });
}

async function verifyQRCode(qrCodeContent) {
    const url = 'https://apibacir.fly.dev/auth/qrVerify';
    const dataPost = {
        qrCode: qrCodeContent,
    };

    axios.post(url, dataPost)
        .then(response => {
            if (response.data.userId !== 0) {
                getUser(response.data.userId);
            } else {
                document.getElementById('qrCodeContent').innerHTML = "Vous n'êtes pas autorisé à entrer!";
                document.getElementById('failed').style.display = 'block';

                setTimeout(() => {
                    // QRCodeRender();
                    window.location.reload();
                }, 2000);
            }
        })
        .catch(error => {
            console.error(error);
        });
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

            <div id='logo'>
                <div id="qrCodeContent">{qrCodeContent}</div> {/* Display the QR Code content */}

                <img src={check} id='check' alt="OK" style={{ display: 'none' }} />
                <img src={notCheck} id="failed" alt="NOT OK" style={{ display: 'none' }} />
            </div>

        </div>
    );
}
