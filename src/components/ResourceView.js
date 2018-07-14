import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import NumberFormat from 'react-number-format'

@inject('accountStore')
@observer
class ResourceView extends Component {
  constructor(props) {
    super(props)
    let { accountStore } = this.props
    this.accountStore = accountStore
  }

  render() {
    let ramUsagePercent =
      parseInt(
        (this.accountStore.accountInfo.ram_usage / this.accountStore.accountInfo.ram_quota) * 100,
        10
      ) + '%'
    let cpuUsagePercent =
      parseInt(
        (this.accountStore.accountInfo.cpu_limit.used /
          this.accountStore.accountInfo.cpu_limit.max) *
          100,
        10
      ) + '%'
    let netUsagePercent =
      parseInt(
        (this.accountStore.accountInfo.net_limit.used /
          this.accountStore.accountInfo.net_limit.max) *
          100,
        10
      ) + '%'
    return (
      <Fragment>
        <div className="main-body">
          <div className="page-wrapper">
            <div className="page-body">
              <div className="row">
                <div className="col-md-12 col-xl-12">
                  <div className="card summery-card">
                    <div className="card-header">
                      <div className="card-header-left ">
                        <h5>Resource Usage</h5>
                      </div>
                      <div className="card-header-right">
                        <ul className="list-unstyled card-option">
                          <li>
                            <i className="icofont icofont-simple-left " />
                          </li>
                          <li>
                            <i className="icofont icofont-maximize full-card" />
                          </li>
                          <li>
                            <i className="icofont icofont-minus minimize-card" />
                          </li>
                          <li>
                            <i className="icofont icofont-refresh reload-card" />
                          </li>
                          <li>
                            <i className="icofont icofont-error close-card" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-lg-4">
                        <div>
                          <div className="card-block user-radial-card">
                            <div
                              data-label="RAM"
                              className="radial-bar radial-bar-90 radial-bar-lg radial-bar-danger"
                            />
                            <span className="f-26 text-c-pink">
                              <NumberFormat
                                value={this.accountStore.accountInfo.ram_usage}
                                displayType={'text'}
                                thousandSeparator={true}
                              />({ramUsagePercent})
                            </span>
                            <p>
                              From{' '}
                              <NumberFormat
                                value={this.accountStore.accountInfo.ram_quota}
                                displayType={'text'}
                                thousandSeparator={true}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div>
                          <div className="card-block user-radial-card">
                            <div
                              data-label="CPU"
                              className="radial-bar radial-bar-90 radial-bar-lg radial-bar-danger"
                            />
                            <span className="f-26 text-c-pink">
                              <NumberFormat
                                value={this.accountStore.accountInfo.cpu_limit.used}
                                displayType={'text'}
                                thousandSeparator={true}
                              />({cpuUsagePercent})
                            </span>
                            <p>
                              From{' '}
                              <NumberFormat
                                value={this.accountStore.accountInfo.cpu_limit.max}
                                displayType={'text'}
                                thousandSeparator={true}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4">
                        <div>
                          <div className="card-block user-radial-card">
                            <div
                              data-label="NET"
                              className="radial-bar radial-bar-90 radial-bar-lg radial-bar-danger"
                            />
                            <span className="f-26 text-c-pink">
                              <NumberFormat
                                value={this.accountStore.accountInfo.net_limit.used}
                                displayType={'text'}
                                thousandSeparator={true}
                              />({netUsagePercent})
                            </span>
                            <p>
                              From{' '}
                              <NumberFormat
                                value={this.accountStore.accountInfo.net_limit.max}
                                displayType={'text'}
                                thousandSeparator={true}
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ResourceView