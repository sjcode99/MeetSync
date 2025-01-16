export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-center pt-20">{children}</div>;
}
