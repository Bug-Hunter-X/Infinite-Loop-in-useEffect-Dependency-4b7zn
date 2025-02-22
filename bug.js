```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the state is updated within the useEffect
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```