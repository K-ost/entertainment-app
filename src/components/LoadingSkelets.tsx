import Skelet from "../ui/Skelet"

interface ILoadingSkelets {
  number?: number
  slider?: boolean
}

const LoadingSkelets: React.FC<ILoadingSkelets> = ({ number = 16, slider }) => {
  return (
    <div>
      {slider && <>
        <Skelet margin={30} height={40} short={400} />
        <Skelet margin={40} height={180} />
      </>}
      <Skelet margin={30} height={40} short={400} />
      <div className="grid grid-4 grid-tb-3 grid-mb-2">
        {[ ...Array(number) ].map((__: null, index: number) => <div key={index}>
          <Skelet height={140} margin={10} />
          <Skelet height={16} margin={10} short={140} />
          <Skelet height={20} />
        </div>)}
      </div>
    </div>
  )
}

export default LoadingSkelets
