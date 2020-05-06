export default function Avatar({ name }) {
  return (
    <div className="flex items-center">
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
