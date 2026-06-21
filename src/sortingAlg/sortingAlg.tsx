import { useState, useEffect, useRef } from 'react';
import PageShell from '../components/PageShell';
import './SortingVisualizer.css';

const ARRAY_SIZE = 50;
const MAX_BAR_HEIGHT = 300;

const SortingVisualizer: React.FC = () => {
  const [array, setArray] = useState<number[]>([]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);
  const [delayMs, setDelayMs] = useState<number>(100);
  const [stepMode, setStepMode] = useState<boolean>(false);

  const manualStepRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    generateArray();
  }, []);

  const generateArray = () => {
    const newArray: number[] = [];
    for (let i = 0; i < ARRAY_SIZE; i++) {
      newArray.push(Math.floor(Math.random() * (MAX_BAR_HEIGHT - 10)) + 10);
    }
    setArray(newArray);
  };

  const delay = () => {
    if (stepMode) {
      return new Promise<void>((resolve) => {
        manualStepRef.current = resolve;
      });
    } else {
      return new Promise<void>((resolve) => {
        setTimeout(resolve, delayMs);
      });
    }
  };

  const handleNextStep = () => {
    if (manualStepRef.current) {
      manualStepRef.current();
      manualStepRef.current = null;
    }
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setActiveIndices([j, j + 1]);
        await delay();
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await delay();
        }
        setActiveIndices([]);
      }
    }
    setIsSorting(false);
  };

  const insertionSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      setActiveIndices([i]);
      await delay();

      while (j >= 0 && arr[j] > key) {
        setActiveIndices([j, j + 1]);
        await delay();
        arr[j + 1] = arr[j];
        setArray([...arr]);
        await delay();
        j = j - 1;
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await delay();
      setActiveIndices([]);
    }
    setIsSorting(false);
  };

  const quickSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    await quickSortHelper(arr, 0, arr.length - 1);
    setActiveIndices([]);
    setArray(arr);
    setIsSorting(false);
  };

  const quickSortHelper = async (
    arr: number[],
    low: number,
    high: number
  ): Promise<void> => {
    if (low < high) {
      const pivotIndex = await partition(arr, low, high);
      await quickSortHelper(arr, low, pivotIndex - 1);
      await quickSortHelper(arr, pivotIndex + 1, high);
    }
  };

  const partition = async (
    arr: number[],
    low: number,
    high: number
  ): Promise<number> => {
    const pivot = arr[high];
    let i = low - 1;
    setActiveIndices([high]);
    for (let j = low; j < high; j++) {
      setActiveIndices([j, high]);
      await delay();
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await delay();
      }
      setActiveIndices([]);
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    setArray([...arr]);
    await delay();
    return i + 1;
  };

  const bogoSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    const n = arr.length;

    const isSorted = (arr: number[]) => {
      for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          return false;
        }
      }
      return true;
    };

    const shuffle = (arr: number[]) => {
      for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    };

    while (!isSorted(arr)) {
      shuffle(arr);
      setArray([...arr]);
      setActiveIndices(Array.from(Array(n).keys()));
      await delay();
    }

    setActiveIndices([]);
    setIsSorting(false);
  };

  return (
    <PageShell backTo="/" backLabel="home">
      <p className="es-eyebrow">algorithm</p>
      <h1 className="es-title">Sorting Visualizer</h1>

      <div className="sort-bars">
        {array.map((value, idx) => (
          <div
            key={idx}
            className={`sort-bar${activeIndices.includes(idx) ? ' sort-bar-active' : ''}`}
            style={{ height: `${value}px` }}
          />
        ))}
      </div>

      <div className="sort-controls">
        <button className="es-btn" onClick={bubbleSort} disabled={isSorting}>Bubble Sort</button>
        <button className="es-btn" onClick={insertionSort} disabled={isSorting}>Insertion Sort</button>
        <button className="es-btn" onClick={quickSort} disabled={isSorting}>Quick Sort</button>
        <button className="es-btn" onClick={bogoSort} disabled={isSorting}>Bogo Sort</button>
        <button className="es-btn es-btn--solid" onClick={generateArray} disabled={isSorting}>New Array</button>
      </div>

      <div className="sort-settings">
        <label className="sort-slider">
          <span>Speed: {delayMs} ms</span>
          <input
            type="range"
            min="10"
            max="1000"
            value={delayMs}
            onChange={(e) => setDelayMs(Number(e.target.value))}
            disabled={stepMode}
          />
        </label>
        <label className="sort-checkbox">
          <input
            type="checkbox"
            checked={stepMode}
            onChange={(e) => setStepMode(e.target.checked)}
          />
          <span>Step mode</span>
        </label>
      </div>

      {stepMode && isSorting && (
        <button className="es-btn es-btn--solid" onClick={handleNextStep}>
          Next Step
        </button>
      )}
    </PageShell>
  );
};

export default SortingVisualizer;
