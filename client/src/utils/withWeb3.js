import React, { Component } from 'react';
import getWeb3 from './getWeb3';

/**
 * WrappedComponent should use componentWillReceiveProps to implement web3
 * calls instead of componentDidMount.
 */
export default function withWeb3(WrappedComponent) {
  return class extends Component {
    state = {
      web3: null,
      accounts: null,
      loading: false
    };

    async componentDidMount() {
      this.setState({ loading: true });

      try {
        // Get network provider and web3 instance.
        const web3 = await getWeb3();

        // Use web3 to get the user's accounts.
        const accounts = web3 && await web3.eth.getAccounts();

        this.setState({ web3, accounts });
      } catch (error) {
        // Catch any errors for any of the above operations.
        console.error(error);
      }

      this.setState({ loading: false });
    };

    render() {
      const { web3, accounts, loading } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          web3={web3}
          accounts={accounts}
          loading={loading}
        />
      );
    }
  };
}
