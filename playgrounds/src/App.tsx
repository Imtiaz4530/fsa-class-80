import { Button } from "@ds.e/react/lib";
import "@ds.e/scss/lib/Button.css";

const App = () => {
  return (
    <div>
      <h1>Hello Monorepo!</h1>
      <Button
        title="I am a cute little button!"
        onClick={() => alert("Hello Noob")}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
