import React, { PureComponent } from "react";
import Reviews from "../containers/reviews";

export default class Hotel extends PureComponent {
  state = { show: false };

  showreviews = () => this.setState({ show: !this.state.show });

  dateFormatter = (date)=>{
    const dateObject = new Date(date);
    return `${dateObject.getDay().toString()}.
             ${dateObject.getMonth().toString()}. 
             ${dateObject.getFullYear().toString()}`;  
  };


  render() {
    const {
      hotel: {
        images,
        name,
        city,
        country,
        stars,
        description,
        price,
        id,
        date_start,
        date_end
      }
    } = this.props;
    const { show } = this.state;
    const startDate = new Date(date_start);
    const endDate = new Date(date_end);

    return (
      <article className="post">
        <section className="post-inner">
          <figure className="post__image-wrapper">
            <img className="post__image" src={images[0]} alt="hotel image" />
          </figure>
          <div className="post__details">
            <header className="post__header">
              <div className="post__title-wrapper">
                <h2 className="post__title">{name}</h2>
                <p className="post__sub-title">
                  {city} - {country}
                </p>
              </div>
              <div className={"post__rating post__rating--star" + stars}>
                <span className="post__rating__star">★</span>
                <span className="post__rating__star">★</span>
                <span className="post__rating__star">★</span>
                <span className="post__rating__star">★</span>
                <span className="post__rating__star">★</span>
              </div>
            </header>
            <p className="post__description">{description}</p>
            <footer className="post__footer">
              <div className="post__button-wrapper">
                <button
                  className="post_button button"
                  onClick={this.showreviews}
                >
                  show reviews
                </button>
              </div>
              <div className="post_date-rate-wrapper">
                <p className="post_rate">{price} €</p>
                <p className="post_date-rage">
                    {this.dateFormatter(date_start)+" - "+this.dateFormatter(date_end)}
                </p>
              </div>
            </footer>
          </div>
        </section>
        <Reviews showreviews={show} hotelid={id} />
      </article>
    );
  }
}
