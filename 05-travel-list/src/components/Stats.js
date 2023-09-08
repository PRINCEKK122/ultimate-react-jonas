export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.</em>
      </p>
    );

  const numLength = items.length;
  const packedItemsLength = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItemsLength / numLength) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everythihng! Ready to go!"
          : `💼 You have ${numLength} items on your list, and you already packed ${packedItemsLength} (${percentage}%)`}
      </em>
    </footer>
  );
}
