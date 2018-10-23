import React, { Component } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import { connect } from "react-redux";
import Loader from "../component/helpers/Loader";
import { getTotalLeaves } from "../action/leaves";

const mapStateToProps = (state, ownProps) => {
  return {
    leaves: state.home.leaves
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    totalLeaves: () => dispatch(getTotalLeaves())
  };
};

Charts(FusionCharts);

var obj = {
  chart: {
    caption: "Total Sick Leaves per Month",
    theme: "candy"
  },
  data: [
    {
      label: "January",
      value: "0"
    },
    {
      label: "February",
      value: "0"
    },
    {
      label: "March",
      value: "0"
    },
    {
      label: "April",
      value: "0"
    },
    {
      label: "May",
      value: "0"
    },
    {
      label: "June",
      value: "0"
    },
    {
      label: "July",
      value: "0"
    },
    {
      label: "August",
      value: "0"
    },
    {
      label: "September",
      value: "0"
    },
    {
      label: "October",
      value: "0"
    },
    {
      label: "November",
      value: "0"
    },
    {
      label: "December",
      value: "0"
    }
  ]
};

const chartConfigs = {
  type: "column2d",
  width: 800,
  height: 400,
  dataFormat: "json",
  dataSource: obj
};

class HomeComponent extends Component {
  componentDidMount() {
    this.props.totalLeaves()
  }

  render() {
    if(this.props.leaves) {
      if(this.props.leaves[0]){
        for (let index = 0; index < 12; index++) {
          obj.data[index].value = this.props.leaves[index].totalLeaves
          
        }
      }
    }

    return (
      <div className="container">
        <br />
        {this.props.leaves ? <ReactFC {...chartConfigs} /> : <Loader />}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
