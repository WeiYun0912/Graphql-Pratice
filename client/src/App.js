import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Display from "./Display";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Display />
      </div>
    </ApolloProvider>
  );
}

export default App;
