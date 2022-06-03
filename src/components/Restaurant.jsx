const Restaurant = (props) => {
  const {
    name,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src,
  } = props.data;

  return (
    <div
      style={{
        border: "2px solid black",
        background: "rgb(243,243,243)",
        margin: "auto",
        marginBottom: 10,
        marginTop:10,
        flex: 1,
        padding: 10,
        width: "600px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 15,
          border: "1px solid rgb(241,241,241)",
          background: "rgb(255,255,255)",
          borderRadius: "5px",
        }}
      >
        <div style={{ flex: 1, marginTop: "17px" }}>
          <img
            width="150px"
            height="150px"
            style={{ borderRadius: "5px" }}
            src={src}
            alt={name}
          />
        </div>
        <div
          style={{
            textAlign: "left",
            paddingLeft: 10,
            flex: 2,
            lineHeight: "12px",
          }}
        >
          <h2 style={{ color: "rgb(186,62,83)", lineHeight: "20px" }}>
            {name}
          </h2>
          <p
            style={{
              color: "rgb(146,155,159)",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {cuisine.join(", ")}
          </p>
          <p
            style={{
              color: "rgb(146,155,159)",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Cost ₹{costForTwo} for one
          </p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            {" "}
            Min ₹{minOrder}{" "}
            <i class="fas fa-circle" style={{ fontSize: "5px" }}></i> Up to{" "}
            {deliveryTime} min{" "}
          </p>
          {cash && card ? (
            <p style={{ fontSize: "15px", fontWeight: "500" }}>
              {" "}
              Accepts Cash and Card payments both
            </p>
          ) : card ? (
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              {" "}
              Accepts Card payments only
            </p>
          ) : (
            <p style={{ fontSize: "18px", fontWeight: "500" }}>
              {" "}
              Accepts Cash payments only
            </p>
          )}
        </div>
        <div
          style={{
            textAlign: "right",
            flex: 1,
            marginTop: "12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <div
            style={{
              background: "rgb(114,160,43)",
              color: "rgb(255,255,251)",
              width: "40px",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "5px",
            }}
          >
            {rating}
          </div>
          <div
            style={{
              color: "rgb(146,155,159)",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {votes} votes
          </div>
          <div
            style={{
              color: "rgb(146,155,159)",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            {reviews} reviews
          </div>
        </div>
      </div>
      <div
        style={{
          border: "2px solid black",
          borderBottom: "3px solid black",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            padding: 10,
            margin:"auto",
          }}
        >
            <button style={{height:"40px",backgroundColor:"black",color:"yellow"}}> Order Online <i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
