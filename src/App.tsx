import { useAppDispatch } from "./app/hooks";
import RecipeReviewCard from "./components/card";
import { changeTheme } from "./features/themeSlice";

function App() {
  const dispatch = useAppDispatch();
  const handleTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <>
      <button onClick={handleTheme}>Update Theme</button>
      <RecipeReviewCard />
    </>
  );
}

export default App;
