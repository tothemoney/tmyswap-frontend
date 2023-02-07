import { ArrowForwardIcon, Button, ButtonProps } from '@tmyswap/uikit'

const NextStepButton: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  return <Button endIcon={<ArrowForwardIcon color="currentColor" />} {...props} />
}

export default NextStepButton
