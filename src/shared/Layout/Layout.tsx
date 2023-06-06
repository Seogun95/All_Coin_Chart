import React, { Suspense } from 'react';
import styled, { useTheme } from 'styled-components';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Suspense fallback={null}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
    </>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`;
