export default function CodeComponent({ code = '' }) {
  return (
    <>
      <div>{code}</div>
      <style jsx>{`
        div {
          background-color: #111;
          border-radius: 0.5em;
          color: #fff;
          margin-bottom: 1.5em;
          padding: 0.5em 0.75em;
        }
      `}</style>
    </>
  );
}
