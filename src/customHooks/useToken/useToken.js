import { useEffect, useState } from 'react';

const useToken = (user) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    console.log('User inside token', user);
    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`https://jikmunn-doctors-portal.herokuapp.com/user/${email}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log('data inside useToken', data);
          const accessToken = data?.accessToken;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return [token];
};

export default useToken;
