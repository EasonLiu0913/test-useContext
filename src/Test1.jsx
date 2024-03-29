import { memo, useContext } from 'react';
import { MyContext } from './Layout';

import Test1Child1 from './Test1Child1';

function Test1() {
    // Once you uncomment next line, the test1 component will be re-rendered due to the context update.
    // const context = useContext(MyContext);
    console.log('test1 rendered');
    return (
        <>
            <div>&lt;Test1 /&gt;</div>
            <Test1Child1 />
        </>
    );
}

export default memo(Test1);
