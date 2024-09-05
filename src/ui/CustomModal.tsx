import { Box, BoxProps, Modal, styled, Typography } from "@mui/material";

type CustomModalProps = {
  children: React.ReactNode;
  close: () => void;
  show: boolean;
  title: string;
};

const ModalBody = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(2),
  color: theme.palette.common.white,
  padding: theme.spacing(3),
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "100%",
}));

const CustomModal = (props: CustomModalProps): JSX.Element => {
  const { children, close, show, title } = props;

  return (
    <Modal
      open={show}
      onClose={close}
      sx={{
        backgroundColor: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(5px)",
      }}
    >
      <ModalBody>
        <Typography variant="h2" sx={{ marginBottom: "20px" }}>
          {title}
        </Typography>
        {children}
      </ModalBody>
    </Modal>
  );
};

export default CustomModal;
