# useEffect Cleanup Function Issue in React

This repository demonstrates a common issue with the `useEffect` hook's cleanup function in React. The example shows a scenario where the cleanup function doesn't behave as expected, potentially leading to memory leaks or unexpected side effects.

## Problem
The provided code implements a simple counter component using the `useState` and `useEffect` hooks.  The goal is for the `console.log` statement inside the cleanup function to execute when the component unmounts or when the effect re-runs. However, the current implementation may not behave as expected, depending on the specifics of the component's lifecycle and updates.

## Solution
The solution clarifies the execution timing and conditions under which the cleanup function in `useEffect` is called. It ensures that the log statements accurately reflect the component's lifecycle and address potential unexpected behavior.