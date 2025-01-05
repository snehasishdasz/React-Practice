import React, { useMemo } from 'react';

const Usememo = () => {
    const sum = () => {
        console.log('sum function is running');
        let total = 0;
        for (let i = 1; i <= 1000; i++) {
            total += i;
        }
        return total;
    };

    const total = useMemo(sum, []);
    //useMemo is basically used to stop re-rendering the components
    //in usememo it memorize the result/value , in usememo we save the function rerun.
    //it takes two parameters, first one is the function which we want to run and second one is the dependencies
    //if dependencies are empty then it will run only once
    //In the case of  props ,useMemo is used to check the reference if the parent component props is changed then it match the reference with child components , that time it will render the component , usememo is not gonna work here. useCallback is helpful here.
    
    //reactMemo rerender tabhi hoga jab props changes honge , warna nahi honge



    return (
        <div>
            <h1>Sum is: {total}</h1>
        </div>
    );
};

export default Usememo;