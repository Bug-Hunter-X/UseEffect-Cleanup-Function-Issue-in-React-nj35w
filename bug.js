```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs on every render, including the initial render
    console.log('Effect runs!');
    return () => {
      // Cleanup function: this runs when the component unmounts
      // or when the effect runs again (on subsequent renders)
      console.log('Cleanup function runs!');
    };
  }, []); // The empty dependency array means the effect only runs once

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```