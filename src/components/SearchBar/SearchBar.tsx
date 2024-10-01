// import toast, { Toaster } from 'react-hot-toast';
// import css from './SearchBar.module.css';
// import { VscEdit } from 'react-icons/vsc';
// import { useState } from 'react';

// interface onSubmitProps {
//   onSubmit: (searchQuery: string) => void;
// }

// const SearchBar: React.FC<onSubmitProps> = ({ onSubmit }) => {
//   const [value, setValue] = useState<string>('');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
//     setValue(event.target.value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
//     event.preventDefault();
//     if (value.trim() === '') {
//       toast('Please enter the query word', {
//         icon: <VscEdit style={{ color: 'red' }} />,
//       });
//       return;
//     }
//     onSubmit(value.trim());
//     setValue('');
//   };

//   return (
//     <header>
//       <Toaster position="top-right" />
//       <form className={css.form} onSubmit={handleSubmit}>
//         <input
//           className={css.input}
//           type="text"
//           name="query"
//           value={value}
//           onChange={handleChange}
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//         <button className={css.btn} type="submit">
//           Search
//         </button>
//       </form>
//     </header>
//   );
// };

// export default SearchBar;

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import toast, { Toaster } from 'react-hot-toast';
import { VscEdit } from 'react-icons/vsc';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface SearchAppBarProps {
  onSubmit: (searchQuery: string) => void;
}

export default function SearchAppBar({ onSubmit }: SearchAppBarProps) {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (value.trim() === '') {
      toast('Please enter the query word', {
        icon: <VscEdit style={{ color: 'red' }} />,
      });
      return;
    }
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toaster position="top-right" />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          ></IconButton>
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={value}
                onChange={handleChange}
              />
            </Search>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                ml: 2,
                '&:hover': {
                  backgroundColor: 'darkblue',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                },
              }}
            >
              Search
            </Button>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
