/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';
import './App.css';
import { ContainerImages } from './components/ContainerImages/ContainerImages';
import { IState, HandleChange, HandleSubmit } from './models/model';
import { Search } from './components/Search/Search';
import { getImages } from './utils/utils';

interface IProps {}

export class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      search: 'graffiti',
      dataImages: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const { search } = this.state;
    this.setState({ dataImages: await getImages(search) });
  }

  handleChange: HandleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleSubmit: HandleSubmit = async (event) => {
    event.preventDefault();
    const { search } = this.state;
    this.setState({ dataImages: await getImages(search) });
  };

  render() {
    const { search, dataImages } = this.state;
    return (
      <div className="App">
        <Search
          search={search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <ContainerImages dataImages={dataImages} />
      </div>
    );
  }
}
