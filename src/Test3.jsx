import { memo } from 'react';

function Test3() {
    // test3 is a component with memo
    console.log('test3 rendered');
    return <div>&lt;Test3 /&gt;</div>;
}

export default memo(Test3);
