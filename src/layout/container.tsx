export const Container: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen">
      <div className="w-full sm:max-w-3xl mx-auto p-4">{children}</div>
    </div>
  );
};
