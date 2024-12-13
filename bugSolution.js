```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let effectActive = true; // Flag to track whether the effect is still active
    console.log('Effect runs!');

    return () => {
      effectActive = false; // Set the flag to false before cleanup
      console.log('Cleanup function runs!');
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```