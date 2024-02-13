import { useState, useMemo, createContext } from 'react';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3';

export const MyContext = createContext(undefined);

function Layout() {
    const [count, setCount] = useState(10);
    const [count2, setCount2] = useState(100);

    const memoizedContextValue = useMemo(
        () => ({
            count,
            setCount,
            count2,
            setCount2,
        }),
        [count, setCount, count2, setCount2]
    );

    return (
        <MyContext.Provider value={memoizedContextValue}>
            <label>count:</label>
            {count}
            <button onClick={() => setCount((prev) => prev + 1)}>ADD</button>
            <Test1 />
            <Test2 />
            <Test3 />
        </MyContext.Provider>
    );
}

export default Layout;
