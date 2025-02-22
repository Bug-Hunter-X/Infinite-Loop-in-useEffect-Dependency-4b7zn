# React useEffect Infinite Loop Bug

This repository demonstrates a subtle bug in React that can lead to an infinite loop. The bug involves updating a state variable within the dependency array of a `useEffect` hook. This triggers an infinite re-render cycle.

## Bug Description

The `MyComponent` component uses `useState` to track a count. The `useEffect` hook is designed to increment the count, but because `count` is in the dependency array, the effect runs every time `count` changes, leading to a continuous update cycle.

## Solution

The solution involves removing `count` from the dependency array of `useEffect`. Alternatively, you could use the functional update form of `setCount` to prevent this infinite loop.