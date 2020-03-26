import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadImages} from '../../actions/index';
class ImageGrid extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount = () => {
        this.props.loadImages();
    }

    render() {
        const {isLoading, images, error} = this.props;
        console.log(images);
        
        return (
            <div className="content">
                <section className="grid" >
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            {/* <Stats stats={imageStats[image.id]} /> */}
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <button
                    className="button"
                    onClick={this.props.loadImages}
                    // loading={isLoading}
                >
                    Load More
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    images: state.images,
    error: state.error,
})

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages())
})

export default connect(mapStateToProps, mapDispatchToProps) (ImageGrid);


