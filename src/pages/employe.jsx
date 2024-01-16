import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/employe/view';

// ----------------------------------------------------------------------

export default function EmployePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <UserView />
    </>
  );
}
