import Sidebar from "./component/Sidebar";
import Center from "./component/Center";
function App() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center/>
      </main>
      <div>
        {/* player */}
      </div>
    </div>
  );
}

export default App;
