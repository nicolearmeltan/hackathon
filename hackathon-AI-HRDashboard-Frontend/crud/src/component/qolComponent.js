import React, { Component } from "react";
import Radar from "react-d3-radar";
import { connect } from "react-redux";
import Loader from "../component/helpers/Loader";
import { getQOL } from "../action/qol";

const mapStateToProps = (state, ownProps) => {
  return {
    qualities: state.quality.qualities
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getQol: () => {
      dispatch(getQOL());
    }
  };
};

class QualityComponent extends Component {
  componentDidMount() {
    this.props.getQol();
  }

  render() {
    var obj = {
      "Safety Index": this.props.qualities.SafetyIndex,
      "Health Care Index": this.props.qualities.HealthCareIndex,
      "Cost Of Living": this.props.qualities.CostOfLiving,
      "Purchasing Power Index": this.props.qualities.PurchasingPowerIndex,
      "Traffic Commute Time Index": this.props.qualities.TrafficCommuteTimeIndex,
      "Climate Index": this.props.qualities.ClimateIndex
    }
    return (
      <div>
        {this.props.qualities ? (
          <Radar
            width={300}
            height={300}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={point => {
              if (point) {
                console.log("hovered over a data point");
              } else {
                console.log("not over anything");
              }
            }}
            data={{
              variables: [
                { key: "Safety Index", label: "Safety Index" },
                { key: "Health Care Index", label: "Health Care Index" },
                { key: "Cost Of Living", label: "Cost Of Living" },
                {
                  key: "Purchasing Power Index",
                  label: "Purchasing Power Index"
                },
                {
                  key: "Traffic Commute Time Index",
                  label: "Traffic Commute Time Index"
                },
                { key: "Climate Index", label: "Climate Index" }
              ],
              sets: [
                {
                  key: "me",
                  label: "My Scores",
                  values: obj
                }
              ]
            }}
          />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QualityComponent);
