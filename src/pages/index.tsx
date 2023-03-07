
export default function HomePage() {
  return (
    <div>
      <button onClick={() => {
        window.location.href = 'https://umijs.org/docs/guides/routes'
      }
      }>button</button>
    </div>
  );
}
