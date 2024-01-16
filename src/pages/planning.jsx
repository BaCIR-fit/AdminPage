import { Helmet } from 'react-helmet-async';

import { PlanningView } from 'src/sections/planning/view';

// ----------------------------------------------------------------------

export default function PlanningPage() {
return (
<>
    <Helmet>
    <title> Dashboard | Calendar </title>
    </Helmet>

    <PlanningView />
</>
);
}