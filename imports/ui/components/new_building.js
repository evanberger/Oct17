import React from 'react';
import _ from 'lodash';

class NewBuilding extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      templateSelected: null
    };
    this.loadTemplate = this.loadTemplate.bind(this);
  }

  create() {
    const building = {
      name: this.refs.name.value,
      existingRate: this.refs.existingRate.value,
      iceStorageRate: this.refs.iceStorageRate.value,
      chillerType: this.refs.chillerType.value,
      chillerTonnage: this.refs.chillerTonnage.value,
      template: this.refs.template.value,
      standardChillerEfficiency: this.refs.standardChillerEfficiency.value,
      ddChillerEfficiency: this.refs.ddChillerEfficiency.value,
      iceMakingEfficiency: this.refs.iceMakingEfficiency.value,
      nonIceChillerCost: this.refs.nonIceChillerCost.value,
      icemakingChillerCost: this.refs.icemakingChillerCost.value,
      icebankCost: this.refs.icebankCost.value,
      hxCost: this.refs.hxCost.value,
      rebate: this.refs.rebate.value,
      additionalCostsIceStorageInstallation: this.refs.additionalCostsIceStorageInstallation.value,
      downsizeDuctSavings: this.refs.downsizeDuctSavings.value,
      downsizePipeSavings: this.refs.downsizePipeSavings.value,
      roundDuctSavings: this.refs.roundDuctSavings.value,
      // hours: {
      //   hour1: this.refs.hour1.value * templateSelected.hour1
      // }
    };

    this.props.createBuilding(building);
  }

  loadTemplate() {
    const templateSelected = _.find(this.props.templates, {name: this.refs.template.value});
    this.setState({templateSelected: templateSelected});
  }
  loadChillerType() {
    const chillerTypeSelected = _.find(this.props.chillerType, {name: this.refs.chillerType.value});
    this.setState({chillerTypeSelected: chillerTypeSelected});
  }
  loadMonths() {
    const monthsSelected = _.find(this.props.monthsCooling, {name: this.refs.monthsCooling.value});
    this.setState({monthsSelected: monthsSelected});
  }
  loadStandardChillerEfficiency() {
    const standardChillerEfficiencySelected = _.find(this.props.standardChillerEfficiency, {name: this.refs.standardChillerEfficiency.value});
    this.setState({standardChillerEfficiencySelected: standardChillerEfficiencySelected});
  }
  loadDdChillerEfficiency() {
    const ddChillerEfficiencySelected = _.find(this.props.ddChillerEfficiency, {name: this.refs.ddChillerEfficiency.value});
    this.setState({ddChillerEfficiencySelected: ddChillerEfficiencySelected});
  }
  loadDdChillerEfficiency() {
    const ddChillerEfficiencySelected = _.find(this.props.ddChillerEfficiency, {name: this.refs.ddChillerEfficiency.value});
    this.setState({ddChillerEfficiencySelected: ddChillerEfficiencySelected});
  }
  loadIceMakingEfficiency() {
    const iceMakingEfficiencySelected = _.find(this.props.iceMakingEfficiency, {name: this.refs.iceMakingEfficiency.value});
    this.setState({iceMakingEfficiencySelected: iceMakingEfficiencySelected});
  }
  loadNonIceChillerCost() {
    const iceMakingEfficiencySelected = _.find(this.props.nonIceChillerCost, {name: this.refs.nonIceChillerCost.value});
    this.setState({nonIceChillerCostSelected: nonIceChillerCostSelected});
  }
  loadIcemakingChillerCost() {
    const icemakingChillerCostSelected = _.find(this.props.icemakingChillerCost, {name: this.refs.icemakingChillerCost.value});
    this.setState({icemakingChillerCostSelected: icemakingChillerCostSelected});
  }
  loadIcebankCost() {
    const icebankCostSelected = _.find(this.props.icebankCost, {name: this.refs.icebankCost.value});
    this.setState({icebankCostSelected: icebankCostSelected});
  }
  loadHxCost() {
    const hxCostSelected = _.find(this.props.hxCost, {name: this.refs.hxCost.value});
    this.setState({hxCostSelected: hxCostSelected});
  }
  loadRebate() {
    const rebateSelected = _.find(this.props.rebate, {name: this.refs.rebate.value});
    this.setState({rebateSelected: rebateSelected});
  }



  render() {

    return (
      <div className="new-building row">
        <div className="col-xs-6 col-xs-6-pull">
        <caption>General Project Info</caption>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="name">Project Name:</span>
          <input ref="name" id="name" type="text"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="existingRate">Existing Rate:</span>
          <input ref="existingRate" id="existingRate" type="text"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="iceStorageRate">Ice Storage Rate:</span>
          <input ref="iceStorageRate" id="iceStorageRate" type="text"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="monthsCooling">Months of Cooling:</span>
          <select ref="monthsCooling" id="monthsCooling" onChange={this.loadMonths}>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <caption className="section-start">Chiller Plant Info</caption>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="chillerType">Air-Cooled / Water-Cooled:</span>
          <select ref="chillerType" id="chillerType" onChange={this.loadChillerType}>
            <option value="">-- select --</option>
            <option value="Air-Cooled">Air-Cooled</option>
            <option value="Water-Cooled">Water-Cooled</option>
          </select>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="chillerTonnage">Chiller Tonnage:</span>
          <input ref="chillerTonnage" id="chillerTonnage" type="text"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="standardChillerEfficiency">Chiller Efficiency, standard chiller:</span>
          <input ref="standardChillerEfficiency" onChange={this.loadStandardChillerEfficiency}
            className="x-minus-one" id="standardChillerEfficiency" type="number"/>
          <span className="input-group-addon endpiece" id="basic-addon2">kW/ton</span>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="ddChillerEfficiency">Dual-Duty Chiller Efficiency:</span>
          <input ref="ddChillerEfficiency" onChange={this.loadDdChillerEfficiency}
            className="x-minus-one" id="ddChillerEfficiency" type="number"/>
          <span className="input-group-addon endpiece">kW/ton</span>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="iceMakingEfficiency">Ice-Making Chiller Efficiency:</span>
          <input ref="iceMakingEfficiency" onChange={this.loadIceMakingEfficiency}
            className="x-minus-one" id="iceMakingEfficiency" type="number"/>
          <span className="input-group-addon endpiece">kW/ton</span>
        </div>
        <caption className="section-start">Upfront Costs & Financial Variables</caption>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="nonIceChillerCost">Non Ice Chiller Cost:</span>
          <span className="input-group-addon frontpiece">$</span>
          <input ref="nonIceChillerCost" onChange={this.loadNonIceChillerCost}
            className="x-minus-two" id="nonIceChillerCost" type="number" placeholder="500"/>
          <span className="input-group-addon endpiece">/ton</span>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="icemakingChillerCost">Ice-Making Chiller Cost:</span>
          <span className="input-group-addon frontpiece">$</span>
          <input ref="icemakingChillerCost" className="x-minus-two" id="icemakingChillerCost" type="number" placeholder="500"/>
          <span className="input-group-addon endpiece">/ton</span>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="icebankCost">Cost per IceBank tank:</span>
          <span className="input-group-addon frontpiece">$</span>
          <input ref="icebankCost" className="x-minus-two" id="icebankCost" type="number" placeholder="14,000"/>
          <span className="input-group-addon endpiece">/tank</span>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="hxCost">Cost for Plate-Frame HX:</span>
          <span className="input-group-addon frontpiece">$</span>
          <input ref="hxCost" className="x-minus-two" id="hxCost" type="number" placeholder="60"/>
          <span className="input-group-addon endpiece">/ton</span>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="additionalCostsIceStorageInstallation">Additional Costs for Ice Storage:</span>
            <span className="input-group-addon frontpiece">$</span>
            <input ref="additionalCostsIceStorageInstallation" className="x-three" id="additionalCostsIceStorageInstallation" type="number" placeholder="60,000"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="rebate">Rebate:</span>
          <span className="input-group-addon frontpiece">$</span>
          <input ref="rebate" className="x-minus-two" id="rebate" type="number" placeholder="0"/>
          <span className="input-group-addon endpiece">/kW</span>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="downsizeDuctSavings">Savings from Downsized Ducts:</span>
          <span className="input-group-addon frontpiece">$</span>
          <input ref="downsizeDuctSavings" className="x-three" id="downsizeDuctSavings" type="number" placeholder="0"/>
          </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="downsizePipeSavings">Savings from Downsized Pipes:</span>
          <span className="input-group-addon frontpiece">$</span>
          <input ref="downsizePipeSavings" className="x-three" id="downsizePipeSavings" type="number" placeholder="0"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="roundDuctSavings">Savings from Round Ductwork:</span>
            <span className="input-group-addon frontpiece">$</span>
            <input ref="roundDuctSavings" className="x-three" id="roundDuctSavings" type="number" placeholder="0"/>
        </div>
        </div>
        <div className="col-xs-6 col-xs-6-push">
        <caption>Building Load Info</caption>
        <div className="input-group">
          <span className="input-group-addon" htmlFor="template">Hours template</span>
          <select ref="template" id="template" onChange={this.loadTemplate}>
            <option value="">Select a template</option>
            <option value="Middle School">Middle School</option>
            <option value="High School">High School</option>
            <option value="Office Building">Office Building</option>
            <option value="College">College</option>
          </select>
        </div>
        <div>
          <table>
          <thead>
              <tr>
                  <th className="col-xs-2" scope="col">HE</th>
                  <th className="col-xs-5" scope="col">Hour Type</th>
                  <th className="col-xs-5" scope="col">Building Load (in tons)</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <select ref="HE1type" onChange={this.HE1type}>
                  <option value="icemaking">Ice-Making</option>
                  <option value="partial">Partial Storage</option>
                  <option value="full">Full Storage</option>
                  <option value="na">No Action</option>
                </select>
              </td>
              <td><input className="hourlyLoad" id="HE1" type="number" name="1" value="0" /></td>
            </tr>
                  <tr>
              <td>2</td>
              <td>
                <select ref="HE2type" onChange={this.HE2type}>
                  <option value="icemaking">Ice-Making</option>
                  <option value="partial">Partial Storage</option>
                  <option value="full">Full Storage</option>
                  <option value="na">No Action</option>
                </select>
              </td>
              <td><input className="hourlyLoad" id="HE2" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <select ref="HE3type" onChange={this.HE3type}>
                  <option value="icemaking">Ice-Making</option>
                  <option value="partial">Partial Storage</option>
                  <option value="full">Full Storage</option>
                  <option value="na">No Action</option>
                </select>
              </td>
              <td><input className="hourlyLoad" id="HE3" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE4" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE5" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>6</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE6" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>7</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE7" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>8</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE8" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>9</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE9" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>10</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE10" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>11</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE11" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>12</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE12" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>13</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE13" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>14</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE14" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>15</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE15" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>16</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE16" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>17</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE17" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>18</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE18" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>19</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE19" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>20</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE20" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>21</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE21" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>22</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE22" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>23</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE23" type="number" name="1" value="0" /></td>
            </tr>
            <tr>
              <td>24</td>
              <td></td>
              <td><input className="hourlyLoad" id="HE24" type="number" name="1" value="0" /></td>
            </tr>
           </tbody>
          </table>
        </div>
        <div>
          <p></p>
          <span><strong>Template selected: </strong>
            <mark>{this.state.templateSelected && this.state.templateSelected.name}</mark>
          </span>
          <p></p>
        </div>
        <div>
         <button className="btn btn-primary send" onClick={this.create.bind(this)}>Send</button>
        </div>
        </div>
      </div>
    );
  }
}

export default NewBuilding;
