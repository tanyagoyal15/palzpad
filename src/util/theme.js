export default {
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#9B59B6',
      dark: '#69377E',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true
  },
  form: {    
    // marginTop : '15%',
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    textAlign : 'center'
  },
  image: {
    margin: '20px auto 20px auto'
  },
  pageTitle: {
    margin: '10px auto 10px auto',
    fontSize : '50px',
    fontWeight : '450'
  },
  textField: {
    margin: '10px auto 10px auto'
  },
  button: {
    marginTop: 20,
    position: 'relative'
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: 10
  },
  progress: {
    position: 'absolute'
  },
  invisibleSeparator: {
    border: 'none',
    margin: 4
  },
  visibleSeparator: {
    width: '100%',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    marginBottom: 20
  },
  paper: {
    padding: 20
  },
  profile: {
    '& .image-wrapper': {
      // marginTop: '45px',
      textAlign: 'center',
      position: 'relative',
      '& button': {
        padding : '10px',
        // textAlign : 'center'
        position: 'absolute',
        top: '95%',
        left: '40%'
      }
    },
    '& .profile-image': {
      width: 200,
      height: 200,
      objectFit: 'cover',
      maxWidth: '100%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      marginLeft : '3%',
      // textAlign: 'center',/
      '& span, svg': {
        verticalAlign: 'middle'
      },
      '& a': {
        color: '#00bcd4'
      }
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px 0'
    },
    '& svg.button': {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  buttons: {
    textAlign: 'center',
    '& a': {
      margin: '20px 10px'
    }
  }
};
