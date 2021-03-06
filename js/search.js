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
        image="img/food3.jpg"
        title="Merrick Grain Free Real Texas Beef + Sweet Potato Dry Dog Food"
        description="The Best Dog Ever deserves the Best Food Ever. That's why Merrick's grain-free recipes provide only the best to your best friend in quality, nutrition and taste. Merrick grain-free recipes start with real deboned meat, fish or poultry as the 1 ingredient for a high protein, nutritious grain-free meal, along with farm-fresh fruits and vegetables like sweet potatoes, blueberries, peas and more."
        linkDescription="Max Pet Shop"
      />
      <Result
        image="img/food1.jpg"
        title="BLUE Wilderness® Adult Dog Food - Grain Free, Natural"
        description="Ideal for dogs with high activity levels, Wilderness provides the optimal balance of protein, fats and healthy complex carbohydrates. Made with high quality ingredients including generous amounts of tasty and nutritious turkey and chicken to supply the protein needed for your dog's active lifestyle. Wilderness is a sensible alternative to raw diets. Wilderness contains no chicken or poultry by-product meal, artificial preservatives, corn, wheat or soy. Delicious Turkey & Chicken Grill formula. "
        linkDescription="Makis Pet Shop"
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

const MunchkinResults = () => {
  return (
    <div className='search-results-box'>
      <Result
        image="img/wilkie.jpg"
        title="Wilkie - Munchkin & Domestic Short Hair Mix"
        description="This “golden boy” could not be any more laid-back or sweet. He was very ill at a rural shelter when he was rescued and after lots of love, good food and medical treatment, he has become an awesome kitten. His favorite toy is the cardboard incline and he has been paired up with a little girl named Addie Belle. To say that he loves her and watches over her would be an understatement. He would love to be adopted into a special loving home, along with his girl!! By the way, Addie Belle is a special needs baby and keeping these two together is their dream of a happy ending, or should we say beginning! You will adore Wilkie and his protective ways. Are you up for a super sweet pair of sunny orange delights? Double the fun; what could be better?"
        linkDescription="Max Pet Shop"
      />
      <Result
        image="img/hans.jpg"
        title="Hans So Low"
        description="Hans So Low is a 2-3 yr old MN Munchkin cat (no papers). This handsome and affectionate boy needs to be the SOLO cat (fits his name). Rescued as a stray in July, we do not know his history. He does not like other cats and will stalk and attack them. He does well with dogs and birds. Solo is an outgoing, friendly guy that likes to hang out where people are and sit in laps. If he is overly petted, he may nip. So, he may not be the best fit in a household with very young children. If you think Solo is a good fit for your family, please fill out an application."
        linkDescription="Cat shelter"
      />
      <Result
        image="img/sassy.jpg"
        title="Sassy"
        description=""
        linkDescription="PetCity"
      />
    </div>
  );
};

const GermanShepherdResults = () => {
  return (
    <div className='search-results-box'>
        <Result
          image="img/avalon.jpg"
          title="Avalon - German Shepherd Dog Mix"
          description="Avalon just joined us from the Butte County Fire zone. She is an adorable girl with big satellite ears who wants nothing more than to play fetch with her squeaky ball all day then snuggle up on the couch with her people once she's tired. She's a smart, social pup who is potty trained and knows her sit and lay down commands. With her smarts, she would be a dream dog for an active person who will be patient in working on her leash skills and mouthiness. She loves being with people and will hang out and ask for belly rubs in whichever room you're in. We do not know how she is with cats, so best home for her would be cat-less."
          linkDescription="Tasos Pet Shop"
        />
      <Result
        image="img/dory.jpg"
        title="Dory - German Shepherd"
        description=""
        linkDescription="Breeder"
      />
      <Result
        image="img/chelsea.jpg"
        title="Chelsea - Belgian Malinois/German Shepherd"
        description=""
        linkDescription="Animal shelter"
      />
      <Result
        image="img/nora.jpg"
        title="Nora - German Shepherd"
        description=""
        linkDescription="MyPetShop"
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
        if (this.props.searchTerm.includes('german shepherd') ||
            this.props.searchTerm.includes('german shepherds') ||
            this.props.searchTerm.includes('dog')) {
          return <GermanShepherdResults />;
        } else if (this.props.searchTerm.includes('dog food')) {
          return <DogFoodResults />;
        } else if (this.props.searchTerm.includes('munchkin') ||
            this.props.searchTerm.includes('munchkin cat') ||
            this.props.searchTerm.includes('munchkins')) {
          return <MunchkinResults />;
        } else {
          return <NoResults value={this.props.searchTerm}/>;
        }
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
            placeholder='Search on Pet-Bay...'
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

