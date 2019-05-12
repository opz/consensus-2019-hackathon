import React, { Component } from "react";
import "./App.css";
import { MDBBtn } from "mdbreact";
import withWeb3 from "./utils/withWeb3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageValue: 0,
      web3: null,
      accounts: null,
      contract: null,
    };
  }

  componentDidMount = async () => {
    try {
      /* // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState(
        { web3, accounts, contract: instance },
        //this.runExample
      ); */
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    return (
      <div className="body-wrap">
        <main>
          <section className="hero">
            <div className="container">
              <div className="hero-inner">
                <div className="hero-copy">
                  <h1 className="hero-title mt-0">Enabling trust between buyers and sellers.</h1>
                  <p className="hero-paragraph">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                  <div className="hero-cta">
                    <a className="button button-primary" href="/seller"> Sellers </a>
                    <a className="button buyer-button" href="/buyer"> Buyers </a>
                  </div>
                </div>
                <div className="hero-figure anime-element">
                  <svg className="placeholder" width="528" height="396" viewBox="0 0 528 396">
                    <rect width="528" height="396" styles="fill:transparent;" />
                  </svg>
                  <div className="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                  <div className="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                  <div className="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                  <div className="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                  <div className="hero-figure-box hero-figure-box-05"></div>
                  <div className="hero-figure-box hero-figure-box-06"></div>
                  <div className="hero-figure-box hero-figure-box-07"></div>
                  <div className="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                  <div className="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                  <div className="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>
    );
  }
}

export default withWeb3(App);
