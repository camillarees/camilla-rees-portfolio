import React, { Component } from "react";

class Footer extends Component {
  render() {

    return (
      <footer>
        <div>
          <div>
            <div className="col">
              <div className="copyright py-4 text-center">
                <div className="container">
                  <small>
                    Copyright &copy;{" "}
                    {this.props.sharedBasicInfo
                      ? this.props.sharedBasicInfo.name
                      : "???"}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
