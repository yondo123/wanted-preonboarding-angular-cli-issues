import { useCallback, useEffect, useState } from 'react';

const useIntersect = (onIntersect, option) => {
  const [ref, setRef] = useState();
  const checkisIntersecting = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      onIntersect(entry, observer);
    }
  }, []);

  useEffect(() => {
    let observer = null;

    if (ref) {
      observer = new IntersectionObserver(checkisIntersecting, option);
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref, option.root, option.threshold, option.rootMargin]);
  return [ref, setRef];
};

export default useIntersect;
