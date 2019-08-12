import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import img from "./assets/images/backgndLogin.PNG";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper, Dialog, DialogTitle } from '@material-ui/core';

const styles =
{
  //backgroundImage: `url(${Background})`,
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '75px'
  },
  dialogTitle: { fontFamily: "Lato", color: "#565656", fontWeight: "bold", paddingLeft: 24, paddingTop: 10, paddingBottom: 10 },
  appBar: {
    position: 'absolute',
    marginLeft: 0,
    backgroundColor: '#fff'
  },
};



export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      UserName: "",
      Password: ""
    };
  }

  handleUserName = event => {
    console.log("{}{}{}{}{}{}{}")
    var usrName = event.target.value;
    this.setState({ UserName: usrName });
  }

  handlePassword = event => {
    console.log(this.state.UserName)
    var pass = event.target.value;
    this.setState({ Password: pass });
  }

  login = (index) => {
    if(this.state.UserName === "" || this.state.Password === ""){
      alert("please enter the require fields")
    } else {
      console.log("looging in")
      console.log(index)
      alert("You Are Not Authorized")
      window.location.reload()
    }
  }

  render() {
    return (
      <div> 
        {/* {<Dialog open={this.state.loggedIn} onClose={this.setState({ loggedIn: false })}
        aria-describedby="dialog-description">
        <DialogTitle className={styles.dialogTitle}>
          <Typography style={{ marginLeft: "5px", color: "#e3773c", fontFamily: "Lato", fontSize: 20 }}>
            UnAuthorized
</Typography>
        </DialogTitle>
      </Dialog>} */}
        <Container maxWidth="md">
          <CardMedia 
            // className={styles.media}
            image={require("./assets/images/backTheme.png")}
            title="Contemplative Reptile"
            style={styles.media}
          />
          <Grid container direction="column" style={{ marginTop: "-190px",marginLeft:"40px" }}>
            <Typography style={{ marginTop: "-35px", marginLeft: "120px", fontWeight: "bold", color: "#fff" }} >Member Access</Typography>
            <Typography style={{ marginTop: "0px", marginLeft: "120px", color: "#fff", fontSize: "9pt",fontWeight: "bold" }}>UserName</Typography>
            <TextField
              style={{ marginLeft: "120px", background: "#fff", position: "fixed" }}
              id="outlined-bare"
              onChange={this.handleUserName}
              margin="normal"
              inputProps={{ 'aria-label': 'bare' }}
            />
            <Typography style={{ marginTop: "50px", marginLeft: "120px", color: "#fff", fontSize: "9pt",fontWeight: "bold" }}>Password</Typography>
            <TextField
              style={{ marginLeft: "120px", marginTop: "80px", background: "#fff", position: "fixed" }}
              id="outlined-bare"
              margin="normal"
              onChange={this.handlePassword}
              inputProps={{ 'aria-label': 'bare' }}
            />
            <Typography onClick={() => this.login(20)} style={{ width: "200px", background: "#4169e1", marginTop: "50px", marginLeft: "120px", color: "#fff", fontSize: "9pt" }}><Button >Login</Button></Typography>
            <Button style={{ marginTop: "50px", color: "#fff", fontSize: "9pt" }}>Login</Button>
          </Grid>
        </Container>

      </div>
    )
  }
}

export default Home;
