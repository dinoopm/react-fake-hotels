import React, { PureComponent } from "react";

export default class Reviews extends PureComponent {
  componentDidUpdate() {
    const { showreviews, reviews, getReviews, hotelid } = this.props;
    showreviews && !reviews && getReviews(hotelid);
  }

  render() {
    const { showreviews, reviews } = this.props;
    const showClass = showreviews ? "toggle-show" : "";

    if (reviews) {
      return (
        <section className={"post__reviews " + showClass}>
          {reviews.map((review, index) => {
            const feeling = review.positive ? "positive" : "negative";
            return (
              <article className="post__review" key={index}>
                <div className="post__review__feeling">
                  {" "}
                  <span
                    className={
                      "post__review__feeling--shape post__review--" + feeling
                    }
                  />
                </div>
                <div className="post__review__comment">
                  <h3 className="post__review__title">{review.name}</h3>
                  <p className="post__review_title">{review.comment}</p>
                </div>
              </article>
            );
          })}
        </section>
      );
    } else {
      return null;
    }
  }
}
