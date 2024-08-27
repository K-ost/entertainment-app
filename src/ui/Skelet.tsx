import { Skeleton } from "@mui/material"

interface ISkelet {
  height?: number
  margin?: number
  short?: number
}

const Skelet: React.FC<ISkelet> = ({ height = 30, margin = 0, short }) => {
  return (
    <Skeleton
      variant="rounded"
      height={height}
      sx={{
        bgcolor: 'rgba(255,255,255,0.1)',
        mb: `${margin}px`,
        maxWidth: short ? `${short}px` : 'none',
        borderRadius: '8px'
      }}
    />
  )
}

export default Skelet
