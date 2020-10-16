import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import CreateNewTaskForm from './components/create-new-task-form';

const useStyles = makeStyles({
  root: {
    padding: '70px 10px 0 10px',
  },
});

const CreateNewTaskPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} item xs={12}>
      <CreateNewTaskForm />
    </Grid>
  );
};

export default CreateNewTaskPage;
