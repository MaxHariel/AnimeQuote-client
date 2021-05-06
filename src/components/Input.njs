export default function Input({ searchInput, onclick }) {
  return (
    <>
      <input
        bind={searchInput}
        value={searchInput}
        type="text"
        placeholder="Ex: Goku ou Dragon Ball..."
        class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-purple-500 outline-none w-full pr-10"
      />
      <span
        onclick={onclick}
        data-page={1}
        class="text-center cursor-pointer text-white bg-purple-500 z-10 h-full leading-snug absolute rounded w-12 right-0 pt-3 hover:bg-purple-600"
      >
        <i class="fas fa-search fa-lg"></i>
      </span>
    </>
  );
}
