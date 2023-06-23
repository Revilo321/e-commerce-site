import { useEffect, useState } from 'react';

type FetchFunction<T> = (batch: number, batchSize: number) => Promise<T[]>;

const useLazyLoading = <T>(
  fetchFunction: FetchFunction<T>,
  batchSize: number,
): T[] => {
  const [items, setItems] = useState<T[]>([]);
  const [batch, setBatch] = useState<number>(0);
  const [allItemsLoaded, setAllItemsLoaded] = useState<boolean>(false);

  const loadMoreItems = async (): Promise<void> => {
    try {
      const data = await fetchFunction(batch, batchSize);
      if (data.length === 0) {
        setAllItemsLoaded(true);
      } else {
        setItems((prevItems) => [...prevItems, ...data]);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  const handleScroll = (): void => {
    if (
      !allItemsLoaded &&
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
    ) {
      setBatch((prevBatch) => prevBatch + 1);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      loadMoreItems();
    }
  }, [batch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [allItemsLoaded]);

  return items;
};

export default useLazyLoading;
