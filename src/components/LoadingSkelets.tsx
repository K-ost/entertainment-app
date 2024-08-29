import Skelet from "../ui/Skelet";

type LoadingSkeletsProps = {
  number?: number;
  slider?: boolean;
};

const LoadingSkelets = (props: LoadingSkeletsProps): JSX.Element => {
  const { number = 16, slider } = props;

  return (
    <div>
      {slider ? (
        <Skelet margin={40} height={180} />
      ) : (
        <div
          className="grid grid-4 grid-tb-3 grid-mb-2"
          data-testid="loadingSkelets"
        >
          {[...Array(number)].map((__: null, index: number) => (
            <div key={index}>
              <Skelet height={140} margin={10} />
              <Skelet height={16} margin={10} short={140} />
              <Skelet height={20} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingSkelets;
