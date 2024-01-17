import { Helmet } from 'react-helmet-async';

import { QRCodeRender } from 'src/sections/qrcode/view';

// ----------------------------------------------------------------------

export default function QRCodePage() {
return (
<>
    <Helmet>
    <title> Dashboard | Calendar </title>
    </Helmet>

    <QRCodeRender />
</>
);
}