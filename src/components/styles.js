import { red, green } from '@material-ui/core/colors'
const drawerWidth = 240;


export const appBarStyles = theme => ({
    root: {
      flexGrow: 1,
      
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
      textAlignment : "left"
    },
    static: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      }),
    },
    rotate: {
      transform: 'rotate(360deg)',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    }
  });

  export const gameStyles = theme => ({
    card: {
      maxWidth: 645,
      minWidth: 145,
      width: "100%",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
    dialog: {
      width: 345
    },
    content: {
      display : "flex",
      flexDirection : "row",
      justifyContent: "center",
      margin : 100,
      alignItems: "center",
      width : "100%"
    },
    game: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center "
    },
    textField: {
        width: "100%"
    },
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    answer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      maxWidth: 645,
      minWidth: 145,
    },
    questionsIndex:{
      display: "flex",
      flexDirection : "row"
    }  
  });

  export const scoreStyles = theme => ({
    scoreRoot: {
      margin: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      width: "100%",
      padding :theme.spacing(3, 2),
      maxWidth: 845,
      justifyContent: "center",
      marginBottom : 50
    },
    gif:{
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    textRed : {
      backgroundColor: red[500],
      color: "white"
    },
    textGreen : {
      backgroundColor: green[500],
      color: "white"
    },
    expPanel:{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      maxWidth: 845,
      padding : "0px 16px",
      justifyContent: "center"
    },
    groupAnswers:{
      margin: 10
    }
  });

  export const drawerStyles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1 ,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      }
  });

  export const homeStyles = theme => ({
    homeRoot: {
      margin: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      width: "100%",
      padding :theme.spacing(3, 2),
      maxWidth: 845,
      justifyContent: "center",
      marginBottom : 50
    },
    gif:{
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    }
  });

  export const errorStyles = homeStyles;

  export const authorStyles = theme => ({
    homeRoot: {
      margin: 100,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    header: {
      display : "flex",
      flexDirection: "row",
      alignItems : "center"
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      width: "100%",
      padding :theme.spacing(3, 2),
      maxWidth: 845,
      justifyContent: "center",
      marginBottom : 50
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    avatar: {
      margin: 10,
    },
    bigAvatar:{
      margin: 10,
      width: 180,
      height: 180,
    },
    expPanel:{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      maxWidth: 845,
      padding : "0px 16px",
      justifyContent: "center"
    },
    paperButtons: {
      display: "flex",
      flexDirection: "column",
      minWidth: 345,
      width: "100%",
      maxWidth: 845,
      justifyContent: "center"
    },
    button: {
      margin: theme.spacing(1),
    }
  });