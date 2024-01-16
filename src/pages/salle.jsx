import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/salle/view';

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
