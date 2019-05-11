import React, { Component } from 'react';

export default function withContract(Contract, propName) {
  return WrappedComponent => {
    return class extends Component {
      state = {
        [propName]: null
      }

      async componentDidUpdate(prevProps) {
        const { web3 } = this.props;

        if (web3 !== prevProps.web3) {
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = Contract.networks[networkId];
          const contract = new web3.eth.Contract(
            Contract.abi,
            deployedNetwork && deployedNetwork.address,
          );

          this.setState({ [propName]: contract });
        }
      }

      render() {
        const contractProps = { [propName]: this.state[propName] }; 

        return <WrappedComponent {...this.props} {...contractProps} />;
      }
    }
  };
}
