import React, { Component } from 'react'
import ConstData from '../Shared/ConstData';
import { Button, Card } from 'react-bootstrap'; 
// kg coding -js and reac
import '../Components/Gallery.css';
class Gallery extends Component {
    render() {
        return (
            <div className='container' style={{width:'100%'}}>
                <div className='sabMain'>
                <p className='gTitle'>Gallery images</p>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg1} class="card-img-top" alt="galleryimg" height={200} width={400} style={{textAlign:'center'}} />
                    <div class="card-body">
                        <p class="card-text"><b>Tandoori Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg2} class="card-img-top" alt="galleryimg" height={200} width={400} />
                    <div class="card-body">
                        <p class="card-text"><b>Hydrabadi Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg3} class="card-img-top" alt="galleryimg" height={200} width={400}  />
                    <div class="card-body">
                        <p class="card-text"><b>Chiken Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg4} class="card-img-top" alt="galleryimg" height={200} width={400}  />
                    <div class="card-body">
                        <p class="card-text"><b>Dum-Aloo Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg5} class="card-img-top" alt="galleryimg" height={200} width={400}  />
                    <div class="card-body">
                        <p class="card-text"><b>Lucknow Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg6} class="card-img-top" alt="galleryimg" height={200} width={400} />
                    <div class="card-body">
                        <p class="card-text"><b>Egg Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg11} class="card-img-top" alt="galleryimg" height={200} width={400} />
                    <div class="card-body">
                        <p class="card-text"><b>Tawa Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg9} class="card-img-top" alt="galleryimg" height={200} width={400} />
                    <div class="card-body">
                        <p class="card-text"><b>Mutton Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg10} class="card-img-top" alt="galleryimg" height={200} width={400} />
                    <div class="card-body">
                        <p class="card-text"><b>Paneer Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg13} class="card-img-top" alt="galleryimg" height={200} width={400} />
                    <div class="card-body">
                        <p class="card-text"><b>Veg Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg14} class="card-img-top" alt="galleryimg" height={200} width={400}/>
                    <div class="card-body">
                        <p class="card-text"><b>Prawn Biryani</b></p>
                    </div>
                </div>
                <div class="card" style={{width:"18rem"}}>
                    <img src={ConstData.Gimg15} class="card-img-top" alt="galleryimg" height={200} width={400} />
                    <div class="card-body">
                        <p class="card-text"><b>Prawn Biryani</b></p>
                    </div>
                </div>
                    {/* <div class="card-body">
                        <p class="card-text"><b>Hydrabadi Biryani</b>   < br/>
                         Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        <Button>Buy now</Button> &nbsp; <Button>Add to cart </Button>
                    </div> */}
                
            </div>
                </div>
                
        )
    }
}

export default Gallery
