export default function Button({ text, onclick, styleClass, keepQuotes }) {
  return (
    <button onclick={onclick} class={styleClass} data-keep-quotes={keepQuotes}>
      {text}
    </button>
  );
}
