import { Button } from '@mui/material';
// import css from './LoadMoreBtn.module.css';

interface onClickProps {
  onClick: () => void;
}

export const LoadMoreBtn: React.FC<onClickProps> = ({ onClick }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      Load more
    </Button>
    // <button className={css.btn} type="button" onClick={onClick}>
    //   Load more
    // </button>
  );
};

export default LoadMoreBtn;
