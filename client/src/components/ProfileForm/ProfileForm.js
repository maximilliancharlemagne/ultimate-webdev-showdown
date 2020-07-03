// import React from 'react'
import React from "react";
import { Link } from "react-router-dom";

//import axios
import axios from 'axios'

//import CSS
import './ProfileForm.css'

//import MUI core components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        avatar: "",
      },
      handleInputChange: (event) => {
        let newValue = event.target.value;
        this.setState({
          user: {
            ...this.state.user,
            [event.target.name]: newValue,
          },
        });
      },
      handleUpdateUser: () => {
        let currentJWT = localStorage.getItem("JWT");
        axios.put("/api/users/updateAvatar", {newLink: this.state.user.avatar},{
          headers: { Authorization: `Bearer ${currentJWT}` },
        });
      },
      handleDeleteUser: () => {
        let currentJWT = localStorage.getItem('JWT')
        axios.delete("/api/users/deleteUser", {
          headers: { Authorization: `Bearer ${currentJWT}` },
        }).then(() => {
          localStorage.removeItem("JWT");
          window.location = "/";
        }
        );
      },
    };
  }

  render() {
    return (
      <div className="root">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Paper className="paper">
            <form>
              <Grid item>
                <Avatar
                  alt="Avatar"
                  src={this.state.user.avatar}
                  className="avatar"
                />
              </Grid>
              <br />
              <Grid item>
                <TextField
                  name="avatar"
                  id="avatar"
                  label="Paste Avatar Link"
                  type="url"
                  autoComplete="Paste Avatar URL"
                  value={this.state.user.userAvatarImageLink}
                  onChange={this.state.handleInputChange}
                />
              </Grid>
              <br />
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick = {this.state.handleUpdateUser}
                >
                  Change Avatar
                </Button>
              </Grid>
              <br />
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.state.handleDeleteUser}
                >
                  Delete Profile
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default ProfileForm;
