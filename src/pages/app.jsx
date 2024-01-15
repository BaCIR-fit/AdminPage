import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Admin de BaCIR fit </title>
      </Helmet>

      <AppView />
    </>
  );
}
