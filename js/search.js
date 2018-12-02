'use strict';

const Result = (props) => {
  return (
    <div className="card result-cards">
      <img className="card-img-top" src={props.image} width='180' alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description} </p>
        <a href="#" className="btn btn-primary">{props.linkDescription}</a>
      </div>
    </div>
  );
}

const DogFoodResults = () => {
  return (
    <div className='search-results-box'>
      <Result
        image="img/food1.jpg"
        title="BLUE Wilderness® Adult Dog Food - Grain Free, Natural"
        description="Ideal for dogs with high activity levels, Wilderness provides the optimal balance of protein, fats and healthy complex carbohydrates. Made with high quality ingredients including generous amounts of tasty and nutritious turkey and chicken to supply the protein needed for your dog's active lifestyle. Wilderness is a sensible alternative to raw diets. Wilderness contains no chicken or poultry by-product meal, artificial preservatives, corn, wheat or soy. Delicious Turkey & Chicken Grill formula. "
        linkDescription="Makis pet shop"
      />
      <Result
        image="img/food2.jpg"
        title="BLUE Homestyle Recipe® Adult Dog Food"
        description=" Treat your dog to BLUE Homestyle Recipe Fish and Sweet Potato Dinner Canned Adult Dog Food that contains whitefish, sweet potatoes and garden vegetables for a hearty taste dogs love. The tasty recipe is a natural food with added vitamins and minerals to promote a healthy diet. Your furry friend will devour BLUE Homestyle Recipe Fish and Sweet Potato Dinner Canned Adult Dog Food. The natural food contains whitefish, sweet potatoes and an array of garden vegetables, including carrots and peas, for a nutrient-rich meal. The hearty recipe contains added vitamins and minerals to keep your dog happy and healthy. "
        linkDescription="PetCity"
      />
    </div>
  );
};

const NoResults = (props) => {
  return (
    <div className='no-results search-results-box'>No results found for {props.value}!</div>
  );
}

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.showResults) {
      switch(this.props.searchTerm) {
        case 'dog food':
          return <DogFoodResults />;
        default:
          return <NoResults value={this.props.searchTerm}/>;
      }
       /* return (
          <div
            className='search-results-box'
          >
            {this.props.searchTerm}
          </div>
        );
      */
    } else {
      return null;
    }
  }
}

class SearchMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: '', buttonPushed: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(ev) {
    if (!ev.target.value) {
      this.setState({
        value: ev.target.value,
        buttonPushed: false
      });
    } else {
      this.setState({
        value: ev.target.value,
      });
    }
  }

  handleSubmit(ev) {
    this.setState({buttonPushed: true});
    ev.preventDefault();
  }

  render() {
    const { value, buttonPushed } = this.state;
    let showResults = false;

    if (value && buttonPushed) {
      showResults = true;
    }

    return (
      <React.Fragment>
        <form
          onSubmit={this.handleSubmit}
          className='subscribe_form'
        >
          <input
            type="text"
            id="search-term"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Search for any pet activities'
            autoFocus={true}
          />
          <input
            id="search-button"
            type="submit"
            value="Search!"
          />
        </form>
        <SearchResults searchTerm={value} showResults={showResults}/>
      </React.Fragment>
    );
  }
}

const root = document.querySelector('#react-search');
ReactDOM.render(React.createElement(SearchMain), root);

