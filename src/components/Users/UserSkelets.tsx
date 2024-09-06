import Skelet from "../../ui/Skelet";

const UserSkelets = (): JSX.Element => {
  return (
    <div data-testid="userlistLoading">
      {[...Array(3)].map((__, index) => (
        <Skelet key={index} height={72} margin={16} />
      ))}
    </div>
  );
};

export default UserSkelets;
