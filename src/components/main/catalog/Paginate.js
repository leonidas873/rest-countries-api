import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import { useSelector } from "react-redux";

const darkStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
        backgroundColor: '#2B3945',
        color:'white',
        
       }
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "#4a4780",
      color:'white'
    }
  }
}));

const lightStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
      '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
        backgroundColor: 'white',
        color:'#111517',
        
       }
    },
    "& .MuiButtonBase-root": {
      backgroundColor: "#b5b3e8",
      color:'#111517',
      marginTop:'15px'
    },
    '& .MuiPagination-ul ':{
      justifyContent:'center',
      margin:'20px'
    }
  }
}));

const Paginate = ({pages,onChangePage}) => {
  const darkMode = useSelector(state => state.darkMode);
  const classes = darkMode ? darkStyle() : lightStyle();
  const onPaginate = (event, value) => {
    onChangePage(value);
  };
  return (
    <div className={classes.root}>
      <Pagination
        count={pages}
        boundaryCount={1}

        variant="outlined"
        shape="rounded"
        onChange={onPaginate}
        
      />
    </div>
  );
};

export default Paginate;
