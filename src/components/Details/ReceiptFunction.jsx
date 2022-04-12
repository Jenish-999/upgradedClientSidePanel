import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Styled from "styled-components";
import { getMaintenanceFunction } from "../../redux/maintenanceReducer/action";

class ReceiptFunction extends React.PureComponent {
  render() {
    const { maintenanceData } = this.props;
    const { fullName } = this.props;
    // const maintenanceData = useSelector(
    //   (state) => state.maintenance.maintenanceStorage
    // );
    // const dispatch = useDispatch();
    // useEffect(() => {
    //   dispatch(getMaintenanceFunction(id));
    // }, []);

    // console.log("Receipt Fnction : ", maintenanceData);

    return (
      <>
        <MainPrintContainer>
          <div className="invoice-box">
            <div className="container">
              <div className="row">
                <div className="equalHWrap eqWrap top">
                  <div className="equalHW eq center logo-block">
                    <a href>
                      <img
                        src="/assets/images/homeLogo.png"
                        style={{ width: "100%", maxWidth: 55 }}
                      />
                    </a>
                  </div>
                  <div className="equalHW eq contact-info-block">
                    <span id="AccountEmail">digitalsocietylux@gmail.com</span>
                    <br />
                    <span id="AccountPhone">047 226 47 280</span>
                  </div>
                  <div className="equalHW eq title-block">
                    <h2
                      className="right no-padding"
                      id="InvoiceSumExVat"
                      style={{ margin: 0 }}
                    >
                      DIGITAL SOCIETY
                    </h2>
                  </div>
                </div>
                <div className="row" style={{ marginTop: 20 }}>
                  <div className="equalHWrap eqWrap nomargin-nopadding to-block">
                    <div className="equalHW eq nomargin-nopadding title">
                      Member
                    </div>
                    <div className="equalHW eq nomargin-nopadding title from-block">
                      Address
                    </div>
                  </div>
                  <div className="row">
                    <div className="equalHWrap eqWrap">
                      <div className="equalHW eq infoblock to-block">
                        <span id="CustomerName">{fullName}</span>
                      </div>
                      <div className="equalHW eq infoblock from-block">
                        <span id="AccountName">
                          Chhaprabhatha Rd, Chapprabhatta, variyav, Surat,
                          Gujarat 394520
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table ">
                      <thead>
                        <tr className="titles">
                          <th>No</th>
                          <th>Maintenance Amount</th>
                          <th>Paid</th>
                          <th>Due</th>
                          <th>Penalty</th>
                          <th>Annual</th>
                        </tr>
                      </thead>
                      <tbody>
                        {maintenanceData &&
                          Object.keys(maintenanceData).map((id, indx) => {
                            return (
                              <tr className="item" id="ProductList" keys={id}>
                                <td id="Product">
                                  <span id="ProuductName">
                                    {indx + 1}
                                    <span />
                                  </span>
                                </td>
                                <td>
                                  <span id="ProductUnit">
                                    {maintenanceData[id].currentDate}
                                    <span />
                                  </span>
                                </td>
                                <td>
                                  <span id="ProductUnitPrice">
                                    {maintenanceData[id].dueDate}
                                  </span>
                                </td>
                                <td>
                                  <span id="ProductNumUnits">
                                    {maintenanceData[id].amount}/-
                                    <span />
                                  </span>
                                </td>

                                <td>
                                  <span id="ProductDiscount">
                                    {maintenanceData[id].panelty}/-
                                  </span>
                                </td>
                                <td>
                                  <span id="ProductTax">
                                    {maintenanceData[id].annualAmt}/-
                                  </span>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row  justify-content-end">
                  <div className="col-md-4">
                    <img
                      src="/assets/images/digitalsocietystamp.png"
                      alt=""
                      className=""
                      style={{ height: "200px", width: "200px" }}
                    />
                  </div>
                  <div className="center">
                    <a
                      href="https://sequra.no"
                      style={{ textDecoration: "none" }}
                    >
                      Digital Society Pvt.Ltd
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MainPrintContainer>
      </>
    );
  }
}

const MainPrintContainer = Styled.div`
h1 {
	font-size: 2.5rem;
  }
  h2 {
	font-size: 2rem;
  }
  h3 {
	font-size: 1.375rem;
  }
  h4 {
	font-size: 1.125rem;
  }
  h5 {
	font-size: 1rem;
  }
  h6 {
	font-size: 0.875rem;
  }
  p {
	font-size: 1.125rem;
	font-weight: 200;
	line-height: 1.8;
  }
  .font-light {
	font-weight: 300;
  }
  .font-regular {
	font-weight: 400;
  }
  .font-heavy {
	font-weight: 700;
  }
  /* POSITIONING */
  
  .left {
	text-align: left;
  }
  .right {
	float: right;
	text-align: right;
  }
  .center {
	text-align: center;
	margin-left: auto;
	margin-right: auto;
  }
  .justify {
	text-align: justify;
  }
  /** standard padding**/
  
  .no-padding {
	padding: 0px;
  }
  .standard-padding {
	padding: 20px;
  }
  .standard-padding-right {
	padding-right: 20px;
  }
  .standard-padding-left {
	padding-left: 20px;
  }
  .standard-padding-right {
	padding-left: 20px;
  }
  .standard-padding-top {
	padding-top: 20px;
  }
  .standard-padding-bottom {
	padding-bottom: 20px;
  }
  .container {
	width: 100%;
	margin-left: auto;
	margin-right: auto;
  }
  .row {
	position: relative;
	width: 100%;
  }
  .row [class^="col"] {
	float: left;
	margin: 0.5rem 2%;
	min-height: 0.125rem;
  }
  .row::after {
	content: "";
	display: table;
	clear: both;
  }
  .hidden-sm {
	display: none;
  }
  .invoice-box {
	background: #ffffff;
	max-width: 900px;
	margin: 60px auto;
	padding: 30px;
	border: 1px solid #002336;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	font-size: 16px;
	line-height: 24px;
	color: #002336;
  }
  .title {
	margin-bottom: 0px;
	padding-bottom: 0px;
	margin-left: 10px;
	margin-right: 10px;
	font-weight: bold;
	border-bottom: 1px solid #8B8B8B;
	margin-bottom: 4px;
  }
  .infoblock {
	margin-left: 10px;
	margin-right: 10px;
	margin-top: 0px;
	padding-top: 0px;
  }
  .titles {
	padding-top: 4px;
	margin-top: 20px;
	background: #DCDCDC;
	font-weight: bold;
  }
  @media only screen and (max-width: 600px) {
    .invoice-box{
        padding: 0;

            .container{
                text-align: center;
                align-items: center;
                justify-content: center;
            }
    }
   
   
    @media print {
      .invoice-box{
          background: #000;
      }
   }


	.invoice-box table tr.top table td {
	  width: 100%;
	  display: block;
	  text-align: center;
	}
	.invoice-box table tr.information table td {
	  width: 100%;
	  display: block;
	  text-align: center;
	}
    .eqWrap {
        display: flex;
        flex-direction: column;  
        padding: 0;
        align-items:center; 

    }
  }
  /** RTL **/
  
  .rtl {
	direction: rtl;
	font-family: "Lato", Tahoma, "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
  }
  .rtl table {
	text-align: right;
  }
  .rtl table tr td:nth-child(2) {
	text-align: left;
  }
  .eqWrap {
	display: flex;
  }
  .eq {
	padding: 10px;
  }
  .item:nth-of-type(odd) {
	background: #F9F9F9;
  }
  .item:nth-of-type(even) {
	background: #fff;
  }
  .equalHW {
	flex: 1;
  }
  .equalHM {
	width: 32%;
  }
  .equalHMR {
	width: 32%;
	margin-bottom: 2%;
  }
  table.table {
	width: 100%;
	margin-top: 20px;
	border-collapse: collapse;
  }
  .table th, .table td {
	text-align: left;
	padding: 0.25em;
  }
  .table tr {
	border-bottom: 1px solid #DDD;
  }
  button:hover {
	box-shadow: 0 0 4px rgba(3, 3, 3, 0.8);
	opacity: 0.9;
  }
`;

export default ReceiptFunction;
