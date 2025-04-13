import React, { type ComponentRef, useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { BASE_PROPS } from '@src/types/types.ts';

type Props<T extends React.ElementType> = BASE_PROPS<T> & {
  isExecute?: boolean;
  children?: React.ReactNode;
  loadingElement?: React.ReactNode;
  isLoading: boolean;
  onLoad: () => void;
};

const DEFAULT_ELEMENT = 'div';

const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Loader = styled.div`
  width: inherit;
  height: fit-content;
`;

function InfiniteScroll<T extends React.ElementType = typeof DEFAULT_ELEMENT>({
  children,
  isLoading,
  loadingElement,
  isExecute = true,
  onLoad = () => {},
  ...props
}: Props<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const observingNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) {
      let container: null | ComponentRef<typeof DEFAULT_ELEMENT> = null;
      if (props.ref && props.ref.current) {
        container = props.ref.current;
      } else if (containerRef.current) {
        container = containerRef.current;
      }
      if (container) {
        container.scrollTo({
          behavior: 'smooth',
          top: container.scrollHeight,
        });
      }
      return;
    }
    if (isExecute && observingNodeRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (Array.isArray(entries) && entries[0].isIntersecting) {
          onLoad();
        }
      });

      observer.observe(observingNodeRef.current);

      // eslint-disable-next-line consistent-return
      return () => {
        observer.disconnect();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExecute, isLoading, onLoad]);

  return (
    <Container {...props}>
      {children}
      <Loader ref={observingNodeRef}>{isLoading && loadingElement}</Loader>
    </Container>
  );
}

export default InfiniteScroll;
