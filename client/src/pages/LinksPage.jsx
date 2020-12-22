/* eslint-disable no-empty */
import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import LinksList from '../components/LinksList';
import Loader from '../components/Loader';
import AuthContext from '../context/auth.context';
import useHttp from '../hooks/http.hook';

export default function LinksPage() {
  const { loading, request } = useHttp();
  const [links, setLinks] = useState([]);
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request('/api/link', 'GET', null, {
        Authorization: `Beared ${token}`,
      });
      setLinks(fetched);
    } catch (e) {}
  }, [token, request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!loading && <LinksList links={links} />}
    </>
  );
}
