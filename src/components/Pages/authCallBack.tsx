import { useEffect } from 'react';

function AuthCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    
    if (token) {
      localStorage.setItem('auth_token', token);
      window.location.href = '/products';
    }
  }, []);

  return <div>Authentification en cours...</div>;
}

export default AuthCallback;
