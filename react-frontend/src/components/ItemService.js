import axios from 'axios';

class ItemService {

  updateData(data,id){
    axios.post('http://localhost:4200/items/update/'+id, {
      item:data
    })
    .then(res=> this.setState({items:res.data}))
    .catch(err=>console.log(err))
  }

  deleteData(id){
    axios.get('http://localhost:4200/items/delete/'+id)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
  }

  sendData(data) {
    axios.post('http://localhost:4200/items/add/post', {
    item: data
  })
  .then(function (response) {
      console.log(response);
  }) 
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default ItemService;
