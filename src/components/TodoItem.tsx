function Item({itemName,itemDate}){
  
  // let ItemName = 'Play football';
  // let ItemDate = '11/20/2024';

  return(
    <div className="row ms-0">
    <div className="col-6">{itemName}</div>
    <div className="col-4">{itemDate}</div>
    <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
  </div>
  );
}
export default Item;