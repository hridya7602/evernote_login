import Image from "next/image";
import styles from "./page.module.css";
import { Button, TextField, Checkbox, FormControlLabel, Typography, Box, Container, Divider } from '@mui/material';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';


const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
    <Box
  sx={{
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: '600px', // Adjust the height as needed
    width: '120%', // Adjust the width as needed, or set a specific width like '500px'
  }}
>
 <img src="/evernote.svg" alt="Evernote Logo" style={{ width: '10%' }} />
 <img src="/newwwwwww.svg" alt="Evernote Logo" style={{ width: '50%' }} />
 <Typography variant="subtitle1" sx={{ color: 'black', fontSize: '1rem', marginBottom: '16px' }}>
  Remember everything important.
</Typography>

        <Box sx={{ mt: 1 }}>
        <Box
  sx={{
    display: 'flex',
    justifyContent: 'center', // Center items horizontally
    alignItems: 'center', // Center items vertically, if needed
    width: '100%', // Ensure the Box takes full width, adjust as necessary
  }}
>
        <Button
  variant="outlined"
  sx={{
    borderColor: 'gray',
    color: 'black',
    backgroundColor: 'transparent',
    textTransform: 'none',
    width: '300px', // Set a fixed width, adjust as needed
    padding: '8px 16px', // Adjust padding for better size control
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    mb: 2,
  }}
  startIcon={<GoogleIcon />}
>
  Continue with Google
</Button>
</Box>
<Box
 sx={{
  display: 'flex',
  justifyContent: 'center', // Center items horizontally
  alignItems: 'center', // Center items vertically, if needed
  width: '100%', // Ensure the Box takes full width, adjust as necessary
}}
>
  <Button
    variant="outlined"
    sx={{
      borderColor: 'gray',
      color: 'black',
      backgroundColor: 'transparent',
      textTransform: 'none',
      width: '300px', // Set a fixed width, adjust as needed
      padding: '8px 16px', // Adjust padding for better size control
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
      },
      mb: 2,
    }}
    startIcon={<AppleIcon />}
  >
    Continue with Apple
  </Button>
</Box>

<Divider
  sx={{
    width: '300px', // Set the width to 300px
    margin: '0 auto', // Center the Divider horizontally
    my: 1, // Adjust vertical margin as needed
  }}
>
  or
</Divider>
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center items horizontally
    justifyContent: 'center', // Center items vertically
    height: '17vh', // Example height, adjust as necessary
    width: '100%', // Ensure the Box takes full width
  }}
>
  <TextField
    variant="outlined"
    margin="normal"
    required
    id="email"
    label="Email Address or Username "
    name="email"
    autoComplete="email"
    autoFocus
    sx={{ width: '300px', mb: 2 }} // Set width to 300px and add bottom margin
  />

  <Button
    variant="contained"
    color="success"
    sx={{ mt: 2, width: '300px' }} // Set width to 300px and add top margin
  >
    Continue
  </Button>
</Box>

  
<Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10vh', // Example height, adjust as necessary
  }}
>
  <FormControlLabel
    control={
      <Checkbox
        value="remember"
        sx={{
          color: 'gray', // Set checkbox color to gray
          '&.Mui-checked': {
            color: 'gray', // Set checkbox color when checked
          },
        }}
      />
    }
    label="Remember me for 30 days"
    sx={{
      '& .MuiTypography-root': {
        fontSize: '0.75rem', // Adjust text size to smaller size
        color: 'gray', // Set text color to gray
      },
    }}
  />
</Box>

<Box mt={2}>
  <Typography variant="body2" align="center" sx={{ color: 'gray' }}>
    Don't have an account?
  </Typography>
  <Typography variant="body2" align="center" sx={{ color: 'green', textDecoration: 'none' }}>
    <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Create account</a>
  </Typography>
</Box>

        </Box>
      
    </Box>
    </Container>
    
  );
}
export default Login;
