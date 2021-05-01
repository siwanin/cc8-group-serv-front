import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function CreateNovelPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Create Book</h1>
      <Container maxWidth="md">
        {/* <div className="topinfo-createnovel"> */}
        <Grid container direction="row" justify="space-between" alignItems="center">
          <img src="https://picsum.photos/200/300"></img>
          <Grid item xs={8}>
            <div className="namebook-createnovel" style={{ margin: "5%" }}>
              <p>name</p>
              <input placeholder="ใส่ชื่อเรื่อง" style={{ width: "100%", padding: "2%" }}></input>
            </div>
            <div className="typeof-createnovel">
              <div className="selectbox-createnovel">
                <p>หมวดหลัก</p>
                <select name="TypeOfBook" id="mainBook" className="select-createnovel">
                  <option value="novel">Novel</option>
                  <option value="Myth">Myth</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Drama">Drama</option>
                  <option value="History">History</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                </select>
              </div>
              <div className="selectbox-createnovel">
                <p>หมวดรอง</p>
                <select name="TypeOfBook" id="secondaryBook" className="select-createnovel">
                  <option value="novel">Novel</option>
                  <option value="Myth">Myth</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Drama">Drama</option>
                  <option value="History">History</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                </select>
              </div>
              <div className="selectbox-createnovel">
                <p>เซ็ตหนังสือ</p>

                <select name="BookSet" className="selectbox-createnovel" className="select-createnovel">
                  <option value="Myth">ไม่มีเซตหนังสือ</option>
                  <option value="novel">มีเซตหนังสือ</option>
                </select>
              </div>
            </div>
            <div>
              <p>คำโปรย</p>
              <textarea maxlength="50" style={{ width: "100%" }}></textarea>
            </div>
          </Grid>
        </Grid>
        <div style={{ marginTop: "2%", marginBottom: "2%" }}>
          <p>เรื่องย่อ</p>
          <textarea style={{ width: "100%", height: "100%", paddingBottom: "10%" }}></textarea>
        </div>
        <div style={{ paddingBottom: "10%" }}>
          <p>แท็ก</p>
          <input style={{ width: "100%" }} style={{ width: "100%", height: "100%", paddingBottom: "2%" }}></input>
        </div>
        <Grid container direction="row" justify="space-between" alignItems="center" style={{ paddingBottom: "5%" }}>
          <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
            Delete Book
          </Button>

          <div>
            <Button
              variant="contained"
              size="medium"
              color="blank"
              className={classes.margin}
              style={{ backgroundColor: "white", color: "grey" }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              className={classes.margin}
              style={{ backgroundColor: "#ffca28", color: "#fffff" }}
            >
              Save
            </Button>
          </div>
        </Grid>
        <hr></hr>
      </Container>
    </div>
  );
}

export default CreateNovelPage;
