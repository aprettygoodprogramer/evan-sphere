import React, { useState, useEffect, useRef } from 'react';

// Constants to adjust the visualization.
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

  // Custom delay function that either waits for a setTimeout or a manual step.
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

  // -------------------- Bubble Sort --------------------
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

  // -------------------- Insertion Sort --------------------
  const insertionSort = async () => {
    setIsSorting(true);
    const arr = [...array];
    // Start from the second element (first element is trivially sorted)
    for (let i = 1; i < arr.length; i++) {
      const key = arr[i];
      let j = i - 1;
      // Highlight the current key element.
      setActiveIndices([i]);
      await delay();

      // Shift elements of the sorted segment that are greater than the key.
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

  // -------------------- Quick Sort --------------------
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

  // -------------------- Bogo Sort --------------------
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
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Sorting Visualizer</h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: MAX_BAR_HEIGHT,
          width: '80%',
          margin: '0 auto 20px auto',
          border: '1px solid #ccc',
          background: '#fff',
        }}
      >
        {array.map((value, idx) => (
          <div
            key={idx}
            style={{
              width: '20px',
              margin: '0 2px',
              backgroundColor: activeIndices.includes(idx) ? 'red' : 'teal',
              height: `${value}px`,
              transition: 'height 0.2s, background-color 0.2s',
            }}
          />
        ))}
      </div>

      {/* Sorting Controls */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={bubbleSort}
          disabled={isSorting}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
          }}
        >
          Bubble Sort
        </button>
        <button
          onClick={insertionSort}
          disabled={isSorting}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
          }}
        >
          Insertion Sort
        </button>
        <button
          onClick={quickSort}
          disabled={isSorting}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
          }}
        >
          Quick Sort
        </button>
        <button
          onClick={bogoSort}
          disabled={isSorting}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
          }}
        >
          Bogo Sort
        </button>
        <button
          onClick={generateArray}
          disabled={isSorting}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: '#333',
            color: '#fff',
            borderRadius: '4px',
          }}
        >
          Generate New Array
        </button>
      </div>

      {/* Speed Slider and Step Mode Toggle */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px' }}>
          Speed (ms):
          <input
            type="range"
            min="10"
            max="1000"
            value={delayMs}
            onChange={(e) => setDelayMs(Number(e.target.value))}
            disabled={stepMode} // Disable speed slider in step mode.
            style={{ marginLeft: '5px' }}
          />
          <span style={{ marginLeft: '5px' }}>{delayMs} ms</span>
        </label>
        <label style={{ marginLeft: '20px' }}>
          Step Mode:
          <input
            type="checkbox"
            checked={stepMode}
            onChange={(e) => setStepMode(e.target.checked)}
            style={{ marginLeft: '5px' }}
          />
        </label>
      </div>

      {/* Next Step Button (visible only when in step mode and sorting is in progress) */}
      {stepMode && isSorting && (
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={handleNextStep}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              cursor: 'pointer',
              border: 'none',
              backgroundColor: '#555',
              color: '#fff',
              borderRadius: '4px',
            }}
          >
            Next Step
          </button>
        </div>
      )}
    </div>
  );
};

export default SortingVisualizer;
