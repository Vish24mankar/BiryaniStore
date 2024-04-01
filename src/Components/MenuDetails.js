import React, { Component } from 'react';
import { Table, Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import * as menuAction from '../Action/Menu_Action'
class MenuDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Menu: [],
            id: null,
            mId: '',
            menuName: '',
            menuType: '',
            menuHalf: '',
            menuFull: '',
            showModal: false,
            addModalShow: false // State for Add Modal
        };
    }
    componentDidUpdate(prevProps){
        if(prevProps.singleMenu !== this.props.singleMenu){
            const {id,mId,menuName,menuType,menuHalf,menuFull} = this.props.singleMenu;
            this.setState({
                id,mId,menuName,menuType,menuHalf,menuFull
            },()=>console.log(this.state))
        }
    }
    componentDidMount() {
        // this.fetchData();
        this.props.initMenuRequest();
    }

    // fetchData = () => {
    //     axios.get("http://localhost:8888/Menu").then((res) => {
    //         console.log(res.data);
    //         this.setState({ Menu: res.data });
    //     });
    // };

    toggleModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
    };

    toggleAddModal = () => { // Function to toggle Add Modal
        this.setState((prevState) => ({
            addModalShow: !prevState.addModalShow
        }));
    };

    deleteMenu = (id) => {
        if(window.confirm("Are you sure to delete Menu", id)){
            this.props.deleteMenuRequest(id);
            window.alert("Record deleted Successfully");
        }
        // if (window.confirm(`Are you sure to delete Menu: ${id}`)) {
        //     this.props.initMenuRequest(id)
        //     // let url = `http://localhost:8888/Menu/${id}`;
        //     // axios.delete(url).then(() => {
        //         window.alert("Record deleted Successfully");
        //     //     this.fetchData();
        //     // });
        // }
    };

    getSingleMenu = (id) => {
        let url = `http://localhost:8888/Menu/${id}`;
        axios.get(url).then((res) => {
            const { id, mId, menuName, menuType, menuHalf, menuFull } = res.data;
            this.setState({ id, mId, menuName, menuType, menuHalf, menuFull, showModal: true });
        });
    };

    inputChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    getRecord = (id) =>{
        this.props.getSingleProductRequest(id);
    }
    editMenu = (e) => {
        e.preventDefault();
        const { id, mId, menuName, menuType, menuHalf, menuFull, showModal, addModalShow } = this.state;
        const editMenu ={
            id: id,
            mId: mId,
            menuName: menuName,
            menuType: menuType,
            menuHalf: menuHalf,
            menuFull: menuFull
        }
        this.props.updateMenuRequest(editMenu)
        this.toggleModal();
        // e.preventDefault();
        // let url = `http://localhost:8888/Menu/${this.state.id}`;
        // let mObj = {
        //     id: this.state.id,
        //     mId: this.state.mId,
        //     menuName: this.state.menuName,
        //     menuType: this.state.menuType,
        //     menuHalf: this.state.menuHalf,
        //     menuFull: this.state.menuFull
        // };
        
        // axios.put(url, mObj).then(() => {
        //     // window.alert("Menu edited Successfully !!!");
        //     this.fetchData();
        //     this.toggleModal();
        // });
    };

    addMenu = (event) => {
        event.preventDefault();
        this.props.addMenuRequest(this.state);
        window.alert("Menu Added Successfully");
        this.toggleAddModal();
        // event.preventDefault();
        // let url = `http://localhost:8888/Menu`;
        // let mObj = {
        //     mId: this.state.mId,
        //     menuName: this.state.menuName,
        //     menuType: this.state.menuType,
        //     menuHalf: this.state.menuHalf,
        //     menuFull: this.state.menuFull
        // };
        // axios.post(url, mObj).then(() => {
        //     // window.alert("Menu Added Successfully");
        //     this.fetchData();
        //     this.toggleAddModal();
        // });
    };

    render() {
        console.log(this.props.allMenu)
        const { id, mId, menuName, menuType, menuHalf, menuFull, showModal, addModalShow } = this.state;
        return (
            <div className='container mt-5'>
                <p className='gTitle'>MenuCard Dashboard</p>
                <Button onClick={this.toggleAddModal} className='addBTN'>ADD</Button>
                <br /><br />
                {/* Rest of your table code */}
                
                <Table stripped bordered hover>
                    <thead>
                        <tr>
                            <th>Menu_Id</th>
                            <th>Menu Name</th>
                            <th>Type</th>
                            <th>Half Price</th>
                            <th>Full Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {Menu.length > 0 &&
                            Menu.map((data, index) => { */}
                            { this.props.allMenu.map((data,index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.mId}</td>
                                        <td>{data.menuName}</td>
                                        <td>{data.menuType}</td>
                                        <td>{data.menuHalf}</td>
                                        <td>{data.menuFull}</td>
                                        <td>
                                            <button type='button' className="btn btn-outline-success btn-sm" onClick={() => this.getSingleMenu(data.id)}>
                                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                            </button>
                                            &nbsp;&nbsp;
                                            <button type='button' className="btn btn-outline-danger btn-sm" onClick={() => this.deleteMenu(data.id)}>
                                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>

                <hr />
                <Modal show={showModal} onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.id ? 'Edit Form' : 'Add Form'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.state.id ? this.editMenu : this.addMenu}>
                            <Form.Group controlId="formMenuId">
                                <Form.Label>Menu ID</Form.Label>
                                <Form.Control type="text" name="mId" value={mId} 
                                // onChange={this.inputChangeHandler} 
                                onChange={(e) => this.inputChangeHandler(e)} />
                            </Form.Group>
                            <Form.Group controlId="formMenuName">
                                <Form.Label>Menu Name</Form.Label>
                                <Form.Control type="text" name="menuName" value={menuName} onChange={(e) => this.inputChangeHandler(e)}  />
                            </Form.Group>
                            <Form.Group controlId="formMenuType">
                                <Form.Label>Menu Type</Form.Label>
                                <Form.Control type="text" name="menuType" value={menuType} 
                                // onChange={this.inputChangeHandler} 
                                onChange={(e) => this.inputChangeHandler(e)}/>
                            </Form.Group>
                            <Form.Group controlId="formMenuHalf">
                                <Form.Label>Half Price</Form.Label>
                                <Form.Control type="text" name="menuHalf" value={menuHalf} 
                                // onChange={this.inputChangeHandler} 
                                onChange={(e) => this.inputChangeHandler(e)}
                                 />
                            </Form.Group>
                            <Form.Group controlId="formMenuFull">
                                <Form.Label>Full Price</Form.Label>
                                <Form.Control type="text" name="menuFull" value={menuFull} 
                                // onChange={this.inputChangeHandler} 
                                onChange={(e) => this.inputChangeHandler(e)}
                                />
                            </Form.Group>
                            <br />
                            <Button variant="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                            &nbsp;
                            <Button variant="primary" type="submit">
                                {this.state.id ? 'Save Changes' : 'Add Menu'}
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

                    {/* Add Modal */}
                    <Modal show={addModalShow} onHide={this.toggleAddModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Menu Form</Modal.Title>
                        </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.state.id ? this.editMenu : this.addMenu}>
                            <Form.Group controlId="formMenuId">
                                <Form.Label>Menu ID</Form.Label>
                                <Form.Control type="text" name="mId" value={mId} onChange={this.inputChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formMenuName">
                                <Form.Label>Menu Name</Form.Label>
                                <Form.Control type="text" name="menuName" value={menuName} onChange={this.inputChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formMenuType">
                                <Form.Label>Menu Type</Form.Label>
                                <Form.Control type="text" name="menuType" value={menuType} onChange={this.inputChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formMenuHalf">
                                <Form.Label>Half Price</Form.Label>
                                <Form.Control type="text" name="menuHalf" value={menuHalf} onChange={this.inputChangeHandler} />
                            </Form.Group>
                            <Form.Group controlId="formMenuFull">
                                <Form.Label>Full Price</Form.Label>
                                <Form.Control type="text" name="menuFull" value={menuFull} onChange={this.inputChangeHandler} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.toggleAddModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.addMenu}>
                            Add Menu
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
    const mapStateToProps = (state) =>({
       allMenu: state.menuStore.allMenu,
       singleMenu: state.menuStore.Menu
    })

    const mapDispatchToProps = (dispatch) =>({
        initMenuRequest: () =>dispatch(
            menuAction.getAllMenu()
        ),

        deleteMenuRequest: (id) => dispatch(
            menuAction.deleteteAllMenu(id)
        ),

        updateMenuRequest: (id) => dispatch(
            menuAction.updateAllMenu(id)
        ),
        addMenuRequest: (data) => dispatch(
            menuAction.addAllMenu(data)
        ),
        getSingleProductRequest:(id) =>dispatch(
            menuAction.updateAllMenu(id)
        )
    })
    // const mapDispatchToProps = (dispatch) => ({
    //     initMenuRequest: () => {
    //         dispatch(menuAction.getAllMenu());
    //     }
    // });
    
// export default MenuDetails;
export default connect(mapStateToProps, mapDispatchToProps)(MenuDetails);

 
