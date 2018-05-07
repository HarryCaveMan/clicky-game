import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


class Images extends React.Component{
    
  imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2OIUA_mHawGTVcnLK0qJR-ysNQQRGYBQZaNxtIBiEnj-LJ-ykw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8_naKc6u_0TUa0vWnXU9gn3WLeNkYe8_wC8XTjl_y-QgNjrc",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStwAuSmEM9eN-ZdoP6oW-3bkqc5z06wL0QICueI1CrC3wE8OeU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9i-3BShjGAaHeH2pmRbfKl-X8RmI1_36pWt51GDybcfXuWv5xA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIMlVWQTwyIDQheyvy7vozO7p_a1pfUteelpEmIiMw7r3U6fjIyA",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMimvqBG-2UUUtw8tC4BLGj-rXsByQ-XQErpKs6Y4uATyblihD",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6OhGlT6f3syUqw5GwFXdLFhLmJH_eOL49VHtQTplbcF5qifhsg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvMvsVz0_eDwT3OEoAb3mHzUOnu1sGORxmSlQ4aq8QbfE3HnD",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdKftSqj0GcsxjNp3stcNmjWNE5SgjL8CspOr9fW-qhftA9via",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn55M_3cNejHjI7tyv0IdMs0OfzPA8oHsAtGx3aXHcD_VYaxpgAg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwCEUHWm9xzqa1iActw2b2yaDGlyChB1mJZbpLMuXmjofy40Q6",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2qWBxls6v8jex1hz1VfOnjzOVTkq7A2d30GlcIAQhajAzZXM"
  ];

  shuffle = () => this.setState({
    tileData: 
    function (a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;        
    }(this.state.tileData)
  });

  state = {tileData:
    this.imageUrls.map(url =>{ return {
       img:url,
       title:`BIRB${this.imageUrls.indexOf(url)}`,
       idx:this.imageUrls.indexOf(url)
     }
  })
};  
componentDidMount = this.shuffle();

handleClick = event => {
    event.preventDefault();
    this.shuffle();
    this.props.onGuess(event.target.id);
}; 
  render () {return (
    <Grid container spacing={24}>
      {
        this.state.tileData.map(img => 
            <Grid className={`birbGrid`}item xs={6} sm={3}>
            <Paper elevation={3}>
                <img id={img.idx} src={img.img} alt={img.title} onClick={this.handleClick}/>
            </Paper>
            </Grid>)
       }
    </Grid>
  );}
}
export default Images;  