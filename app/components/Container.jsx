export default function Container({ children, className }) {
  return (
    <div
      className={`xl:max-w-[1170px] mx-auto w-full ${
        className ? className : null
      }`}
    >
      {children}
    </div>
  );
}
