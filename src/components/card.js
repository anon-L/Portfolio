const Cards = ({
  src = null,
  cardText = null,
  cardTitle = null,
  btnText = null,
  link = null,
}) => (
  <div className="col-3 py-10 mw-800">
    <div className="card h-100 " style={{ borderRadius: 50 }}>
      <img
        className="card-img-top"
        src={src}
        alt="placeholder"
        style={{ borderRadius: "50px 50px 0px 0px" }}
      ></img>
      <div
        className="card-body rounded-50"
        style={{ background: "#CED4DA", borderRadius: "0px 0px 50px 50px" }}
      >
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text pb-25">{cardText}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{ }}
        >
          {btnText}
        </a>
      </div>
    </div>
  </div>
);

export default Cards;
