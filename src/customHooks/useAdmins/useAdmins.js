import { useEffect, useState } from 'react';

const useAdmins = (admin) => {
  const [admins, setAdmins] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = admin?.email;
    if (email) {
    }
    fetch(`http://localhost:5000/admin/${email}`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdmins(data?.admin);
        setAdminLoading(false);
      })
      .catch((err) => console.log(err));
  }, [admin]);

  return [admins, adminLoading];
};

export default useAdmins;
