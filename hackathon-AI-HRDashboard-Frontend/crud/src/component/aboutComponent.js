import React, { Component } from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import { connect } from 'react-redux';
import Loader from "../component/helpers/Loader";
import { getAilments } from "../action/ailments";

const mapStateToProps = (state, ownProps) => {
  return {
    ailments: state.ailment.ailments
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAilments: () => {
      dispatch(getAilments())
    }
  }
}

Charts(FusionCharts);

var obj = {
  chart: {
    caption: "Ailments per Month",
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
  dataSource: obj,
};

{/* <ReactFC {...chartConfigs} />,
  document.getElementById('root'), */}
var myDataSource2 = {
  chart: {
    caption: "Top 3 Ailments",
    startingangle: "120",
    showlabels: "0",
    showlegend: "1",
    enablemultislicing: "0",
    slicingdistance: "15",
    showpercentvalues: "1",
    showpercentintooltip: "0",
    plottooltext: "Resource : $label Total count : $datavalue",
    theme: "ocean"
  },
  data: [
    {
      label: "Headache",
      value: "0"
    },
    {
      label: "Diarrhea",
      value: "0"
    },
    {
      label: "Colds",
      value: "0"
    }
  ]
}
var props_pie_chart =
  {
    id: "pie_chart",
    type: "pie3d",
    width: "60%",
    height: 400,
    dataFormat: "json",
    dataSource: myDataSource2
  };

class AboutComponent extends Component{

  componentDidMount() {
    this.props.getAilments();
  }

  render(){
    if(this.props.ailments){
      if(this.props.ailments.MonthlyAilmentReport){
        for (let index = 0; index < 12; index++) {
          obj.data[index].value = this.props.ailments.MonthlyAilmentReport[index].Ailment
          
        }
      }
      if(this.props.ailments.ranking){
        for (let index = 0; index < 3; index++) {
          myDataSource2.data[index].value = this.props.ailments.ranking[index].value
          
        }
      }
    }
    return(
      <div className="container">            <br />
      {this.props.ailments.MonthlyAilmentReport ? <ReactFC {...chartConfigs} /> : <Loader />}
      <br />
      {this.props.ailments.ranking ? <ReactFC {...props_pie_chart} /> : <Loader />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent)