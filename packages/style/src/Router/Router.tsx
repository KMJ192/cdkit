import type { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import authenticator from './authenticator';

import type { Auth, RouterMap } from './types';

type Props = {
  auth?: Auth;
  routerMap?: Array<RouterMap>;
  wrongAccessPage?: ReactNode;
  notFoundPage?: ReactNode;
  children?: ReactNode;
  layout?: (
    children: ReactNode,
    pageInfo: Omit<RouterMap, 'page'>,
  ) => ReactNode;
};

function Router({
  auth = 'common',
  routerMap = [],
  wrongAccessPage = '',
  notFoundPage = '',
  children,
  layout = (page: ReactNode) => page,
}: Props) {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        {routerMap.map(({ auth: pageAuth, path, page, name }, idx) => {
          const [certifiedPage, cert]: [ReactNode, 0 | 1] = authenticator({
            auth,
            pageAuth,
            wrongAccessPage,
            page,
          });

          const pageInfo =
            cert === 0
              ? {
                  name: 'wrongAccess',
                  auth: 'none' as const,
                  path: '',
                }
              : {
                  name,
                  auth,
                  path,
                };
          const render = layout(certifiedPage, pageInfo);

          return <Route path={path} element={render} key={`${idx}-${name}`} />;
        })}
        <Route path='*' element={notFoundPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
