import { memo } from 'react';

function Test1Child1() {
    // Test1Child1 is a component with memo, even if the parent layer is re-rendered due to a context update, it will not be updated.
    console.log('Test1Child1 rendered');
    return <div>&lt;Test1Child1 /&gt;</div>;
}

export default memo(Test1Child1);
