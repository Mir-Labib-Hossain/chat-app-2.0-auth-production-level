import { useAppDispatch } from "../app/hooks";
import RecipeReviewCard from "../components/Card";
import { changeTheme } from "../features/themeSlice";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleTheme = () => {
    dispatch(changeTheme());
  };
  return (
    <>
      <div>Home</div>
      <button onClick={handleTheme}>Update Theme</button>
      <RecipeReviewCard />
    </>
  );
};

export default Home;
