import Nullstack from "nullstack";
import "./Home.scss";
import Button from "./components/Button.njs";
import Card from "./components/Card.njs";

class Home extends Nullstack {
  searchInput = "";
  quotes = [];
  nextPage = "";
  prepare({ project, page }) {
    page.title = `Home`;
    page.description = `${project.name} foi feito com Nullstack ヽ(^◇^*)/`;
  }

  async initiate() {
    let quotes = [];
    this.nextPage = "";
    const quote = await this.randomQuote();
    quotes.push(quote);
    this.quotes = [...quotes];
  }

  static async randomQuote({ settings }) {
    try {
      const response = await fetch(`${settings.apiHost}/quote/random`, {
        method: "GET",
      });
      const fetchedData = await response.json();
      return fetchedData.quote;
    } catch (error) {
      console.log(error);
    }
  }

  async getQuotes({ settings, data }) {
    try {
      const response = await fetch(
        `${settings.apiHost}/quote?search=${this.searchInput}&page=${
          data.firstPage || this.nextPage
        }`,
        {
          method: "GET",
        }
      );
      const query = await response.json();
      if (!data.keepQuotes) {
        this.quotes = [];
      }
      this.quotes.push(...query.docs);
      this.nextPage = query.nextPage;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div class="container flex flex-col home" style="min-width: 100%;">
        <div class="self-center text-4xl font-semibold pt-3">
          Citações de Anime
        </div>
        <div class="self-center text-1xl font-medium pt-3">
          Busque por frases icônicas de personagens
        </div>
        <div class="self-center w-6/12 relative flex my-3">
          <input
            bind={this.searchInput}
            value={this.searchInput}
            type="text"
            placeholder="Ex: Goku ou Dragon Ball..."
            class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-purple-500 outline-none w-full pr-10"
          />
          <span
            onclick={this.getQuotes}
            data-first-page={1}
            class="text-center cursor-pointer text-white bg-purple-500 z-10 h-full leading-snug absolute rounded w-12 right-0 pt-3 hover:bg-purple-600"
          >
            <i class="fas fa-search fa-lg"></i>
          </span>
        </div>
        <Button
          text="Citação aleatória"
          onclick={this.initiate}
          styleClass="self-center bg-purple-500 text-white rounded hover:bg-purple-600 p-2"
        />
        <div class="self-center w-6/12  mt-5">
          {this.quotes.map((quote) => (
            <Card quote={quote} />
          ))}
        </div>
        {this.nextPage && (
          <Button
            onclick={this.getQuotes}
            text="Ver mais"
            styleClass="self-center bg-purple-500 text-white rounded hover:bg-purple-600 p-2"
            keepQuotes={true}
          />
        )}
      </div>
    );
  }
}

export default Home;
