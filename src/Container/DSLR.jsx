/*searchDSLR() {
    var returnArr = [];
    database
      .orderByChild("category")
      .equalTo("DSLR")
      .on("child_added", function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);

        console.log(returnArr);
      });
    console.log(returnArr);
    return (
      <div>
        {returnArr.map(arr => (
          <Link to={`/${arr.key}`}>
            <div className="tile">
              <CardMedia>
                {renderHTML(arr.naslovna)}
                <div className="text">
                  <h1>{arr.title}</h1>

                  <p className="animate-text">
                    <span className="sazetak"> {arr.sazetak}</span>
                  </p>
                  <p className="animate-text">
                    <span>Autor: {arr.signature}</span> <br />
                  </p>
                </div>
              </CardMedia>
            </div>{" "}
          </Link>
        ))}{" "}
      </div>
    );
  }

*/
