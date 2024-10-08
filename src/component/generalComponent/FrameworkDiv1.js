import React, { Component } from "react";
import BarChart from "../EmploymentDomain/Chart/BarChart";
import PieChart from "../EmploymentDomain/Chart/PieChart";
import { XCOLOR4 } from "../EmploymentDomain/colors.style";
import { LargeBarGraph, GeneralHeaders, COLORS } from "../styles/app.styles";
import { GeneralDiv } from "../styles/education.styles";
export default class FrameworkDiv1 extends Component {
  render() {
    let {  label2,  XCOLOR, YCOLOR, BCOLOR } = this.props;

    return (
      <div>
        <LargeBarGraph
          style={{
            marginTop: "80px",
            background: "inherit",
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
            minHeight: "600px",
            height: "auto",

            justifyContent: "space-between",
          }}
          className="pieHolder"
        >
          <GeneralDiv
            width={"40%"}
            padding={"2%"}
            radius={"20px"}
            className="divLeft"
            style={{ marginBottom: "80px" }}
          >
            <GeneralHeaders>{this.props.title1}</GeneralHeaders>
            <PieChart
              data={this.props.pieData}
              labels={label2}
              XCOLOR={XCOLOR4}
            ></PieChart>
          </GeneralDiv>
          <GeneralDiv
            style={{
              display: "flex",
              flexDirection: "column",
              height: "500px",
              padding: "0%",
              background: "inherit",
              boxShadow: "none",
            }}
            width={"50%"}
            className="divLeft"
          >
            <GeneralDiv
              width={"100%"}
              padding={"2%"}
              radius={"0px"}
              style={{
                height: "180px",
                display: "flex",
                flexDirection: "column",
                background: "inherit",
              }}
            >
              <GeneralDiv
                style={{
                  height: "100%",
                  background: "inherit",
                  boxShadow: "none",
                  color: COLORS.color5,
                }}
                padding={"1%"}
              >
                {this.props.pieContent}
              </GeneralDiv>
            </GeneralDiv>
            <GeneralDiv
              width={"100%"}
              padding={"5%"}
              style={{ background: "inherit", marginTop: "15px" }}
            >
              <GeneralHeaders>{this.props.title2}</GeneralHeaders>
              <BarChart
                labels={this.props.label1}
                data={this.props.data21}
                XCOLOR={XCOLOR}
                YCOLOR={YCOLOR}
                BCOLOR={BCOLOR}
                YDIVISION={this.props.label22}
                ht={250}
              ></BarChart>
            </GeneralDiv>
          </GeneralDiv>
        </LargeBarGraph>
      </div>
    );
  }
}
